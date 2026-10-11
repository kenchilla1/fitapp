// Usage: node import-fitnotes.js <backup.fitnotes> [username] [--dry-run]
// Merges FitNotes workouts into an existing account without removing any data.
const { DatabaseSync } = require("node:sqlite");
const { join } = require("node:path");
const { existsSync, readFileSync } = require("node:fs");

const args = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
const dryRun = process.argv.includes("--dry-run");
const backupFile = args[0];
const username = args[1] || "kenny";
const dataDirectory = process.env.REPWISE_DATA_DIR || join(__dirname, "data");
const databaseFile = join(dataDirectory, "repwise.sqlite");
const KG_TO_LB = 2.2046226218;

if (!backupFile || !existsSync(backupFile)) throw new Error("Pass the path to a .fitnotes backup file.");
if (!existsSync(databaseFile)) throw new Error(`No app database at ${databaseFile}.`);

const GROUP_MAP = { Shoulders: "Shoulders", Triceps: "Arms", Biceps: "Arms", Forearms: "Arms", Chest: "Chest", Back: "Back", Legs: "Legs", Abs: "Core", Cardio: "Core" };

const builtinExercises = new Map();
try {
  const source = readFileSync(join(__dirname, "app.js"), "utf8");
  for (const match of source.matchAll(/\{ name: "([^"]+)", group: "([^"]+)", type: "([^"]+)" \}/g)) builtinExercises.set(match[1].toLowerCase(), match[1]);
} catch { /* Every imported exercise becomes a custom exercise instead. */ }

const backup = new DatabaseSync(backupFile, { readOnly: true });
const rows = backup.prepare(`
  SELECT t._id, t.date, t.metric_weight, t.reps, e.name AS exercise, c.name AS category,
         (SELECT comment FROM Comment WHERE owner_type_id = 1 AND owner_id = t._id LIMIT 1) AS note,
         (SELECT r.name || '|' || s.name FROM RoutineSectionExerciseSet ses
            JOIN RoutineSectionExercise se ON se._id = ses.routine_section_exercise_id
            JOIN RoutineSection s ON s._id = se.routine_section_id
            JOIN Routine r ON r._id = s.routine_id
          WHERE ses._id = t.routine_section_exercise_set_id) AS routine
  FROM training_log t
  JOIN exercise e ON e._id = t.exercise_id
  JOIN Category c ON c._id = e.category_id
  WHERE t.metric_weight > 0 AND t.reps > 0
  ORDER BY t.date, t._id
`).all();
const dayNotes = new Map(backup.prepare("SELECT date, comment FROM WorkoutComment").all().map((row) => [row.date, row.comment]));
backup.close();

const customExercises = new Map();
function canonicalName(name, category) {
  const builtin = builtinExercises.get(name.toLowerCase());
  if (builtin) return builtin;
  if (!customExercises.has(name)) customExercises.set(name, { name, group: GROUP_MAP[category] || "Core", type: "Custom" });
  return name;
}

function classifyDay(dayRows) {
  const routine = dayRows.find((row) => row.routine?.startsWith("Upper/Lower"))?.routine;
  if (routine) {
    const upper = routine.split("|")[1].toLowerCase().startsWith("upper");
    return { splitId: "upper-lower", programDay: upper ? "upper" : "lower", name: upper ? "Upper body" : "Lower body" };
  }
  const counts = { push: 0, pull: 0, legs: 0 };
  for (const row of dayRows) {
    if (row.category === "Legs") counts.legs += 1;
    else if (["Chest", "Shoulders", "Triceps"].includes(row.category)) counts.push += 1;
    else if (["Back", "Biceps", "Forearms"].includes(row.category)) counts.pull += 1;
  }
  const total = counts.push + counts.pull + counts.legs || 1;
  const day = counts.legs / total >= 0.4 ? "legs" : counts.push >= counts.pull ? "push" : "pull";
  return { splitId: "ppl", programDay: day, name: { push: "Push", pull: "Pull", legs: "Legs" }[day] };
}

const byDate = new Map();
for (const row of rows) byDate.set(row.date, [...(byDate.get(row.date) || []), row]);

const imported = [];
const records = {};
const repRecords = {};
const recordDates = {};
for (const [date, dayRows] of byDate) {
  const exercises = new Map();
  for (const row of dayRows) {
    const name = canonicalName(row.exercise, row.category);
    const weight = Math.round(row.metric_weight * KG_TO_LB * 10) / 10;
    if (!exercises.has(name)) exercises.set(name, { name, notes: "", completed: true, sets: [] });
    exercises.get(name).sets.push({ weight, reps: row.reps, notes: row.note || "" });
    if (weight > (records[name] || 0)) { records[name] = weight; recordDates[name] = date; }
    if (row.reps > (repRecords[name] || 0)) repRecords[name] = row.reps;
  }
  const setDetails = [...exercises.values()];
  const sets = setDetails.reduce((total, exercise) => total + exercise.sets.length, 0);
  const volume = setDetails.reduce((total, exercise) => total + exercise.sets.reduce((sum, set) => sum + set.weight * set.reps, 0), 0);
  imported.push({
    id: `fitnotes-${date}`, date, ...classifyDay(dayRows), duration: 0, exercises: setDetails.map((exercise) => exercise.name),
    volume: Math.round(volume), weightUnit: "lb", sets, notes: dayNotes.get(date) || "", setDetails,
  });
}

const database = new DatabaseSync(databaseFile);
const user = database.prepare("SELECT id, username FROM users WHERE username_key = ?").get(username.toLocaleLowerCase("en-US"));
if (!user) throw new Error(`No account named "${username}".`);
const stored = database.prepare("SELECT data FROM account_data WHERE user_id = ?").get(user.id);
const data = JSON.parse(stored?.data || "{}");

const existingIds = new Set((data.sessions || []).map((session) => session.id));
const newSessions = imported.filter((session) => !existingIds.has(session.id));
data.sessions = [...(data.sessions || []), ...newSessions].sort((first, second) => first.date.localeCompare(second.date));
data.records = { ...(data.records || {}) };
data.repRecords = { ...(data.repRecords || {}) };
data.recordDates = { ...(data.recordDates || {}) };
for (const [name, weight] of Object.entries(records)) {
  if (weight > (data.records[name] || 0)) { data.records[name] = weight; data.recordDates[name] = recordDates[name]; }
}
for (const [name, reps] of Object.entries(repRecords)) if (reps > (data.repRecords[name] || 0)) data.repRecords[name] = reps;
const knownCustom = new Set((data.customExercises || []).map((exercise) => exercise.name.toLowerCase()));
data.customExercises = [...(data.customExercises || []), ...[...customExercises.values()].filter((exercise) => !knownCustom.has(exercise.name.toLowerCase()))];

console.log(`${newSessions.length} new workouts (${imported.length - newSessions.length} already imported), ${data.customExercises.length} custom exercises for ${user.username}.`);
if (dryRun) process.exit(0);

const safetyCopy = join(dataDirectory, `repwise-before-fitnotes-${Date.now()}.sqlite`);
database.exec(`VACUUM INTO '${safetyCopy.replaceAll("'", "''")}'`);
database.prepare(`
  INSERT INTO account_data (user_id, data, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)
  ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = CURRENT_TIMESTAMP
`).run(user.id, JSON.stringify(data));
console.log(`Imported. Database copy saved to ${safetyCopy}`);
