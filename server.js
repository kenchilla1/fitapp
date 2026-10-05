const { createHash, randomBytes, scrypt: scryptCallback, timingSafeEqual } = require("node:crypto");
const { promisify } = require("node:util");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { mkdirSync } = require("node:fs");
const { DatabaseSync } = require("node:sqlite");

const scrypt = promisify(scryptCallback);
const port = Number(process.env.PORT) || 4173;
const host = process.env.HOST || "0.0.0.0";
const dataDirectory = process.env.REPWISE_DATA_DIR || join(__dirname, "data");
const databaseFile = join(dataDirectory, "repwise.sqlite");
const sessionLifetimeSeconds = 60 * 60 * 24 * 30;
const maxRequestBytes = 1024 * 1024;
const maxAvatarBytes = 512 * 1024;
const authAttempts = new Map();
const recoveryQuestions = [
  { id: "first-school", label: "What was the name of your first school?" },
  { id: "childhood-friend", label: "What was the first name of a childhood friend?" },
  { id: "favorite-teacher", label: "What was the last name of a favorite teacher?" },
  { id: "first-concert", label: "What was the first concert you attended?" },
  { id: "childhood-book", label: "What was a favorite book from childhood?" },
  { id: "first-pet", label: "What was the name of your first pet?" },
];

mkdirSync(dataDirectory, { recursive: true });
const database = new DatabaseSync(databaseFile);
database.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    username_key TEXT NOT NULL UNIQUE,
    password_salt TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    is_admin INTEGER NOT NULL DEFAULT 0,
    avatar_mime TEXT,
    avatar_blob BLOB,
    avatar_version INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS recovery_answers (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL,
    answer_salt TEXT NOT NULL,
    answer_hash TEXT NOT NULL,
    PRIMARY KEY (user_id, question_id)
  );
  CREATE TABLE IF NOT EXISTS account_data (
    user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    data TEXT NOT NULL DEFAULT '{}',
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS login_sessions (
    token_hash TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS login_sessions_expiry ON login_sessions(expires_at);
  CREATE TABLE IF NOT EXISTS activity_events (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    event_type TEXT NOT NULL CHECK (event_type IN ('workout', 'pr')),
    source_key TEXT NOT NULL,
    data TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    UNIQUE (user_id, event_type, source_key)
  );
  CREATE INDEX IF NOT EXISTS activity_events_recent ON activity_events(event_type, created_at DESC);
  CREATE TABLE IF NOT EXISTS activity_likes (
    event_id INTEGER NOT NULL REFERENCES activity_events(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at INTEGER NOT NULL,
    PRIMARY KEY (event_id, user_id)
  );
`);
const userColumns = new Set(database.prepare("PRAGMA table_info(users)").all().map((column) => column.name));
if (!userColumns.has("is_admin")) database.exec("ALTER TABLE users ADD COLUMN is_admin INTEGER NOT NULL DEFAULT 0");
if (!userColumns.has("avatar_mime")) database.exec("ALTER TABLE users ADD COLUMN avatar_mime TEXT");
if (!userColumns.has("avatar_blob")) database.exec("ALTER TABLE users ADD COLUMN avatar_blob BLOB");
if (!userColumns.has("avatar_version")) database.exec("ALTER TABLE users ADD COLUMN avatar_version INTEGER NOT NULL DEFAULT 0");
if (database.prepare("SELECT COUNT(*) AS count FROM users WHERE is_admin = 1").get().count === 0) {
  database.prepare("UPDATE users SET is_admin = 1 WHERE id = (SELECT MIN(id) FROM users)").run();
}
database.prepare("DELETE FROM login_sessions WHERE expires_at <= ?").run(Date.now());

const staticFiles = new Map([
  ["/", ["index.html", "text/html; charset=utf-8"]],
  ["/index.html", ["index.html", "text/html; charset=utf-8"]],
  ["/app.js", ["app.js", "text/javascript; charset=utf-8"]],
  ["/styles.css", ["styles.css", "text/css; charset=utf-8"]],
  ["/split-theme.css", ["split-theme.css", "text/css; charset=utf-8"]],
  ["/account.css", ["account.css", "text/css; charset=utf-8"]],
  ["/origin-theme.css", ["origin-theme.css", "text/css; charset=utf-8"]],
]);

function hashToken(token) {
  return createHash("sha256").update(token).digest("hex");
}

function normalizeAnswer(answer) {
  return String(answer || "").normalize("NFKC").trim().replace(/\s+/g, " ").toLocaleLowerCase("en-US");
}

function normalizeUsername(username) {
  return String(username || "").trim().normalize("NFKC");
}

function validUsername(username) {
  return /^[a-zA-Z0-9_.-]{3,24}$/.test(username);
}

function sendJson(response, status, value, extraHeaders = {}) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    ...extraHeaders,
  });
  response.end(JSON.stringify(value));
}

function sendError(response, status, message) {
  sendJson(response, status, { error: message });
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body) > maxRequestBytes) {
        reject(Object.assign(new Error("Request is too large."), { status: 413 }));
        request.destroy();
      }
    });
    request.on("end", () => {
      try { resolve(JSON.parse(body || "{}")); }
      catch { reject(Object.assign(new Error("Request body must be valid JSON."), { status: 400 })); }
    });
    request.on("error", reject);
  });
}

function checkRateLimit(request, response) {
  const key = request.socket.remoteAddress || "unknown";
  const now = Date.now();
  const current = authAttempts.get(key);
  if (current && current.resetAt > now && current.count >= 12) {
    sendError(response, 429, "Too many account attempts. Try again in a few minutes.");
    return false;
  }
  if (!current || current.resetAt <= now) authAttempts.set(key, { count: 1, resetAt: now + 10 * 60 * 1000 });
  else current.count += 1;
  return true;
}

function checkSameOrigin(request, response) {
  const origin = request.headers.origin;
  if (!origin) return true;
  try {
    if (new URL(origin).host === request.headers.host) return true;
  } catch { /* Invalid Origin header is rejected below. */ }
  sendError(response, 403, "Request origin was not accepted.");
  return false;
}

function sessionCookie(token, maxAge) {
  const useSecureCookie = process.env.COOKIE_SECURE === "true"
    || (process.env.COOKIE_SECURE !== "false" && process.env.NODE_ENV === "production");
  const secure = useSecureCookie ? "; Secure" : "";
  return `repwise_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

function getCookie(request, name) {
  const part = (request.headers.cookie || "").split(";").map((item) => item.trim()).find((item) => item.startsWith(`${name}=`));
  return part ? decodeURIComponent(part.slice(name.length + 1)) : "";
}

function getSessionUser(request) {
  const token = getCookie(request, "repwise_session");
  if (!token) return null;
  const row = database.prepare(`
    SELECT users.id, users.username, users.is_admin, users.avatar_mime, users.avatar_version
    FROM login_sessions JOIN users ON users.id = login_sessions.user_id
    WHERE login_sessions.token_hash = ? AND login_sessions.expires_at > ?
  `).get(hashToken(token), Date.now());
  return row || null;
}

function publicUser(user) {
  return {
    id: Number(user.id),
    username: user.username,
    isAdmin: Boolean(user.is_admin),
    hasAvatar: Boolean(user.avatar_mime),
    avatarVersion: Number(user.avatar_version) || 0,
  };
}

function parseAvatar(body) {
  const mime = String(body.mime || "");
  const encoded = String(body.imageBase64 || "");
  if (!["image/jpeg", "image/png", "image/webp"].includes(mime) || encoded.length > Math.ceil(maxAvatarBytes * 4 / 3) + 8 || !/^[A-Za-z0-9+/]*={0,2}$/.test(encoded)) return null;
  const image = Buffer.from(encoded, "base64");
  if (!image.length || image.length > maxAvatarBytes) return null;
  const isPng = image.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  const isJpeg = image[0] === 0xff && image[1] === 0xd8 && image[2] === 0xff;
  const isWebp = image.toString("ascii", 0, 4) === "RIFF" && image.toString("ascii", 8, 12) === "WEBP";
  if ((mime === "image/png" && !isPng) || (mime === "image/jpeg" && !isJpeg) || (mime === "image/webp" && !isWebp)) return null;
  return { mime, image };
}

function createSession(userId) {
  const token = randomBytes(32).toString("base64url");
  database.prepare("INSERT INTO login_sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)")
    .run(hashToken(token), userId, Date.now() + sessionLifetimeSeconds * 1000);
  return token;
}

function safeAccountData(raw) {
  const data = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  return {
    sessions: Array.isArray(data.sessions) ? data.sessions.slice(-500) : [],
    records: data.records && typeof data.records === "object" && !Array.isArray(data.records) ? data.records : {},
    repRecords: data.repRecords && typeof data.repRecords === "object" && !Array.isArray(data.repRecords) ? data.repRecords : {},
    recordDates: data.recordDates && typeof data.recordDates === "object" && !Array.isArray(data.recordDates) ? data.recordDates : {},
    customExercises: Array.isArray(data.customExercises) ? data.customExercises.slice(0, 300) : [],
    splitId: typeof data.splitId === "string" ? data.splitId : "ppl",
  };
}

function buildCommunitySynopsis() {
  const accounts = database.prepare(`
    SELECT users.username, account_data.data
    FROM users LEFT JOIN account_data ON account_data.user_id = users.id
    ORDER BY users.username_key
  `).all();
  return accounts.map((account) => {
    let data = {};
    try { data = JSON.parse(account.data || "{}"); } catch { /* Treat unreadable rows as empty accounts. */ }
    const workouts = Array.isArray(data.sessions) ? data.sessions : [];
    const latest = workouts.map((workout, index) => ({ workout, index }))
      .filter(({ workout }) => workout && typeof workout.date === "string")
      .sort((first, second) => second.workout.date.localeCompare(first.workout.date) || second.index - first.index)[0]?.workout;
    return {
      username: account.username,
      workout: latest ? {
        name: String(latest.name || "Workout").slice(0, 80),
        date: latest.date,
        exercises: Array.isArray(latest.exercises) ? latest.exercises.slice(0, 12).map((name) => String(name).slice(0, 64)) : [],
        sets: Math.max(0, Number(latest.sets) || 0),
        volume: Math.max(0, Number(latest.volume) || 0),
        duration: Math.max(0, Number(latest.duration) || 0),
      } : null,
    };
  });
}

function upsertWorkoutActivities(userId, sessions) {
  const insert = database.prepare(`
    INSERT INTO activity_events (user_id, event_type, source_key, data, created_at)
    VALUES (?, 'workout', ?, ?, ?)
    ON CONFLICT(user_id, event_type, source_key) DO UPDATE SET data = excluded.data
  `);
  sessions.forEach((session, index) => {
    if (!session || typeof session.date !== "string") return;
    const sourceKey = String(session.id || `legacy-${session.date}-${index}`).slice(0, 120);
    const idTimestamp = Number(String(session.id || "").match(/(\d{13})$/)?.[1]) || 0;
    const dateTimestamp = Date.parse(`${session.date}T12:00:00Z`);
    const createdAt = idTimestamp || (Number.isFinite(dateTimestamp) ? dateTimestamp + index : Date.now() + index);
    const data = {
      name: String(session.name || "Workout").slice(0, 80),
      date: session.date,
      exercises: Array.isArray(session.exercises) ? session.exercises.slice(0, 12).map((name) => String(name).slice(0, 64)) : [],
      sets: Math.max(0, Number(session.sets) || 0),
      volume: Math.max(0, Number(session.volume) || 0),
      duration: Math.max(0, Number(session.duration) || 0),
      splitId: typeof session.splitId === "string" ? session.splitId : "",
      programDay: typeof session.programDay === "string" ? session.programDay : "",
    };
    insert.run(userId, sourceKey, JSON.stringify(data), createdAt);
  });
}

function readCommunityActivity(eventType, currentUserId) {
  const rows = database.prepare(`
    SELECT events.id, events.user_id, events.data, events.created_at, users.username,
      users.avatar_mime, users.avatar_version,
      COUNT(likes.user_id) AS like_count,
      COALESCE(MAX(CASE WHEN likes.user_id = ? THEN 1 ELSE 0 END), 0) AS liked
    FROM activity_events AS events
    JOIN users ON users.id = events.user_id
    LEFT JOIN activity_likes AS likes ON likes.event_id = events.id
    WHERE events.event_type = ?
    GROUP BY events.id
    ORDER BY events.created_at DESC, events.id DESC
    LIMIT 24
  `).all(currentUserId, eventType);
  return rows.map((row) => {
    let data = {};
    try { data = JSON.parse(row.data); } catch { /* Ignore malformed event details. */ }
    return {
      id: row.id,
      userId: row.user_id,
      username: row.username,
      hasAvatar: Boolean(row.avatar_mime),
      avatarVersion: Number(row.avatar_version) || 0,
      isOwn: row.user_id === currentUserId,
      liked: Boolean(row.liked),
      likes: Number(row.like_count),
      createdAt: row.created_at,
      ...data,
    };
  });
}

for (const account of database.prepare("SELECT user_id, data FROM account_data").all()) {
  try {
    const data = JSON.parse(account.data || "{}");
    upsertWorkoutActivities(account.user_id, Array.isArray(data.sessions) ? data.sessions : []);
  } catch { /* Skip malformed historical data during activity backfill. */ }
}

async function handleApi(request, response, url) {
  const route = `${request.method} ${url.pathname}`;
  if (["POST /api/register", "POST /api/login", "POST /api/recover", "GET /api/recovery-questions"].includes(route) && !checkRateLimit(request, response)) return;

  if (request.method === "GET" && url.pathname === "/api/recovery-questions") {
    const username = normalizeUsername(url.searchParams.get("username"));
    if (!validUsername(username)) return sendError(response, 400, "Enter a valid username first.");
    const user = database.prepare("SELECT id FROM users WHERE username_key = ?").get(username.toLocaleLowerCase("en-US"));
    if (!user) return sendJson(response, 200, { questions: [] });
    const rows = database.prepare("SELECT question_id FROM recovery_answers WHERE user_id = ?").all(user.id);
    return sendJson(response, 200, { questions: rows.map((row) => recoveryQuestions.find((item) => item.id === row.question_id)).filter(Boolean) });
  }

  if (request.method === "POST" && url.pathname === "/api/register") {
    if (!checkSameOrigin(request, response)) return;
    const body = await readBody(request);
    const username = normalizeUsername(body.username);
    const password = String(body.password || "");
    const answers = Array.isArray(body.recovery) ? body.recovery : [];
    if (!validUsername(username)) return sendError(response, 400, "Use 3–24 letters, numbers, dots, underscores, or hyphens for your username.");
    if (password.length < 10 || password.length > 256) return sendError(response, 400, "Use a password between 10 and 256 characters.");
    if (answers.length !== 3 || new Set(answers.map((item) => item.questionId)).size !== 3) return sendError(response, 400, "Choose three different recovery questions.");
    if (answers.some((item) => !recoveryQuestions.some((question) => question.id === item.questionId) || normalizeAnswer(item.answer).length < 2)) {
      return sendError(response, 400, "Answer all three recovery questions.");
    }
    const usernameKey = username.toLocaleLowerCase("en-US");
    if (database.prepare("SELECT id FROM users WHERE username_key = ?").get(usernameKey)) return sendError(response, 409, "That username is already registered.");
    const firstUser = database.prepare("SELECT COUNT(*) AS count FROM users").get().count === 0;
    const passwordSalt = randomBytes(16).toString("hex");
    const passwordHash = (await scrypt(password, passwordSalt, 64)).toString("hex");
    let userId;
    database.exec("BEGIN");
    try {
      const result = database.prepare("INSERT INTO users (username, username_key, password_salt, password_hash, is_admin) VALUES (?, ?, ?, ?, ?)")
        .run(username, usernameKey, passwordSalt, passwordHash, firstUser ? 1 : 0);
      userId = Number(result.lastInsertRowid);
      const insertAnswer = database.prepare("INSERT INTO recovery_answers (user_id, question_id, answer_salt, answer_hash) VALUES (?, ?, ?, ?)");
      for (const item of answers) {
        const salt = randomBytes(16).toString("hex");
        const hash = (await scrypt(normalizeAnswer(item.answer), salt, 64)).toString("hex");
        insertAnswer.run(userId, item.questionId, salt, hash);
      }
      database.prepare("INSERT INTO account_data (user_id, data) VALUES (?, ?)").run(userId, JSON.stringify(safeAccountData({})));
      database.exec("COMMIT");
    } catch (error) {
      database.exec("ROLLBACK");
      throw error;
    }
    const token = createSession(userId);
    const createdUser = database.prepare("SELECT id, username, is_admin, avatar_mime, avatar_version FROM users WHERE id = ?").get(userId);
    return sendJson(response, 201, { user: publicUser(createdUser), firstUser }, { "Set-Cookie": sessionCookie(token, sessionLifetimeSeconds) });
  }

  if (request.method === "POST" && url.pathname === "/api/login") {
    if (!checkSameOrigin(request, response)) return;
    const body = await readBody(request);
    const username = normalizeUsername(body.username);
    const user = database.prepare("SELECT id, username, password_salt, password_hash, is_admin, avatar_mime, avatar_version FROM users WHERE username_key = ?")
      .get(username.toLocaleLowerCase("en-US"));
    if (!user) return sendError(response, 401, "Username or password is incorrect.");
    const submitted = await scrypt(String(body.password || ""), user.password_salt, 64);
    const expected = Buffer.from(user.password_hash, "hex");
    if (submitted.length !== expected.length || !timingSafeEqual(submitted, expected)) return sendError(response, 401, "Username or password is incorrect.");
    const token = createSession(user.id);
    return sendJson(response, 200, { user: publicUser(user) }, { "Set-Cookie": sessionCookie(token, sessionLifetimeSeconds) });
  }

  if (request.method === "POST" && url.pathname === "/api/recover") {
    if (!checkSameOrigin(request, response)) return;
    const body = await readBody(request);
    const username = normalizeUsername(body.username);
    const user = database.prepare("SELECT id, username FROM users WHERE username_key = ?").get(username.toLocaleLowerCase("en-US"));
    if (!user || !Array.isArray(body.answers) || body.answers.length !== 3 || String(body.newPassword || "").length < 10) {
      return sendError(response, 400, "Recovery details or new password are not valid.");
    }
    const stored = database.prepare("SELECT question_id, answer_salt, answer_hash FROM recovery_answers WHERE user_id = ?").all(user.id);
    let matches = stored.length === 3;
    for (const item of body.answers) {
      const row = stored.find((entry) => entry.question_id === item.questionId);
      if (!row) { matches = false; continue; }
      const submitted = await scrypt(normalizeAnswer(item.answer), row.answer_salt, 64);
      const expected = Buffer.from(row.answer_hash, "hex");
      if (submitted.length !== expected.length || !timingSafeEqual(submitted, expected)) matches = false;
    }
    if (!matches) return sendError(response, 401, "Recovery answers did not match.");
    const salt = randomBytes(16).toString("hex");
    const hash = (await scrypt(String(body.newPassword), salt, 64)).toString("hex");
    database.prepare("UPDATE users SET password_salt = ?, password_hash = ? WHERE id = ?").run(salt, hash, user.id);
    database.prepare("DELETE FROM login_sessions WHERE user_id = ?").run(user.id);
    const token = createSession(user.id);
    const recoveredUser = database.prepare("SELECT id, username, is_admin, avatar_mime, avatar_version FROM users WHERE id = ?").get(user.id);
    return sendJson(response, 200, { user: publicUser(recoveredUser) }, { "Set-Cookie": sessionCookie(token, sessionLifetimeSeconds) });
  }

  if (request.method === "POST" && url.pathname === "/api/logout") {
    if (!checkSameOrigin(request, response)) return;
    const token = getCookie(request, "repwise_session");
    if (token) database.prepare("DELETE FROM login_sessions WHERE token_hash = ?").run(hashToken(token));
    return sendJson(response, 200, { ok: true }, { "Set-Cookie": sessionCookie("", 0) });
  }

  const user = getSessionUser(request);
  if (!user) return sendError(response, 401, "Sign in to continue.");

  if (request.method === "GET" && url.pathname === "/api/me") return sendJson(response, 200, { user: publicUser(user) });
  const avatarMatch = request.method === "GET" && url.pathname.match(/^\/api\/users\/(\d+)\/avatar$/);
  if (avatarMatch) {
    const imageUser = database.prepare("SELECT avatar_mime, avatar_blob FROM users WHERE id = ?").get(Number(avatarMatch[1]));
    if (!imageUser?.avatar_blob) return sendError(response, 404, "Profile photo not found.");
    response.writeHead(200, { "Content-Type": imageUser.avatar_mime, "Cache-Control": "private, max-age=31536000, immutable", "X-Content-Type-Options": "nosniff" });
    response.end(imageUser.avatar_blob);
    return;
  }
  if (request.method === "POST" && url.pathname === "/api/profile/avatar") {
    if (!checkSameOrigin(request, response)) return;
    const avatar = parseAvatar(await readBody(request));
    if (!avatar) return sendError(response, 400, "Choose a JPEG, PNG, or WebP image up to 512 KB.");
    database.prepare("UPDATE users SET avatar_mime = ?, avatar_blob = ?, avatar_version = avatar_version + 1 WHERE id = ?").run(avatar.mime, avatar.image, user.id);
    const updated = database.prepare("SELECT id, username, is_admin, avatar_mime, avatar_version FROM users WHERE id = ?").get(user.id);
    return sendJson(response, 200, { user: publicUser(updated) });
  }
  if (request.method === "DELETE" && url.pathname === "/api/profile/avatar") {
    if (!checkSameOrigin(request, response)) return;
    database.prepare("UPDATE users SET avatar_mime = NULL, avatar_blob = NULL, avatar_version = avatar_version + 1 WHERE id = ?").run(user.id);
    const updated = database.prepare("SELECT id, username, is_admin, avatar_mime, avatar_version FROM users WHERE id = ?").get(user.id);
    return sendJson(response, 200, { user: publicUser(updated) });
  }
  if (request.method === "GET" && url.pathname === "/api/admin/users") {
    if (!user.is_admin) return sendError(response, 403, "Administrator access required.");
    const users = database.prepare("SELECT id, username, is_admin, avatar_mime, avatar_version FROM users ORDER BY username_key").all();
    return sendJson(response, 200, { users: users.map(publicUser) });
  }
  const adminAvatarMatch = url.pathname.match(/^\/api\/admin\/users\/(\d+)\/avatar$/);
  if (adminAvatarMatch && (request.method === "POST" || request.method === "DELETE")) {
    if (!user.is_admin) return sendError(response, 403, "Administrator access required.");
    if (!checkSameOrigin(request, response)) return;
    const targetId = Number(adminAvatarMatch[1]);
    if (!database.prepare("SELECT id FROM users WHERE id = ?").get(targetId)) return sendError(response, 404, "Account not found.");
    if (request.method === "DELETE") {
      database.prepare("UPDATE users SET avatar_mime = NULL, avatar_blob = NULL, avatar_version = avatar_version + 1 WHERE id = ?").run(targetId);
    } else {
      const avatar = parseAvatar(await readBody(request));
      if (!avatar) return sendError(response, 400, "Choose a JPEG, PNG, or WebP image up to 512 KB.");
      database.prepare("UPDATE users SET avatar_mime = ?, avatar_blob = ?, avatar_version = avatar_version + 1 WHERE id = ?").run(avatar.mime, avatar.image, targetId);
    }
    const updated = database.prepare("SELECT id, username, is_admin, avatar_mime, avatar_version FROM users WHERE id = ?").get(targetId);
    return sendJson(response, 200, { user: publicUser(updated) });
  }
  if (request.method === "GET" && url.pathname === "/api/data") {
    const row = database.prepare("SELECT data FROM account_data WHERE user_id = ?").get(user.id);
    let data = {};
    try { data = JSON.parse(row?.data || "{}"); } catch { /* Return an empty account if stored data is damaged. */ }
    return sendJson(response, 200, safeAccountData(data));
  }
  if (request.method === "PUT" && url.pathname === "/api/data") {
    if (!checkSameOrigin(request, response)) return;
    const body = await readBody(request);
    const data = safeAccountData(body);
    database.prepare(`
      INSERT INTO account_data (user_id, data, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = CURRENT_TIMESTAMP
    `).run(user.id, JSON.stringify(data));
    upsertWorkoutActivities(user.id, data.sessions);
    return sendJson(response, 200, { ok: true });
  }
  if (request.method === "POST" && url.pathname === "/api/activity/prs") {
    if (!checkSameOrigin(request, response)) return;
    const body = await readBody(request);
    const sessionId = String(body.workoutId || "").slice(0, 120);
    const row = database.prepare("SELECT data FROM account_data WHERE user_id = ?").get(user.id);
    let data = {};
    try { data = JSON.parse(row?.data || "{}"); } catch { /* Treat damaged account data as empty. */ }
    const session = (Array.isArray(data.sessions) ? data.sessions : []).find((item) => String(item.id) === sessionId);
    if (!session) return sendError(response, 400, "Save the workout before posting its personal records.");
    const prs = Array.isArray(body.prs) ? body.prs.slice(0, 24) : [];
    const insert = database.prepare(`
      INSERT OR IGNORE INTO activity_events (user_id, event_type, source_key, data, created_at)
      VALUES (?, 'pr', ?, ?, ?)
    `);
    let created = 0;
    for (const pr of prs) {
      const exercise = String(pr.exercise || "").slice(0, 64);
      const recordType = pr.recordType === "weight" || pr.recordType === "reps" ? pr.recordType : "";
      const value = Number(pr.value);
      const best = Number(recordType === "weight" ? data.records?.[exercise] : data.repRecords?.[exercise]);
      if (!exercise || !recordType || !Number.isFinite(value) || value <= 0 || best !== value || !session.exercises?.includes(exercise)) continue;
      const sourceKey = `${sessionId}:${recordType}:${exercise}`.slice(0, 240);
      const eventData = {
        exercise,
        recordType,
        value,
        unit: recordType === "weight" ? "lb" : "reps",
        workoutName: String(session.name || "Workout").slice(0, 80),
        date: session.date,
      };
      created += Number(insert.run(user.id, sourceKey, JSON.stringify(eventData), Date.now()).changes);
    }
    return sendJson(response, 201, { created });
  }
  if (request.method === "GET" && url.pathname === "/api/community-activity") {
    return sendJson(response, 200, {
      prs: readCommunityActivity("pr", user.id),
      workouts: readCommunityActivity("workout", user.id),
    });
  }
  const likeMatch = request.method === "POST" && url.pathname.match(/^\/api\/activity\/(\d+)\/like$/);
  if (likeMatch) {
    if (!checkSameOrigin(request, response)) return;
    const eventId = Number(likeMatch[1]);
    const event = database.prepare("SELECT user_id FROM activity_events WHERE id = ?").get(eventId);
    if (!event) return sendError(response, 404, "Activity not found.");
    if (event.user_id === user.id) return sendError(response, 403, "You can like another member’s activity, not your own.");
    const existing = database.prepare("SELECT event_id FROM activity_likes WHERE event_id = ? AND user_id = ?").get(eventId, user.id);
    if (existing) database.prepare("DELETE FROM activity_likes WHERE event_id = ? AND user_id = ?").run(eventId, user.id);
    else database.prepare("INSERT INTO activity_likes (event_id, user_id, created_at) VALUES (?, ?, ?)").run(eventId, user.id, Date.now());
    const likes = database.prepare("SELECT COUNT(*) AS count FROM activity_likes WHERE event_id = ?").get(eventId).count;
    return sendJson(response, 200, { liked: !existing, likes });
  }
  if (request.method === "GET" && url.pathname === "/api/community-synopsis") return sendJson(response, 200, { accounts: buildCommunitySynopsis() });
  sendError(response, 404, "API route not found.");
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    if (url.pathname.startsWith("/api/")) return await handleApi(request, response, url);
    if (request.method !== "GET" && request.method !== "HEAD") return sendError(response, 405, "Method not allowed.");
    const entry = staticFiles.get(url.pathname);
    if (!entry) return sendError(response, 404, "Not found.");
    const content = require("node:fs").readFileSync(join(__dirname, entry[0]));
    response.writeHead(200, {
      "Content-Type": entry[1],
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "same-origin",
      "Content-Security-Policy": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; base-uri 'self'; frame-ancestors 'none'",
    });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch (error) {
    if (!response.headersSent) sendError(response, error.status || 500, error.status ? error.message : "The server could not complete that request.");
    else response.destroy();
    if (!error.status) console.error(error);
  }
});

server.listen(port, host, () => {
  console.log(`Lift with Kenny is running at http://localhost:${port}`);
  console.log(`Account database: ${databaseFile}`);
});