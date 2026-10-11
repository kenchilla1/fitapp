const PUSH_EXERCISES = [
  { name: "Flat Barbell Bench", group: "Chest" },
  { name: "Incline Barbell Bench Press", group: "Chest" },
  { name: "Reverse Grip Bench Press", group: "Chest" },
  { name: "Flat Smith Machine Bench Press", group: "Chest" },
  { name: "Incline Smith Machine Bench Press", group: "Chest" },
  { name: "Cable Flyes", group: "Chest" },
  { name: "Egyptian Lateral Raises", group: "Shoulders" },
  { name: "Lateral Dumbbell Raises", group: "Shoulders" },
  { name: "Cable Front Raises", group: "Shoulders" },
  { name: "Dumbbell Front Raises", group: "Shoulders" },
  { name: "Barbell Overhead Press", group: "Shoulders" },
  { name: "Dumbbell Shoulder Press", group: "Shoulders" },
  { name: "Smith Machine Shoulder Press", group: "Shoulders" },
  { name: "Cable Tricep Doubles", group: "Arms" },
  { name: "Dumbbell Pull Overs", group: "Chest" },
  { name: "Dips", group: "Chest" },
  { name: "Dumbbell Skull Crusher", group: "Arms" },
  { name: "Cable Overhead Extension", group: "Arms" },
  { name: "Cable Tricep Extensions", group: "Arms" },
  { name: "Cable Tricep Extension Doubles", group: "Arms" },
];

const PULL_EXERCISES = [
  { name: "Pull-Ups", group: "Back" },
  { name: "T-Bar Row", group: "Back" },
  { name: "Dumbbell Rows", group: "Back" },
  { name: "Barbell Row", group: "Back" },
  { name: "Cable Row", group: "Back" },
  { name: "Lat Pulldown", group: "Back" },
  { name: "Lat Prayer", group: "Back" },
  { name: "Face Pull", group: "Back" },
  { name: "Upright Row", group: "Shoulders" },
  { name: "Cable Criss-Cross Rows", group: "Back" },
  { name: "Seated 45-Degree Cable Face Pulls (High/Low)", group: "Shoulders" },
  { name: "Cable Row (Neutral Grip)", group: "Back" },
  { name: "Reverse Hyperextensions", group: "Back" },
  { name: "Hyperextensions", group: "Back" },
  { name: "Good Mornings", group: "Back" },
  { name: "Barbell Shrugs", group: "Shoulders" },
  { name: "Seated Horizontal Cable Shrugs", group: "Shoulders" },
  { name: "Reverse Cable Flyes", group: "Shoulders" },
  { name: "15-Degree Prone Reverse Dumbbell Flye Doubles (2 Angles)", group: "Shoulders" },
  { name: "Dumbbell Curl Triples (Alternating, Regular, Hammer)", group: "Arms" },
  { name: "EZ-Bar Curl Triples (Narrow, Wide, Reverse)", group: "Arms" },
  { name: "EZ-Bar Curls", group: "Arms" },
  { name: "EZ-Bar Reverse Curls", group: "Arms" },
  { name: "Barbell Curls", group: "Arms" },
  { name: "Alternating Dumbbell Curls", group: "Arms" },
  { name: "Dumbbell Concentration Curls", group: "Arms" },
  { name: "Dumbbell Hammer Curls", group: "Arms" },
  { name: "Dumbbell Spider Curls", group: "Arms" },
  { name: "Dumbbell Pinwheel Curls", group: "Arms" },
  { name: "Dumbbell Zottman Curls", group: "Arms" },
  { name: "Overhead Cable Curls", group: "Arms" },
  { name: "Low-Position Cable Hammer Curls", group: "Arms" },
  { name: "Wrist Curls", group: "Arms" },
];

const LEG_EXERCISES = [
  { name: "Leg Press", group: "Legs", type: "Compound" },
  { name: "Hack Squats", group: "Legs", type: "Compound" },
  { name: "Belted Squat", group: "Legs", type: "Compound" },
  { name: "Leg Extension", group: "Legs", type: "Isolation" },
  { name: "Leg Curl", group: "Legs", type: "Isolation" },
  { name: "Barbell Squat", group: "Legs", type: "Compound" },
  { name: "Smith Squat", group: "Legs", type: "Compound" },
  { name: "Front Barbell Squat", group: "Legs", type: "Compound" },
  { name: "Front Smith Squat", group: "Legs", type: "Compound" },
  { name: "SSB Squat", group: "Legs", type: "Compound" },
  { name: "Goblet Squat", group: "Legs", type: "Compound" },
  { name: "Barbell Lunges", group: "Legs", type: "Compound" },
  { name: "Dumbbell Lunges", group: "Legs", type: "Compound" },
  { name: "Bulgarian Split Squats", group: "Legs", type: "Compound" },
  { name: "Lateral Barbell Squats", group: "Legs", type: "Compound" },
  { name: "Standing Calf Raises", group: "Legs", type: "Isolation" },
  { name: "Seated Calf Raises", group: "Legs", type: "Isolation" },
  { name: "Dorsiflexion", group: "Legs", type: "Isolation" },
  { name: "Romanian Deadlifts", group: "Legs", type: "Compound" },
  { name: "Glute-Ham Roller", group: "Legs", type: "Compound" },
  { name: "Hip Thrusts", group: "Legs", type: "Compound" },
  { name: "Barbell Rack-Supported Dumbbell Stiff-Legged Deadlift", group: "Legs", type: "Compound" },
  { name: "Calf Raise", group: "Legs", type: "Isolation" },
  { name: "Thigh Adduction", group: "Legs", type: "Isolation" },
  { name: "Thigh Abduction", group: "Legs", type: "Isolation" },
];

let EXERCISES = [
  { name: "Bench press", group: "Chest", type: "Compound" },
  { name: "Deadlift", group: "Back", type: "Compound" },
  { name: "Overhead press", group: "Shoulders", type: "Compound" },
  { name: "Barbell row", group: "Back", type: "Compound" },
  { name: "Dumbbell chest press", group: "Chest", type: "Compound" },
  { name: "Lat pulldown", group: "Back", type: "Compound" },
  { name: "Dumbbell shoulder press", group: "Shoulders", type: "Compound" },
  { name: "Bicep curl", group: "Arms", type: "Isolation" },
  { name: "Tricep pushdown", group: "Arms", type: "Isolation" },
  { name: "Cable fly", group: "Chest", type: "Isolation" },
  { name: "Lateral raise", group: "Shoulders", type: "Isolation" },
  { name: "Face pull", group: "Shoulders", type: "Isolation" },
  { name: "Plank", group: "Core", type: "Bodyweight" },
  { name: "Pull-up", group: "Back", type: "Bodyweight" },
  { name: "Push-up", group: "Chest", type: "Bodyweight" },
  { name: "Hammer curl", group: "Arms", type: "Isolation" },
  { name: "Cable row", group: "Back", type: "Compound" },
  ...PUSH_EXERCISES.map((exercise) => ({ ...exercise, type: "Compound" })),
  ...PULL_EXERCISES.map((exercise) => ({ ...exercise, type: "Compound" })),
  ...LEG_EXERCISES,
];

const muscleGroups = ["Chest", "Back", "Shoulders", "Arms", "Legs", "Core"];
const TRAINING_SPLITS = {
  ppl: {
    name: "Push / Pull / Legs", shortName: "PPL", summary: "3-DAY ROTATING SPLIT", description: "A rotating push, pull and legs cycle.",
    phases: [
      { id: "push", title: "Push", focus: "Chest, shoulders and triceps", groups: ["Chest", "Shoulders", "Arms"], exercises: PUSH_EXERCISES.map((exercise) => exercise.name) },
      { id: "pull", title: "Pull", focus: "Back and biceps", groups: ["Back", "Arms", "Shoulders"], exercises: PULL_EXERCISES.map((exercise) => exercise.name) },
      { id: "legs", title: "Legs", focus: "Quads, hamstrings and calves", groups: ["Legs"], exercises: LEG_EXERCISES.map((exercise) => exercise.name) },
    ],
  },
  "upper-lower": {
    name: "Upper / Lower", shortName: "UPPER / LOWER", summary: "2-DAY ROTATING SPLIT", description: "Alternate upper- and lower-body sessions.",
    phases: [
      { id: "upper", title: "Upper body", focus: "Chest, back, shoulders and arms", groups: ["Chest", "Back", "Shoulders", "Arms"], exercises: ["Bench press", "Barbell row", "Overhead press", "Lat pulldown", "Bicep curl"] },
      { id: "lower", title: "Lower body", focus: "Quads, hamstrings and calves", groups: ["Legs"], exercises: LEG_EXERCISES.map((exercise) => exercise.name) },
    ],
  },
  bro: {
    name: "Bro split", shortName: "BRO SPLIT", summary: "5-DAY ROTATING SPLIT", description: "Give one muscle group its own training day.",
    phases: [
      { id: "chest", title: "Chest day", focus: "Chest and triceps", groups: ["Chest", "Arms"], exercises: ["Bench press", "Dumbbell chest press", "Cable fly", "Push-up", "Tricep pushdown"] },
      { id: "back", title: "Back day", focus: "Back and biceps", groups: ["Back", "Arms"], exercises: ["Deadlift", "Barbell row", "Lat pulldown", "Cable row", "Pull-up"] },
      { id: "shoulders", title: "Shoulder day", focus: "Shoulders and upper back", groups: ["Shoulders", "Back"], exercises: ["Overhead press", "Dumbbell shoulder press", "Lateral raise", "Face pull", "Barbell row"] },
      { id: "legs", title: "Leg day", focus: "Quads, hamstrings and calves", groups: ["Legs"], exercises: LEG_EXERCISES.map((exercise) => exercise.name) },
      { id: "arms", title: "Arms day", focus: "Biceps and triceps", groups: ["Arms", "Chest", "Back"], exercises: ["Bicep curl", "Hammer curl", "Tricep pushdown", "Bench press", "Cable row"] },
    ],
  },
  "3-5-7": {
    name: "3-5-7", shortName: "3-5-7", summary: "3 DAYS · 5 MOVES · 7-DAY CYCLE", description: "Three full-body sessions across the week.",
    phases: [
      { id: "full-a", title: "Full body A", focus: "Squat, push and pull", groups: muscleGroups, exercises: ["Barbell squat", "Bench press", "Barbell row", "Romanian deadlift", "Plank"] },
      { id: "full-b", title: "Full body B", focus: "Hinge, press and pull", groups: muscleGroups, exercises: ["Deadlift", "Overhead press", "Lat pulldown", "Leg curl", "Calf raise"] },
      { id: "full-c", title: "Full body C", focus: "Legs, chest and back", groups: muscleGroups, exercises: ["Leg press", "Dumbbell chest press", "Cable row", "Lateral raise", "Bicep curl"] },
    ],
  },
};
const today = new Date();
const dateOffset = (days) => new Date(today.getFullYear(), today.getMonth(), today.getDate() + days);
const isoDate = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const recentDate = (days) => isoDate(dateOffset(-days));
const savedData = (() => {
  try { return JSON.parse(localStorage.getItem("repwise-data")) || {}; }
  catch { return {}; }
})();
let customExercises = (() => {
  try {
    const savedExercises = JSON.parse(localStorage.getItem("repwise-custom-exercises")) || [];
    return Array.isArray(savedExercises) ? savedExercises.filter((exercise) => exercise.name && muscleGroups.includes(exercise.group)) : [];
  } catch { return []; }
})();
EXERCISES = [...EXERCISES, ...customExercises];
let selectedSplitId = (() => {
  try {
    const savedSplit = localStorage.getItem("repwise-split");
    return TRAINING_SPLITS[savedSplit] ? savedSplit : "ppl";
  } catch { return "ppl"; }
})();
let sessions = Array.isArray(savedData.sessions) ? savedData.sessions : [
  { id: "demo-1", date: recentDate(1), name: "Upper body · Strength", duration: 48, exercises: ["Barbell bench press", "Dumbbell row", "Overhead press", "Tricep pushdown"], volume: 2640, sets: 14, notes: "" },
  { id: "demo-2", date: recentDate(3), name: "Lower body · Strength", duration: 52, exercises: ["Barbell squat", "Romanian deadlift", "Leg curl", "Calf raise"], volume: 3840, sets: 16, notes: "Good depth on squats." },
  { id: "demo-3", date: recentDate(5), name: "Push · Hypertrophy", duration: 41, exercises: ["Bench press", "Dumbbell chest press", "Lateral raise", "Bicep curl"], volume: 2180, sets: 12, notes: "" },
  { id: "demo-4", date: recentDate(8), name: "Pull · Hypertrophy", duration: 45, exercises: ["Deadlift", "Lat pulldown", "Barbell row", "Hammer curl"], volume: 3120, sets: 15, notes: "" },
];
const KG_TO_LB = 2.2046226218;
let personalRecords = savedData.weightUnit === "lb"
  ? savedData.records || { "Barbell squat": Math.round(80 * KG_TO_LB * 10) / 10 }
  : Object.fromEntries(Object.entries(savedData.records || { "Barbell squat": 80 }).map(([name, weight]) => [name, Math.round((Number(weight) || 0) * KG_TO_LB * 10) / 10]));
let personalRecordDates = savedData.recordDates || { "Barbell squat": recentDate(4) };
const SUPERSET_COLORS = ["#78b4ff", "#f0a883", "#b9e27b", "#d69af5", "#f0cc75"];
let numberPadTarget = null;
let activeDragExerciseId = null;
sessions = sessions.map((session) => {
  if (session.weightUnit === "lb") return session;
  return {
    ...session,
    volume: Math.round((Number(session.volume) || 0) * KG_TO_LB),
    weightUnit: "lb",
    setDetails: session.setDetails?.map((exercise) => ({
      ...exercise,
      sets: exercise.sets.map((set) => ({ ...set, weight: Math.round((Number(set.weight) || 0) * KG_TO_LB * 10) / 10 })),
    })),
  };
});
let personalRepRecords = { ...(savedData.repRecords || {}) };
sessions.forEach((session) => session.setDetails?.forEach((exercise) => {
  const bestReps = Math.max(0, ...exercise.sets.map((set) => Number(set.reps) || 0));
  if (bestReps > (personalRepRecords[exercise.name] || 0)) personalRepRecords[exercise.name] = bestReps;
}));
let draftExercises = [];
let toastTimer;
let suggestedWorkoutName = "Strength training";
let selectedWorkoutPhaseId = null;
let activeExerciseId = null;
let editingSetIndex = null;
let detailSetDraft = { weight: 0, reps: 0 };
let activeNoteSetIndex = null;
let selectedGroupExerciseIds = new Set();
let exerciseHoldTimer = null;
let exerciseHoldTriggered = false;
let currentUser = null;
let accountSaveQueue = Promise.resolve();
let communityRefreshTimer = null;
let feedbackAlertTimer = null;
let feedbackAlertCursor = 0;
let selectedCalendarDate = null;
const IDLE_LOGOUT_MS = 60 * 60 * 1000;
let idleLogoutTimer = null;
let lastUserActivityAt = 0;

function scheduleIdleLogout() {
  if (!currentUser) return;
  window.clearTimeout(idleLogoutTimer);
  const remaining = IDLE_LOGOUT_MS - (Date.now() - lastUserActivityAt);
  if (remaining <= 0) {
    signOut("You were signed out after 60 minutes of inactivity.");
    return;
  }
  idleLogoutTimer = window.setTimeout(() => scheduleIdleLogout(), remaining);
}

function recordUserActivity() {
  if (!currentUser) return;
  const now = Date.now();
  if (now - lastUserActivityAt < 5000) return;
  lastUserActivityAt = now;
  scheduleIdleLogout();
}

function startIdleLogoutTimer() {
  lastUserActivityAt = Date.now();
  scheduleIdleLogout();
}

function serializeAccountData() {
  return {
    sessions: sessions.map((session) => ({ ...session, weightUnit: "lb" })),
    records: personalRecords,
    repRecords: personalRepRecords,
    recordDates: personalRecordDates,
    customExercises,
    splitId: selectedSplitId,
  };
}

function saveData() {
  if (!currentUser) return Promise.resolve();
  const data = serializeAccountData();
  accountSaveQueue = accountSaveQueue.catch(() => {}).then(() => accountRequest("/api/data", { method: "PUT", body: data })).catch(() => {
    showToast("Couldn’t sync your account data. Check the server connection.");
  });
  return accountSaveQueue;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

async function accountRequest(url, options = {}) {
  const headers = { ...(options.headers || {}) };
  const request = { ...options, credentials: "same-origin", headers };
  if (options.body !== undefined) {
    headers["Content-Type"] = "application/json";
    request.body = JSON.stringify(options.body);
  }
  const response = await fetch(url, request);
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(result.error || "The account request failed.");
    error.status = response.status;
    throw error;
  }
  return result;
}

function avatarUrl(user) {
  return `/api/users/${Number(user.id)}/avatar?v=${Number(user.avatarVersion) || 0}`;
}

function renderAvatarElement(element, user) {
  if (!element || !user) return;
  element.replaceChildren();
  const initial = Array.from(user.username || "M")[0]?.toLocaleUpperCase("en-US") || "M";
  if (user.hasAvatar) {
    const image = document.createElement("img");
    image.className = "avatar-image";
    image.src = avatarUrl(user);
    image.alt = "";
    image.loading = "lazy";
    element.append(image);
  } else element.textContent = initial;
}

function communityAvatarMarkup(activity) {
  const initial = Array.from(activity.username || "M")[0]?.toLocaleUpperCase("en-US") || "M";
  if (!activity.hasAvatar) return `<span class="community-avatar">${escapeHtml(initial)}</span>`;
  const imageUrl = `/api/users/${Number(activity.userId)}/avatar?v=${Number(activity.avatarVersion) || 0}`;
  return `<span class="community-avatar has-photo"><img src="${imageUrl}" alt="" loading="lazy" /></span>`;
}

function updateProfileAvatarUI() {
  if (!currentUser) return;
  renderAvatarElement(document.getElementById("sidebar-avatar"), currentUser);
  renderAvatarElement(document.getElementById("top-avatar"), currentUser);
  renderAvatarElement(document.getElementById("profile-photo-preview"), currentUser);
  document.getElementById("profile-photo-username").textContent = currentUser.username;
  document.getElementById("remove-profile-photo").hidden = !currentUser.hasAvatar;
  document.getElementById("open-admin-photo-manager").hidden = !currentUser.isAdmin;
}

async function renderAdminAvatarUsers() {
  if (!currentUser?.isAdmin) return;
  const container = document.getElementById("admin-avatar-list");
  try {
    const { users } = await accountRequest("/api/admin/users");
    container.innerHTML = users.map((user) => {
      const initial = Array.from(user.username)[0]?.toLocaleUpperCase("en-US") || "M";
      const picture = user.hasAvatar
        ? `<img class="avatar-image" src="/api/users/${user.id}/avatar?v=${user.avatarVersion}" alt="" loading="lazy" />`
        : escapeHtml(initial);
      const passwordLabel = user.hasPassword ? "PIN SET" : "RECOVERY RESET REQUIRED";
      const isOwnAccount = user.id === currentUser.id;
      const accountAction = user.isActive ? "deactivate" : "reactivate";
      const accountStatus = user.isActive ? "ACTIVE" : "DEACTIVATED";
      return `<article class="admin-avatar-row${user.isActive ? "" : " is-deactivated"}"><div class="admin-avatar-member"><span class="avatar">${picture}</span><strong>${escapeHtml(user.username)}${user.isAdmin ? '<small>ADMIN</small>' : ""}<small class="admin-account-state">${accountStatus}</small><small>${passwordLabel}</small></strong></div><div class="admin-avatar-actions"><label class="outline-button admin-avatar-upload" for="admin-avatar-file-${user.id}">Upload<input id="admin-avatar-file-${user.id}" data-admin-avatar-upload="${user.id}" type="file" accept="image/jpeg,image/png,image/webp" /></label><button class="outline-button" data-admin-avatar-remove="${user.id}" type="button" ${user.hasAvatar ? "" : "disabled"}>Remove photo</button><button class="outline-button admin-password-delete" data-admin-password-delete="${user.id}" type="button" ${user.hasPassword && !isOwnAccount ? "" : "disabled"} title="${isOwnAccount ? "You cannot delete your own password" : "Invalidate this member PIN"}">Delete PIN</button></div><div class="admin-account-actions"><button class="outline-button admin-account-toggle" data-admin-account-action="${accountAction}" data-admin-account-id="${user.id}" type="button" ${isOwnAccount ? "disabled" : ""}>${user.isActive ? "Deactivate" : "Reactivate"}</button></div></article>`;
    }).join("") || '<div class="community-empty">No member accounts found.</div>';
  } catch (error) {
    container.innerHTML = `<div class="community-empty">${escapeHtml(error.message || "Could not load member accounts.")}</div>`;
  }
}

async function deleteAdminMemberPassword(targetUserId) {
  if (!currentUser?.isAdmin || targetUserId === currentUser.id) return;
  const confirmed = window.confirm("Delete this member’s password? They will be signed out and must use their recovery questions to set a new PIN. The current PIN will not be shown.");
  if (!confirmed) return;
  const status = document.getElementById("admin-avatar-status");
  status.textContent = "Deleting member PIN…";
  try {
    await accountRequest(`/api/admin/users/${targetUserId}/password`, { method: "DELETE" });
    await renderAdminAvatarUsers();
    status.textContent = "PIN deleted. The member must use password recovery to regain access.";
  } catch (error) {
    status.textContent = error.message || "Could not delete this member PIN.";
  }
}

async function toggleAdminMemberAccount(targetUserId, action) {
  if (!currentUser?.isAdmin || targetUserId === currentUser.id || !["deactivate", "reactivate"].includes(action)) return;
  if (action === "deactivate" && !window.confirm("Deactivate this account? The member will be signed out and hidden from shared activity. Their workouts and account data will be preserved.")) return;
  const status = document.getElementById("admin-avatar-status");
  status.textContent = action === "deactivate" ? "Deactivating account…" : "Reactivating account…";
  try {
    await accountRequest(`/api/admin/users/${targetUserId}/${action}`, { method: "POST", body: {} });
    await renderAdminAvatarUsers();
    status.textContent = action === "deactivate"
      ? "Account deactivated. Data is preserved; you can reactivate it later."
      : "Account reactivated. The member can sign in again.";
    await refreshCommunityActivity();
  } catch (error) {
    status.textContent = error.message || "Could not update this account.";
  }
}

async function encodeAvatarFile(file) {
  if (!file || !["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 20 * 1024 * 1024) {
    throw new Error("Choose a JPEG, PNG, or WebP image smaller than 20 MB.");
  }
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 512 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const context = canvas.getContext("2d");
  context.fillStyle = "#111720";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  let imageBlob = null;
  for (const quality of [0.86, 0.76, 0.66, 0.56, 0.46]) {
    imageBlob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", quality));
    if (imageBlob && imageBlob.size <= 512 * 1024) break;
  }
  if (!imageBlob || imageBlob.size > 512 * 1024) throw new Error("This image could not be compressed under 512 KB.");
  const imageBase64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = () => reject(new Error("Could not read that image."));
    reader.readAsDataURL(imageBlob);
  });
  return { mime: "image/jpeg", imageBase64 };
}

async function uploadAvatarFile(file, targetUserId = null) {
  const status = document.getElementById(targetUserId ? "admin-avatar-status" : "profile-photo-status");
  try {
    status.textContent = "Preparing photo…";
    const image = await encodeAvatarFile(file);
    const endpoint = targetUserId ? `/api/admin/users/${targetUserId}/avatar` : "/api/profile/avatar";
    const result = await accountRequest(endpoint, { method: "POST", body: image });
    if (targetUserId) {
      if (Number(targetUserId) === currentUser.id) {
        currentUser = result.user;
        updateProfileAvatarUI();
      }
      await renderAdminAvatarUsers();
      await refreshCommunityActivity();
    } else {
      currentUser = result.user;
      updateProfileAvatarUI();
      await refreshCommunityActivity();
    }
    status.textContent = "Photo updated.";
  } catch (error) {
    status.textContent = error.message || "Could not upload that photo.";
  }
}

async function removeAvatar(targetUserId = null) {
  const status = document.getElementById(targetUserId ? "admin-avatar-status" : "profile-photo-status");
  try {
    const endpoint = targetUserId ? `/api/admin/users/${targetUserId}/avatar` : "/api/profile/avatar";
    const result = await accountRequest(endpoint, { method: "DELETE" });
    if (targetUserId) {
      if (Number(targetUserId) === currentUser.id) {
        currentUser = result.user;
        updateProfileAvatarUI();
      }
      await renderAdminAvatarUsers();
      await refreshCommunityActivity();
    } else {
      currentUser = result.user;
      updateProfileAvatarUI();
      await refreshCommunityActivity();
    }
    status.textContent = "Photo removed.";
  } catch (error) {
    status.textContent = error.message || "Could not remove that photo.";
  }
}

function setAuthMessage(message = "", tone = "error") {
  const output = document.getElementById("auth-message");
  output.textContent = message;
  output.dataset.tone = tone;
}

function setAuthMode(mode) {
  const activeForm = { login: "login-form", register: "register-form", recover: "recovery-form" }[mode] || "login-form";
  document.querySelectorAll(".auth-form").forEach((form) => { form.hidden = form.id !== activeForm; });
  document.querySelectorAll(".auth-mode-switch [data-auth-mode]").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.authMode === mode));
  });
  document.querySelector(".auth-mode-switch").hidden = mode === "recover";
  document.getElementById("account-panel-title").textContent = mode === "register" ? "Create your account." : mode === "recover" ? "Reset your password." : "Welcome back.";
  setAuthMessage();
}

function clearLegacyAccountData() {
  for (const key of ["repwise-data", "repwise-custom-exercises", "repwise-split"]) {
    try { localStorage.removeItem(key); } catch { /* Account data now lives on the server. */ }
  }
}

function legacyAccountData() {
  return {
    sessions: Array.isArray(savedData.sessions) ? savedData.sessions : [],
    records: savedData.records || {},
    repRecords: savedData.repRecords || {},
    recordDates: savedData.recordDates || {},
    customExercises,
    splitId: selectedSplitId,
  };
}

function hasLegacyAccountData() {
  return Array.isArray(savedData.sessions)
    || Object.keys(savedData.records || {}).length > 0
    || customExercises.length > 0
    || Boolean(localStorage.getItem("repwise-split"));
}

function applyAccountData(data) {
  sessions = Array.isArray(data.sessions) ? data.sessions : [];
  personalRecords = data.records && typeof data.records === "object" ? data.records : {};
  personalRepRecords = data.repRecords && typeof data.repRecords === "object" ? data.repRecords : {};
  personalRecordDates = data.recordDates && typeof data.recordDates === "object" ? data.recordDates : {};
  customExercises = Array.isArray(data.customExercises)
    ? data.customExercises.filter((exercise) => exercise?.name && muscleGroups.includes(exercise.group))
    : [];
  EXERCISES = [...EXERCISES.filter((exercise) => exercise.type !== "Custom"), ...customExercises];
  selectedSplitId = TRAINING_SPLITS[data.splitId] ? data.splitId : "ppl";
  selectedWorkoutPhaseId = null;
  draftExercises = [];
  activeExerciseId = null;
  renderDashboard();
  renderDraftExercises();
  renderLibrary();
}

async function activateAccount(user, data) {
  currentUser = user;
  startIdleLogoutTimer();
  applyAccountData(data);
  document.getElementById("current-username").textContent = user.username;
  updateProfileAvatarUI();
  document.getElementById("app-shell").hidden = false;
  document.querySelector(".mobile-nav").hidden = false;
  document.body.classList.add("authenticated");
  clearLegacyAccountData();
  setAuthMessage();
  await refreshCommunityActivity();
  await primeFeedbackAlertCursor();
  if (!communityRefreshTimer) communityRefreshTimer = window.setInterval(refreshCommunityActivity, 45000);
  if (!feedbackAlertTimer) feedbackAlertTimer = window.setInterval(pollFeedbackAlerts, 30000);
}

function renderActivityLike(activity) {
  const count = Number(activity.likes) || 0;
  if (activity.isOwn) return `<span class="activity-like-count" aria-label="${count} likes">♡ ${count}</span>`;
  return `<button class="activity-like" data-like-event="${activity.id}" type="button" aria-pressed="${activity.liked}" aria-label="${activity.liked ? "Unlike" : "Like"} ${escapeHtml(activity.username)}’s ${activity.type === "pr" ? "personal best" : "workout"}"><span aria-hidden="true">${activity.liked ? "♥" : "♡"}</span><span>${count}</span><span class="sr-only">likes</span></button>`;
}

function communityDateLabel(dateValue) {
  const date = new Date(`${dateValue}T12:00:00`);
  return Number.isNaN(date.getTime()) ? "Date unavailable" : formatDate(date);
}

function renderCommunityPrs(prs) {
  const container = document.getElementById("community-prs");
  if (!prs.length) {
    container.innerHTML = '<div class="community-empty">No recent personal bests yet.</div>';
    return;
  }
  container.innerHTML = prs.map((pr) => {
    const value = `${pr.value} ${pr.unit}`;
    return `<article class="pr-activity-row"><div class="community-member">${communityAvatarMarkup(pr)}<strong>${escapeHtml(pr.username)}</strong></div><div class="pr-activity-copy"><strong>${escapeHtml(pr.username)} hit a new PR!!</strong><span>${escapeHtml(pr.exercise)} · ${escapeHtml(communityDateLabel(pr.date))} · ${escapeHtml(pr.workoutName)}</span></div><span class="pr-activity-value">${escapeHtml(value)}</span>${renderActivityLike({ ...pr, type: "pr" })}</article>`;
  }).join("");
}

function renderCommunityWorkouts(workouts) {
  const container = document.getElementById("community-workouts");
  if (!workouts.length) {
    container.innerHTML = '<div class="community-empty">No shared workouts yet.</div>';
    return;
  }
  container.innerHTML = workouts.map((workout) => {
    const exerciseNames = workout.exercises.slice(0, 4).map((name) => `<span>${escapeHtml(name)}</span>`).join("");
    const moreExercises = workout.exercises.length > 4 ? `<span>+${workout.exercises.length - 4}</span>` : "";
    const stats = [workout.sets ? `${workout.sets} sets` : "", workout.volume ? `${workout.volume.toLocaleString("en-US")} lb` : "", workout.duration ? `${workout.duration} min` : ""].filter(Boolean).join(" · ");
    return `<article class="community-row activity-row"><div class="community-member">${communityAvatarMarkup(workout)}<strong>${escapeHtml(workout.username)}</strong></div><div class="community-workout"><span class="eyebrow">${escapeHtml(communityDateLabel(workout.date))}</span><div class="community-workout-title">${renderWorkoutMarker(workout)}<strong>${escapeHtml(workout.name)}</strong></div></div><div class="community-exercises">${exerciseNames}${moreExercises}</div><span class="community-stats">${escapeHtml(stats || "Workout complete")}</span>${renderActivityLike({ ...workout, type: "workout" })}</article>`;
  }).join("");
}

async function refreshCommunityActivity() {
  if (!currentUser) return;
  try {
    const activity = await accountRequest("/api/community-activity");
    if (!currentUser) return;
    renderCommunityPrs(activity.prs);
    renderCommunityWorkouts(activity.workouts);
  } catch {
    document.getElementById("community-prs").innerHTML = '<div class="community-empty">Recent PRs are temporarily unavailable.</div>';
    document.getElementById("community-workouts").innerHTML = '<div class="community-empty">Member workouts are temporarily unavailable.</div>';
  }
}

async function toggleActivityLike(eventId) {
  try {
    await accountRequest(`/api/activity/${eventId}/like`, { method: "POST", body: {} });
    await refreshCommunityActivity();
  } catch (error) {
    showToast(error.message || "Could not update like.");
  }
}

const feedbackCategoryNames = { like: "Like", dislike: "Dislike", suggestion: "Suggestion" };

function formatFeedbackDate(timestamp) {
  const date = new Date(Number(timestamp));
  return Number.isNaN(date.getTime()) ? "Date unavailable" : formatDate(date, { month: "short", day: "numeric", year: "numeric" });
}

function renderFeedbackItems(container, items, includeAuthor = false) {
  if (!items.length) {
    container.innerHTML = '<div class="community-empty">No feedback submitted yet.</div>';
    return;
  }
  container.innerHTML = items.map((item) => `<article class="feedback-entry"><div class="feedback-entry-heading"><span class="feedback-kind kind-${escapeHtml(item.category)}">${escapeHtml(feedbackCategoryNames[item.category] || "Feedback")}</span>${includeAuthor ? `<strong>${escapeHtml(item.username)}</strong>` : ""}<time>${escapeHtml(formatFeedbackDate(item.created_at))}</time></div><p>${escapeHtml(item.message)}</p></article>`).join("");
}

async function loadFeedbackView() {
  if (!currentUser) return;
  const ownList = document.getElementById("my-feedback-list");
  const adminSection = document.getElementById("admin-feedback-section");
  adminSection.hidden = !currentUser.isAdmin;
  try {
    const ownFeedback = await accountRequest("/api/feedback");
    renderFeedbackItems(ownList, ownFeedback.items);
    if (currentUser.isAdmin) {
      const adminFeedback = await accountRequest("/api/admin/feedback");
      renderFeedbackItems(document.getElementById("admin-feedback-list"), adminFeedback.items, true);
    }
  } catch (error) {
    ownList.innerHTML = `<div class="community-empty">${escapeHtml(error.message || "Could not load feedback.")}</div>`;
  }
}

async function primeFeedbackAlertCursor() {
  feedbackAlertCursor = 0;
  if (!currentUser?.isAdmin && currentUser?.username.toLocaleLowerCase("en-US") !== "kenny") return;
  try {
    const result = await accountRequest("/api/feedback/alerts?afterId=0");
    feedbackAlertCursor = Number(result.latestId) || 0;
  } catch { /* The inbox remains available if alert priming fails. */ }
}

async function pollFeedbackAlerts() {
  if (!currentUser?.isAdmin && currentUser?.username.toLocaleLowerCase("en-US") !== "kenny") return;
  try {
    const result = await accountRequest(`/api/feedback/alerts?afterId=${feedbackAlertCursor}`);
    feedbackAlertCursor = Math.max(feedbackAlertCursor, Number(result.latestId) || 0);
    if (!result.items.length) return;
    const latest = result.items[result.items.length - 1];
    const category = feedbackCategoryNames[latest.category]?.toLocaleLowerCase("en-US") || "feedback";
    showToast(result.items.length === 1
      ? `New ${category} feedback from ${latest.username}.`
      : `${result.items.length} new feedback posts received.`);
    if (document.getElementById("feedback-view").classList.contains("active")) await loadFeedbackView();
  } catch { /* Feedback remains available in its view if alerts cannot be polled. */ }
}


async function initializeAccountPortal() {
  setAuthMode("login");
  try {
    const { user } = await accountRequest("/api/me");
    const data = await accountRequest("/api/data");
    await activateAccount(user, data);
  } catch (error) {
    if (error.status !== 401) setAuthMessage("The account server is unavailable. Open Lift with Kenny through your Unraid server.");
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function formatDate(date, options = { month: "short", day: "numeric" }) {
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

function muscleGroupFor(exercise) {
  return EXERCISES.find((item) => item.name.toLowerCase() === exercise.toLowerCase())?.group || "Full body";
}

function toTitleCase(value) {
  return value.trim().toLocaleLowerCase("en-US").replace(/(^|[\s-])([a-z])/g, (match, separator, letter) => `${separator}${letter.toLocaleUpperCase("en-US")}`);
}

function getNextSplitSession() {
  const plan = TRAINING_SPLITS[selectedSplitId];
  const latestPlannedSession = [...sessions].filter((session) => session.splitId === selectedSplitId && session.programDay)
    .sort((first, second) => second.date.localeCompare(first.date) || String(second.id).localeCompare(String(first.id)))[0];
  const previousIndex = latestPlannedSession ? plan.phases.findIndex((phase) => phase.id === latestPlannedSession.programDay) : -1;
  const phaseIndex = (previousIndex + 1) % plan.phases.length;
  return { plan, phase: plan.phases[phaseIndex], phaseIndex };
}

function getSelectedSplitSession() {
  const next = getNextSplitSession();
  const selectedIndex = next.plan.phases.findIndex((phase) => phase.id === selectedWorkoutPhaseId);
  const phaseIndex = selectedIndex >= 0 ? selectedIndex : next.phaseIndex;
  return { plan: next.plan, phase: next.plan.phases[phaseIndex], phaseIndex };
}

function getLastMatchingWorkout(phase = getSelectedSplitSession().phase) {
  return [...sessions]
    .filter((session) => session.splitId === selectedSplitId && session.programDay === phase.id)
    .sort((first, second) => second.date.localeCompare(first.date) || String(second.id).localeCompare(String(first.id)))[0] || null;
}

const WORKOUT_SPLIT_SHAPES = { ppl: "circle", "upper-lower": "square", bro: "triangle", "3-5-7": "outline-circle" };
const WORKOUT_DAY_COLORS = {
  ppl: { push: "#78b7ff", pull: "#ffad75", legs: "#7dd3a7" },
  "upper-lower": { upper: "#78b7ff", lower: "#ffad75" },
  bro: { chest: "#f28a9b", back: "#78b7ff", shoulders: "#ffbd75", legs: "#7dd3a7", arms: "#c2a0ff" },
  "3-5-7": { "full-a": "#78b7ff", "full-b": "#ffad75", "full-c": "#7dd3a7" },
};

function renderWorkoutMarker(session) {
  const splitId = TRAINING_SPLITS[session.splitId] ? session.splitId : "ppl";
  const phase = TRAINING_SPLITS[splitId].phases.find((item) => item.id === session.programDay);
  const shape = WORKOUT_SPLIT_SHAPES[splitId];
  const color = WORKOUT_DAY_COLORS[splitId]?.[session.programDay] || "#a1afc1";
  const label = `${TRAINING_SPLITS[splitId].name}${phase ? ` · ${phase.title}` : ""}`;
  return `<span class="workout-split-marker shape-${shape}" style="--marker-color:${color}" role="img" aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}"></span>`;
}

function sessionBodyGroups(session) {
  const exerciseNames = Array.isArray(session.exercises) ? session.exercises : [];
  return new Set(exerciseNames.map(muscleGroupFor));
}

function renderRecentWorkoutOptions() {
  const select = document.getElementById("recent-workout-select");
  if (!select) return;
  const { phase } = getSelectedSplitSession();
  const newestFirst = [...sessions].sort((first, second) => second.date.localeCompare(first.date) || String(second.id).localeCompare(String(first.id)));
  const groups = phase.groups.map((group) => ({
    group,
    sessions: newestFirst.filter((session) => sessionBodyGroups(session).has(group)).slice(0, 3),
  })).filter((item) => item.sessions.length);
  const options = groups.map(({ group, sessions: recentSessions }) => `<optgroup label="${escapeHtml(group)}">${recentSessions.map((session) => {
    const date = formatDate(new Date(`${session.date}T12:00:00`));
    const moveCount = session.exercises?.length || 0;
    return `<option value="${escapeHtml(session.id)}">${escapeHtml(date)} · ${escapeHtml(session.name)} · ${moveCount} moves</option>`;
  }).join("")}</optgroup>`).join("");
  select.innerHTML = `<option value="">${options ? "Choose a previous workout…" : "No matching workouts yet"}</option>${options}`;
}

function updateExerciseOptions() {
  const { phase } = getSelectedSplitSession();
  const selected = document.getElementById("exercise-select").value;
  const exercises = [...new Set([...phase.exercises, ...customExercises.filter((exercise) => phase.groups.includes(exercise.group)).map((exercise) => exercise.name)])];
  const select = document.getElementById("exercise-select");
  select.innerHTML = '<option value="">Choose a ' + escapeHtml(phase.title.toLowerCase()) + ' exercise…</option>' + exercises.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)} — ${escapeHtml(muscleGroupFor(name))}</option>`).join("");
  if (exercises.includes(selected)) select.value = selected;
  document.getElementById("custom-exercise-group").innerHTML = phase.groups.map((group) => `<option value="${escapeHtml(group)}">${escapeHtml(group)}</option>`).join("");
}

function renderSplitUI(resetWorkoutName = false) {
  const next = getNextSplitSession();
  if (resetWorkoutName || !next.plan.phases.some((phase) => phase.id === selectedWorkoutPhaseId)) selectedWorkoutPhaseId = next.phase.id;
  const { plan, phase } = getSelectedSplitSession();
  document.querySelectorAll(".split-option").forEach((button) => {
    const active = button.dataset.split === selectedSplitId;
    button.setAttribute("aria-checked", String(active));
    button.classList.toggle("active", active);
  });
  document.getElementById("split-plan-name").textContent = plan.name;
  document.getElementById("split-next-focus").textContent = phase.title;
  document.getElementById("split-cycle-summary").textContent = plan.summary;
  document.getElementById("split-next-label").textContent = `${plan.shortName} · UP NEXT`;
  document.getElementById("split-next-title").textContent = phase.title;
  document.getElementById("split-next-description").textContent = `${phase.focus}. ${plan.description}`;
  document.getElementById("workout-split-label").textContent = `YOUR ${plan.name.toUpperCase()} PLAN`;
  document.getElementById("workout-suggestion-title").textContent = phase.title;
  document.getElementById("workout-suggestion-moves").textContent = phase.exercises.join(" · ");
  const workoutName = document.getElementById("workout-name");
  if (resetWorkoutName || !workoutName.value || workoutName.value === suggestedWorkoutName) {
    workoutName.value = phase.title;
  }
  suggestedWorkoutName = phase.title;
  const daySelect = document.getElementById("workout-day");
  daySelect.innerHTML = plan.phases.map((splitPhase) => `<option value="${escapeHtml(splitPhase.id)}">${escapeHtml(splitPhase.title)}</option>`).join("");
  daySelect.value = phase.id;
  const quickDaySelect = document.getElementById("quick-start-day");
  quickDaySelect.innerHTML = daySelect.innerHTML;
  quickDaySelect.value = phase.id;  updateExerciseOptions();
  renderRecentWorkoutOptions();
  const lastWorkout = getLastMatchingWorkout(phase);
  const reuseButton = document.getElementById("load-last-split-workout");
  reuseButton.disabled = !lastWorkout;
  reuseButton.textContent = lastWorkout
    ? `Load last ${phase.title} workout · ${formatDate(new Date(`${lastWorkout.date}T12:00:00`))}`
    : `No previous ${phase.title} workout`;
}

function selectTrainingSplit(splitId) {
  if (!TRAINING_SPLITS[splitId] || splitId === selectedSplitId) return;
  selectedSplitId = splitId;
  saveData();
  renderSplitUI(true);
  renderDashboard();
  if (document.getElementById("exercises-view").classList.contains("active")) renderLibrary();
  showToast(`${TRAINING_SPLITS[splitId].name} selected. Next up: ${getNextSplitSession().phase.title}.`);
}

function loadSuggestedWorkout() {
  const { phase } = getSelectedSplitSession();
  document.getElementById("workout-name").value = phase.title;
  suggestedWorkoutName = phase.title;
  draftExercises = [];
  phase.exercises.forEach((name) => {
    addExercise(name);
  });
  renderNavigation("workout");
}

function loadPreviousWorkout(previousWorkout, toastMessage = "") {
  if (!previousWorkout) return;
  const savedExercises = previousWorkout.setDetails || [];
  const exerciseNames = Array.isArray(previousWorkout.exercises)
    ? previousWorkout.exercises
    : savedExercises.map((exercise) => exercise.name);
  if (previousWorkout.splitId === selectedSplitId && TRAINING_SPLITS[selectedSplitId].phases.some((phase) => phase.id === previousWorkout.programDay)) {
    selectedWorkoutPhaseId = previousWorkout.programDay;
    renderSplitUI();
  }
  draftExercises = exerciseNames.map((name) => {
    const savedExercise = savedExercises.find((exercise) => exercise.name === name);
    const sets = savedExercise?.sets?.filter((set) => Number(set.weight) > 0 && Number(set.reps) > 0).map((set) => ({
      weight: set.weight ?? 0,
      reps: set.reps ?? 0,
      done: false,
      notes: set.notes || "",
    })) || [];
    return {
      id: crypto.randomUUID ? crypto.randomUUID() : `exercise-${Date.now()}-${Math.random()}`,
      name,
      notes: savedExercise?.notes || "",
      completed: false,
      supersetId: savedExercise?.supersetId,
      sets,
    };
  });
  document.getElementById("workout-name").value = previousWorkout.name || getSelectedSplitSession().phase.title;
  suggestedWorkoutName = document.getElementById("workout-name").value;
  workoutStartedAt = Date.now();
  renderDraftExercises();
  renderNavigation("workout");
  showToast(toastMessage || `Loaded ${previousWorkout.name || "your previous workout"}.`);
}

function loadLastMatchingWorkout() {
  const { phase } = getSelectedSplitSession();
  const previousWorkout = getLastMatchingWorkout(phase);
  if (!previousWorkout) {
    showToast(`No previous ${phase.title} workout to load.`);
    return;
  }
  loadPreviousWorkout(previousWorkout, `Loaded your last ${phase.title} workout.`);
}

function renderNavigation(view) {
  closeMobileMenu();
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("active", section.id === `${view}-view`);
  });
  const titles = { dashboard: "OVERVIEW", workout: "LOG WORKOUT", history: "TRAINING HISTORY", exercises: "EXERCISES", feedback: "FEEDBACK" };
  document.getElementById("breadcrumb-current").textContent = titles[view];
  if (view === "history") renderHistory();
  if (view === "exercises") renderLibrary();
  if (view === "feedback") loadFeedbackView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMobileMenu() {
  if (document.body.classList.contains("mobile-menu-open")) return;
  document.body.classList.add("mobile-menu-open");
  document.getElementById("mobile-menu-open").setAttribute("aria-expanded", "true");
  document.getElementById("sidebar-close").focus();
}

function closeMobileMenu() {
  document.body.classList.remove("mobile-menu-open");
  const openButton = document.getElementById("mobile-menu-open");
  if (openButton) openButton.setAttribute("aria-expanded", "false");
}

function renderSessions() {
  const container = document.getElementById("recent-sessions");
  const sorted = [...sessions].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
    container.innerHTML = sorted.length ? sorted.map((session) => {
      const date = new Date(`${session.date}T12:00:00`);
      const exerciseNames = session.exercises.slice(0, 3).map((name) => `<span>${escapeHtml(name)}</span>`).join("");
      return `<article class="session-card"><div class="session-date"><strong>${date.getDate()}</strong><span>${formatDate(date, { month: "short" }).toUpperCase()}</span></div><div class="session-description"><div class="session-title-line">${renderWorkoutMarker(session)}<strong>${escapeHtml(session.name)}</strong></div><div class="session-exercises">${exerciseNames}${session.exercises.length > 3 ? `<span>+${session.exercises.length - 3} more</span>` : ""}</div></div><div class="session-stats"><strong>${session.duration} min</strong><span>${session.sets} SETS</span></div></article>`;
  }).join("") : '<div class="empty-workout"><strong>Your log starts here.</strong>Finish a workout and your sessions will show up here.</div>';
}

function renderDashboard() {
  const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - ((today.getDay() + 6) % 7));
  const sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6);
  document.getElementById("week-range").textContent = `${formatDate(monday)} — ${formatDate(sunday)}`;
  renderSplitUI();
  const weekStart = isoDate(monday);
  const previousWeekStart = isoDate(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() - 7));
  const previousWeekEnd = isoDate(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() - 1));
  const weekSessions = sessions.filter((session) => session.date >= weekStart && session.date <= isoDate(today));
  const previousWeekCount = sessions.filter((session) => session.date >= previousWeekStart && session.date <= previousWeekEnd).length;
  const weeklyVolume = weekSessions.reduce((sum, session) => sum + session.volume, 0);
  document.getElementById("week-sessions").textContent = String(weekSessions.length);
  document.getElementById("week-volume").textContent = weeklyVolume.toLocaleString("en-US");
  const recordEntries = Object.entries(personalRecords).sort((first, second) => second[1] - first[1]);
  const featuredRecord = recordEntries[0];
  document.getElementById("record-count").textContent = String(recordEntries.length);
  if (featuredRecord) {
    const matchingRecordSession = [...sessions].sort((first, second) => second.date.localeCompare(first.date)).find((session) =>
      session.setDetails?.some((exercise) => exercise.name === featuredRecord[0] && exercise.sets.some((set) => set.weight >= featuredRecord[1]))
    );
    const recordDate = matchingRecordSession?.date || personalRecordDates[featuredRecord[0]] || recentDate(0);
    document.querySelector(".record-feature").innerHTML = `<span class="record-mark">↗</span><span><strong>${escapeHtml(featuredRecord[0])}</strong><small>${featuredRecord[1]} lb <span>·</span> ${formatDate(new Date(`${recordDate}T12:00:00`))}</small></span><span class="record-arrow">→</span>`;
  } else document.querySelector(".record-feature").innerHTML = '<span class="record-empty">No records yet.</span>';
  document.querySelector(".record-pill").textContent = "ALL-TIME BEST";
  const trainedDays = new Set(sessions.map((session) => session.date));
  let streakDate = trainedDays.has(isoDate(today)) ? isoDate(today) : isoDate(dateOffset(-1));
  let streak = 0;
  while (trainedDays.has(streakDate)) {
    streak += 1;
    const [year, month, day] = streakDate.split("-").map(Number);
    streakDate = isoDate(new Date(year, month - 1, day - 1));
  }
  document.getElementById("streak-count").textContent = String(streak);
  const weekDifference = weekSessions.length - previousWeekCount;
  document.querySelector(".metric-trend").innerHTML = `<span style="color:var(--accent)">${weekDifference > 0 ? "+" : ""}${weekDifference}</span> <span>vs last week</span>`;
  const bars = document.getElementById("session-bars");
  const weekdays = Array.from({ length: 7 }, (_, index) => new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + index));
  const activeDays = weekdays.map((day) => sessions.some((session) => session.date === isoDate(day)));
  document.querySelectorAll(".streak-track span").forEach((bar, index) => { bar.style.background = activeDays[index] ? "var(--accent)" : ""; });
  bars.innerHTML = weekdays.map((day, index) => `<span data-day="${new Intl.DateTimeFormat("en-US", { weekday: "narrow" }).format(day)}" style="${activeDays[index] ? "background:var(--accent)" : ""}"></span>`).join("");
  const groupCounts = Object.fromEntries(muscleGroups.map((group) => [group, 0]));
  const since = isoDate(dateOffset(-30));
  sessions.filter((session) => session.date >= since).forEach((session) => session.exercises.forEach((exercise) => {
    const group = muscleGroupFor(exercise);
    if (groupCounts[group] !== undefined) groupCounts[group] += 1;
  }));
  const highest = Math.max(1, ...Object.values(groupCounts));
  document.getElementById("muscle-grid").innerHTML = muscleGroups.map((group) => `<div class="muscle-cell"><strong>${group}</strong><span>${groupCounts[group]} ${groupCounts[group] === 1 ? "exercise" : "exercises"}</span><div class="muscle-meter"><span style="width:${Math.round((groupCounts[group] / highest) * 100)}%"></span></div></div>`).join("");
  renderSessions();
}

function renderHistory() {
  const filter = document.getElementById("history-filter").value;
  const sorted = [...sessions].sort((a, b) => b.date.localeCompare(a.date));
  const boundary = filter === "week" ? isoDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6)) : filter === "month" ? isoDate(new Date(today.getFullYear(), today.getMonth(), 1)) : "0000-00-00";
  const filtered = sorted.filter((session) => session.date >= boundary);
  const volume = filtered.reduce((sum, session) => sum + session.volume, 0);
  document.getElementById("history-stats").innerHTML = `<div class="history-stat"><span>SESSIONS</span><strong>${filtered.length}</strong></div><div class="history-stat"><span>WEIGHT MOVED</span><strong>${volume.toLocaleString("en-US")} <small style="font:9px var(--mono);color:var(--muted)">LB</small></strong></div><div class="history-stat"><span>PERSONAL RECORDS</span><strong>${Object.keys(personalRecords).length}</strong></div>`;
  const grouped = Object.groupBy ? Object.groupBy(filtered, (session) => session.date.slice(0, 7)) : filtered.reduce((groups, session) => ((groups[session.date.slice(0, 7)] ??= []).push(session), groups), {});
  const container = document.getElementById("history-list");
  if (!filtered.length) {
    container.innerHTML = '<div class="empty-workout"><strong>No sessions in this time frame.</strong>Your next workout is a good place to start.</div>';
    return;
  }
  container.innerHTML = Object.entries(grouped).map(([month, items]) => `<div class="history-group-label">${formatDate(new Date(`${month}-15T12:00:00`), { month: "long", year: "numeric" }).toUpperCase()}</div>${items.map((session) => {
    const date = new Date(`${session.date}T12:00:00`);
    return `<article class="history-item"><div class="history-day"><strong>${date.getDate()}</strong><span>${formatDate(date, { weekday: "short" }).toUpperCase()}</span></div><div class="history-info"><div class="history-session-title">${renderWorkoutMarker(session)}<strong>${escapeHtml(session.name)}</strong></div><p class="history-exercise-list">${session.exercises.map(escapeHtml).join(" · ")}</p></div><div class="history-side"><strong>${session.duration} min</strong><span>${session.sets} SETS · ${session.volume.toLocaleString("en-US")} LB</span></div></article>`;
  }).join("")}`).join("");
}

function renderCalendarLegend() {
  const legend = document.getElementById("calendar-shape-legend");
  legend.innerHTML = Object.entries(TRAINING_SPLITS).flatMap(([splitId, plan]) => plan.phases.map((phase) =>
    `<span class="calendar-legend-item">${renderWorkoutMarker({ splitId, programDay: phase.id })}<span>${escapeHtml(plan.shortName)} · ${escapeHtml(phase.title)}</span></span>`
  )).join("");
}

function renderWorkoutCalendar() {
  document.querySelector(".workout-calendar-shell").dataset.step = pendingCalendarCopy ? "pick" : selectedCalendarDate ? "day" : "browse";
  const monthInput = document.getElementById("workout-calendar-month");
  if (!monthInput.value) monthInput.value = isoDate(today).slice(0, 7);
  const [year, monthNumber] = monthInput.value.split("-").map(Number);
  const monthStart = new Date(year, monthNumber - 1, 1);
  const monthSessions = [...sessions].filter((session) => session.date.startsWith(monthInput.value));
  const sessionsByDate = new Map();
  monthSessions.forEach((session) => sessionsByDate.set(session.date, [...(sessionsByDate.get(session.date) || []), session]));
  const gridStart = new Date(year, monthNumber - 1, 1 - ((monthStart.getDay() + 6) % 7));
  document.getElementById("workout-calendar-grid").innerHTML = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index);
    const dateValue = isoDate(date);
    const inMonth = date.getMonth() === monthNumber - 1;
    const daySessions = sessionsByDate.get(dateValue) || [];
    const markers = daySessions.slice(0, 3).map(renderWorkoutMarker).join("");
    const extra = daySessions.length > 3 ? `<span class="calendar-marker-more">+${daySessions.length - 3}</span>` : "";
    const classes = ["calendar-day", inMonth ? "" : "is-outside-month", daySessions.length ? "has-workouts" : "", selectedCalendarDate === dateValue ? "is-selected" : "", dateValue === isoDate(today) ? "is-today" : "", pendingCalendarCopy ? "is-copy-target" : ""].filter(Boolean).join(" ");
    return `<button class="${classes}" type="button" data-calendar-date="${dateValue}" aria-pressed="${selectedCalendarDate === dateValue}" aria-label="${escapeHtml(formatDate(date, { month: "long", day: "numeric", year: "numeric" }))}, ${daySessions.length} workouts" ${inMonth ? "" : "disabled"}><span class="calendar-day-number">${date.getDate()}</span><span class="calendar-day-markers">${markers}${extra}</span></button>`;
  }).join("");
  renderCalendarLegend();
  if (pendingCalendarCopy) return;

  const search = document.getElementById("workout-calendar-search").value.trim().toLocaleLowerCase("en-US");
  const searchResults = [...sessions].sort((first, second) => second.date.localeCompare(first.date) || String(second.id).localeCompare(String(first.id))).filter((session) => {
    if (selectedCalendarDate && session.date !== selectedCalendarDate) return false;
    if (!selectedCalendarDate && !search && !session.date.startsWith(monthInput.value)) return false;
    if (!search) return true;
    const phase = TRAINING_SPLITS[session.splitId]?.phases.find((item) => item.id === session.programDay)?.title || "";
    const groups = [...sessionBodyGroups(session)].join(" ");
    return [session.name, phase, groups, ...(session.exercises || [])].join(" ").toLocaleLowerCase("en-US").includes(search);
  });
  const monthLabel = formatDate(monthStart, { month: "long", year: "numeric" });
  document.getElementById("calendar-results-title").textContent = selectedCalendarDate
    ? `Workouts on ${formatDate(new Date(`${selectedCalendarDate}T12:00:00`), { month: "short", day: "numeric", year: "numeric" })}`
    : search ? "Search results" : `Workouts in ${monthLabel}`;
  document.getElementById("calendar-results-count").textContent = String(searchResults.length);
  document.getElementById("workout-calendar-results").innerHTML = searchResults.length ? searchResults.map((session) => {
    if (selectedCalendarDate) return renderCalendarSessionDetail(session);
    const splitName = TRAINING_SPLITS[session.splitId]?.name || "Workout";
    const dateLabel = formatDate(new Date(`${session.date}T12:00:00`), { weekday: "short", month: "short", day: "numeric", year: "numeric" });
    const exercises = (session.exercises || []).slice(0, 4).map((name) => `<span>${escapeHtml(name)}</span>`).join("");
    const more = session.exercises?.length > 4 ? `<span>+${session.exercises.length - 4}</span>` : "";
    return `<article class="calendar-session-result"><div class="calendar-result-heading">${renderWorkoutMarker(session)}<div><span class="eyebrow">${escapeHtml(dateLabel)} · ${escapeHtml(splitName)}</span><strong>${escapeHtml(session.name)}</strong></div></div><div class="calendar-result-exercises">${exercises}${more}</div><div class="calendar-result-footer"><span>${session.sets} sets · ${session.volume.toLocaleString("en-US")} lb</span><button class="outline-button" type="button" data-calendar-load="${escapeHtml(session.id)}">Load workout</button></div></article>`;
  }).join("") : '<div class="community-empty">No workouts match this date or search.</div>';
}

let pendingCalendarCopy = null;

function calendarSessionExercises(session) {
  if (Array.isArray(session.setDetails) && session.setDetails.length) return session.setDetails;
  return (session.exercises || []).map((name) => ({ name, sets: [] }));
}

function renderCalendarSessionDetail(session) {
  const splitName = TRAINING_SPLITS[session.splitId]?.name || "Workout";
  const dateLabel = formatDate(new Date(`${session.date}T12:00:00`), { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  const exercises = calendarSessionExercises(session).map((exercise, exerciseIndex) => {
    const sets = (exercise.sets || []).map((set, setIndex) => `<li><label class="calendar-copy-check"><input type="checkbox" data-copy-set="${setIndex}" checked /> Set ${setIndex + 1}: ${escapeHtml(set.weight)} lb × ${escapeHtml(set.reps)}${set.notes ? ` · ${escapeHtml(set.notes)}` : ""}</label></li>`).join("");
    return `<div class="calendar-copy-exercise" data-copy-exercise-index="${exerciseIndex}"><label class="calendar-copy-check"><input type="checkbox" data-copy-exercise checked /> <strong>${escapeHtml(exercise.name)}</strong></label>${sets ? `<ol>${sets}</ol>` : ""}</div>`;
  }).join("");
  return `<article class="calendar-session-result" data-copy-session="${escapeHtml(session.id)}"><div class="calendar-result-heading">${renderWorkoutMarker(session)}<div><span class="eyebrow">${escapeHtml(dateLabel)} · ${escapeHtml(splitName)}</span><strong>${escapeHtml(session.name)}</strong></div></div>${exercises}<div class="calendar-result-footer"><span>${session.sets} sets · ${Number(session.volume || 0).toLocaleString("en-US")} lb</span><div class="calendar-result-actions"><button class="outline-button" type="button" data-calendar-load="${escapeHtml(session.id)}">Load workout</button><button class="outline-button" type="button" data-calendar-copy="${escapeHtml(session.id)}">Copy to another day</button></div></div></article>`;
}

function setCalendarCopyMode(copy) {
  pendingCalendarCopy = copy;
  const banner = document.getElementById("calendar-copy-banner");
  banner.hidden = !copy;
  if (copy) document.getElementById("calendar-copy-text").textContent = `Select the day to copy “${copy.name}” to.`;
}

function startCalendarCopy(article) {
  const session = sessions.find((item) => String(item.id) === article.dataset.copySession);
  if (!session) return;
  const source = calendarSessionExercises(session);
  const exercises = [];
  article.querySelectorAll("[data-copy-exercise-index]").forEach((block) => {
    const exercise = source[Number(block.dataset.copyExerciseIndex)];
    if (!exercise || !block.querySelector("[data-copy-exercise]").checked) return;
    const setBoxes = [...block.querySelectorAll("[data-copy-set]")];
    const sets = setBoxes.filter((box) => box.checked).map((box) => ({ ...exercise.sets[Number(box.dataset.copySet)] }));
    if (setBoxes.length && !sets.length) return;
    exercises.push({ ...exercise, sets });
  });
  if (!exercises.length) {
    showToast("Check at least one exercise or set to copy.");
    return;
  }
  setCalendarCopyMode({ session, exercises, name: session.name });
  renderWorkoutCalendar();
  document.querySelector(".workout-calendar-shell").scrollTop = 0;
}

function copyWorkoutToDate(dateValue) {
  const { session, exercises } = pendingCalendarCopy;
  if (dateValue === session.date) {
    showToast("Choose a different day to copy to.");
    return;
  }
  const details = exercises.map((exercise) => ({ ...exercise, sets: exercise.sets.map((set) => ({ ...set })) }));
  const sets = details.reduce((total, exercise) => total + exercise.sets.length, 0);
  const volume = details.reduce((total, exercise) => total + exercise.sets.reduce((sum, set) => sum + (Number(set.weight) || 0) * (Number(set.reps) || 0), 0), 0);
  sessions.push({
    id: `session-${Date.now()}-copy`,
    date: dateValue,
    name: session.name,
    duration: session.duration,
    exercises: details.map((exercise) => exercise.name),
    volume: Math.round(volume),
    weightUnit: "lb",
    sets,
    notes: "",
    splitId: session.splitId,
    programDay: session.programDay,
    setDetails: details,
  });
  saveData();
  setCalendarCopyMode(null);
  selectedCalendarDate = dateValue;
  document.getElementById("workout-calendar-month").value = dateValue.slice(0, 7);
  renderWorkoutCalendar();
  renderDashboard();
  document.querySelector(".workout-calendar-shell").scrollTop = 0;
  showToast(`Copied ${details.length} exercise${details.length === 1 ? "" : "s"} to ${formatDate(new Date(`${dateValue}T12:00:00`), { month: "short", day: "numeric", year: "numeric" })}.`);
}

function populateExerciseOptions() {
  const select = document.getElementById("exercise-select");
  select.innerHTML = '<option value="">Choose an exercise…</option>' + EXERCISES.map((exercise) => `<option value="${escapeHtml(exercise.name)}">${escapeHtml(exercise.name)} — ${escapeHtml(exercise.group)}</option>`).join("");
  const muscleFilter = document.getElementById("muscle-filter");
  muscleFilter.innerHTML = '<option value="all">All muscle groups</option>' + muscleGroups.map((group) => `<option value="${group}">${group}</option>`).join("");
}

function saveCustomExercise() {
  const nameInput = document.getElementById("custom-exercise-name");
  const name = toTitleCase(nameInput.value);
  const group = document.getElementById("custom-exercise-group").value;
  if (!name || !muscleGroups.includes(group)) {
    showToast("Enter an exercise name and body part.");
    return;
  }
  if (EXERCISES.some((exercise) => exercise.name.toLocaleLowerCase("en-US") === name.toLocaleLowerCase("en-US"))) {
    showToast("That exercise is already in your library.");
    return;
  }
  const exercise = { name, group, type: "Custom" };
  customExercises.push(exercise);
  EXERCISES.push(exercise);
  saveData();
  nameInput.value = "";
  updateExerciseOptions();
  document.getElementById("exercise-select").value = name;
  addExercise(name);
  document.querySelector(".custom-exercise-panel").open = false;
  if (document.getElementById("exercises-view").classList.contains("active")) renderLibrary();
  showToast(`${name} added to ${TRAINING_SPLITS[selectedSplitId].name}.`);
}

function exerciseType(exerciseName) {
  return EXERCISES.find((exercise) => exercise.name === exerciseName)?.type || "Strength";
}

function renderDraftExercises() {
  const container = document.getElementById("workout-exercises");
  const { phase } = getSelectedSplitSession();
  document.getElementById("day-summary-title").textContent = phase.title;
  document.getElementById("exercise-detail-back-label").textContent = phase.title;
  document.getElementById("day-exercise-count").textContent = `${draftExercises.length} ${draftExercises.length === 1 ? "EXERCISE" : "EXERCISES"}`;
  if (!draftExercises.length) {
    container.innerHTML = '<div class="empty-workout"><strong>No exercises yet.</strong>Add an exercise above to start recording your sets.</div>';
    return;
  }
  const supersetIds = [...new Set(draftExercises.map((exercise) => exercise.supersetId).filter(Boolean))];
  const supersetColors = new Map(supersetIds.map((id, index) => [id, SUPERSET_COLORS[index % SUPERSET_COLORS.length]]));
  container.innerHTML = draftExercises.map((exercise, index) => {
    const color = exercise.supersetId ? supersetColors.get(exercise.supersetId) : "";
    const doneCount = exercise.sets.filter((set) => set.done).length;
    const summary = exercise.sets.length ? `${doneCount}/${exercise.sets.length} SETS COMPLETE` : "NO SETS LOGGED";
    return `<article class="exercise-summary-row${color ? " is-superset" : ""}" data-exercise-id="${escapeHtml(exercise.id)}" ${color ? `style="--superset-color:${color}"` : ""} draggable="true"><button class="drag-handle" data-drag-handle="true" type="button" draggable="true" aria-label="Drag to reorder ${escapeHtml(exercise.name)}" title="Drag to reorder">⠿</button><span class="workout-exercise-index">${String(index + 1).padStart(2, "0")}</span><button class="exercise-summary-open" data-open-exercise="${escapeHtml(exercise.id)}" type="button"><strong>${escapeHtml(exercise.name)}</strong><span>${escapeHtml(muscleGroupFor(exercise.name).toUpperCase())}${color ? " · SUPERSET" : ""} · ${summary}</span></button><button class="superset-button${color ? " active" : ""}" data-superset-toggle="${escapeHtml(exercise.id)}" type="button" aria-pressed="${Boolean(color)}">${color ? "A" : "+ Superset"}</button><button class="remove-exercise" data-remove-exercise="${escapeHtml(exercise.id)}" type="button" aria-label="Remove ${escapeHtml(exercise.name)}">×</button></article>`;
  }).join("");
}

function renderExerciseDetail() {
  const exercise = draftExercises.find((item) => item.id === activeExerciseId);
  if (!exercise) {
    closeExerciseDetail();
    return;
  }
  document.getElementById("exercise-detail-title").textContent = exercise.name;
  document.getElementById("exercise-detail-group").textContent = muscleGroupFor(exercise.name).toUpperCase();
  document.getElementById("exercise-detail-progress").textContent = `${exercise.sets.filter((set) => set.done).length} OF ${exercise.sets.length} SETS COMPLETE`;
  document.getElementById("detail-exercise-notes").value = exercise.notes || "";
  document.getElementById("set-editor-heading").textContent = editingSetIndex === null ? "ADD SET" : `EDIT SET ${editingSetIndex + 1}`;
  document.getElementById("save-detail-set").innerHTML = editingSetIndex === null ? "<span>＋</span> Save" : "<span>✓</span> Update";
  document.getElementById("clear-delete-set").textContent = editingSetIndex === null ? "Clear" : "Delete";
  document.getElementById("clear-delete-set").classList.toggle("is-delete", editingSetIndex !== null);
  document.querySelectorAll("[data-detail-input]").forEach((input) => {
    input.textContent = String(detailSetDraft[input.dataset.detailInput] ?? 0);
  });
  const container = document.getElementById("detail-set-list");
  const historicalExerciseSets = sessions.flatMap((session) => session.setDetails || [])
    .filter((savedExercise) => savedExercise.name === exercise.name)
    .flatMap((savedExercise) => savedExercise.sets);
  const priorBestWeight = Math.max(Number(personalRecords[exercise.name]) || 0, ...historicalExerciseSets.map((set) => Number(set.weight) || 0));
  const priorBestReps = Math.max(Number(personalRepRecords[exercise.name]) || 0, ...historicalExerciseSets.map((set) => Number(set.reps) || 0));
  const currentBestWeight = Math.max(0, ...exercise.sets.map((set) => Number(set.weight) || 0));
  const currentBestReps = Math.max(0, ...exercise.sets.map((set) => Number(set.reps) || 0));
  const bestRepsAtCurrentBestWeight = Math.max(0, ...exercise.sets
    .filter((set) => Number(set.weight) === currentBestWeight)
    .map((set) => Number(set.reps) || 0));
  const bestWeightAtCurrentBestReps = Math.max(0, ...exercise.sets
    .filter((set) => Number(set.reps) === currentBestReps)
    .map((set) => Number(set.weight) || 0));
  const newWeightRecordIndex = currentBestWeight > priorBestWeight
    ? exercise.sets.findIndex((set) => Number(set.weight) === currentBestWeight && Number(set.reps) === bestRepsAtCurrentBestWeight)
    : -1;
  const newRepRecordIndex = currentBestReps > priorBestReps
    ? exercise.sets.findIndex((set) => Number(set.reps) === currentBestReps && Number(set.weight) === bestWeightAtCurrentBestReps)
    : -1;
  container.innerHTML = exercise.sets.length ? exercise.sets.map((set, index) => {
    const isPersonalBest = index === newWeightRecordIndex || index === newRepRecordIndex;
    const trophy = isPersonalBest ? '<svg class="personal-best-trophy" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10v3h4v3c0 3.1-2.1 5.7-5 6.5-.7 1.1-1.8 1.9-3 2.3V21h5v2H6v-2h5v-3.2c-1.2-.4-2.3-1.2-3-2.3C5.1 14.7 3 12.1 3 9V6h4V3Zm-2 5v1c0 1.8 1 3.4 2.5 4.2A9 9 0 0 1 7 9V8H5Zm14 0h-2v1c0 1.5-.2 2.9-.5 4.2A4.8 4.8 0 0 0 19 9V8Z"/></svg>' : "";
    return `<div class="detail-set-row${set.done ? " is-complete" : ""}${editingSetIndex === index ? " is-selected" : ""}"><button class="set-note-button${set.notes ? " has-note" : ""}" data-set-note="${index}" type="button" aria-label="${set.notes ? "Edit" : "Add"} note for set ${index + 1}" title="${set.notes ? "Edit set note" : "Add set note"}">▤</button><span class="detail-set-index">${index + 1}</span><span class="personal-best-marker">${trophy}</span><button class="detail-set-edit" data-edit-set="${index}" type="button" aria-label="Tap to edit set ${index + 1}"><span class="detail-set-values"><span class="detail-set-weight-group"><strong class="detail-set-weight">${escapeHtml(set.weight)}</strong><small class="detail-set-unit">lbs</small></span><span class="detail-set-reps"><strong>${escapeHtml(set.reps)}</strong><small>reps</small></span></span></button></div>`;
  }).join("") : '<div class="empty-workout detail-empty"><strong>No sets yet.</strong>Enter weight and reps above, then save your first set.</div>';
  document.getElementById("workout-view").classList.add("detail-open");
  document.body.classList.add("exercise-focus");
  document.getElementById("workout-summary-panel").hidden = true;
  document.getElementById("exercise-detail-panel").hidden = false;
}

function openExerciseDetail(exerciseId) {
  activeExerciseId = exerciseId;
  editingSetIndex = null;
  detailSetDraft = { weight: 0, reps: 0 };
  renderExerciseDetail();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeExerciseDetail() {
  activeExerciseId = null;
  editingSetIndex = null;
  document.getElementById("exercise-detail-panel").hidden = true;
  document.getElementById("workout-summary-panel").hidden = false;
  document.getElementById("workout-view").classList.remove("detail-open");
  document.body.classList.remove("exercise-focus");
  renderDraftExercises();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function editExerciseSet(setIndex) {
  const exercise = draftExercises.find((item) => item.id === activeExerciseId);
  if (!exercise || !exercise.sets[setIndex]) return;
  editingSetIndex = setIndex;
  detailSetDraft = { weight: exercise.sets[setIndex].weight, reps: exercise.sets[setIndex].reps };
  renderExerciseDetail();
}

function saveExerciseSet() {
  const exercise = draftExercises.find((item) => item.id === activeExerciseId);
  if (!exercise) return;
  const weight = Number(detailSetDraft.weight);
  const reps = Number(detailSetDraft.reps);
  if (!Number.isFinite(weight) || !Number.isFinite(reps) || weight <= 0 || reps <= 0) {
    showToast("Weight and reps must both be greater than zero.");
    return;
  }
  const set = { weight, reps, done: true };
  if (editingSetIndex === null) {
    exercise.sets.push(set);
  } else {
    exercise.sets[editingSetIndex] = { ...exercise.sets[editingSetIndex], ...set };
  }
  exercise.completed = exercise.sets.length > 0 && exercise.sets.every((item) => item.done);
  editingSetIndex = null;
  renderExerciseDetail();
}

function clearOrDeleteExerciseSet() {
  if (editingSetIndex === null) {
    detailSetDraft = { weight: 0, reps: 0 };
    renderExerciseDetail();
    return;
  }
  const exercise = draftExercises.find((item) => item.id === activeExerciseId);
  if (!exercise) return;
  exercise.sets.splice(editingSetIndex, 1);
  editingSetIndex = null;
  detailSetDraft = { weight: 0, reps: 0 };
  renderExerciseDetail();
}

function openNumberPad(input) {
  numberPadTarget = input;
  const dialog = document.getElementById("number-pad-dialog");
  const display = document.getElementById("number-pad-display");
  display.value = input.value || input.textContent || "0";
  display.dataset.allowDecimal = String(input.dataset.detailInput === "weight" || input.dataset.setField === "weight");
  dialog.showModal();
}

function openSetNote(index) {
  const exercise = draftExercises.find((item) => item.id === activeExerciseId);
  if (!exercise?.sets[index]) return;
  activeNoteSetIndex = index;
  document.getElementById("set-note-title").textContent = `Set ${index + 1}`;
  document.getElementById("set-note-text").value = exercise.sets[index].notes || "";
  document.getElementById("set-note-dialog").showModal();
}

function saveSetNote() {
  const exercise = draftExercises.find((item) => item.id === activeExerciseId);
  if (exercise?.sets[activeNoteSetIndex]) exercise.sets[activeNoteSetIndex].notes = document.getElementById("set-note-text").value.trim();
  activeNoteSetIndex = null;
  document.getElementById("set-note-dialog").close();
  renderExerciseDetail();
}

function renderExerciseGrouping() {
  const { phase } = getSelectedSplitSession();
  document.getElementById("grouping-day-label").textContent = `${phase.title.toUpperCase()} · ${draftExercises.length} EXERCISES`;
  const selected = draftExercises.filter((exercise) => selectedGroupExerciseIds.has(exercise.id));
  const sameGroup = selected.length > 1 && selected.every((exercise) => exercise.supersetId && exercise.supersetId === selected[0].supersetId);
  document.getElementById("link-selected-exercises").textContent = sameGroup ? "Unlink selected" : "↗ Link selected";
  document.getElementById("link-selected-exercises").disabled = selected.length < 2;
  document.getElementById("delete-selected-exercises").disabled = selected.length === 0;
  const incomplete = draftExercises.filter((exercise) => !exercise.completed);
  const completed = draftExercises.filter((exercise) => exercise.completed);
  const renderRow = (exercise, index) => {
    const group = exercise.supersetId ? `${SUPERSET_COLORS[Math.max(0, [...new Set(draftExercises.map((item) => item.supersetId).filter(Boolean))].indexOf(exercise.supersetId)) % SUPERSET_COLORS.length]}` : "";
    return `<article class="grouping-exercise-row${exercise.completed ? " completed" : ""}" data-grouping-id="${escapeHtml(exercise.id)}" ${group ? `style="--superset-color:${group}"` : ""}><button class="grouping-order-button" data-group-move="up" data-group-id="${escapeHtml(exercise.id)}" type="button" aria-label="Move ${escapeHtml(exercise.name)} up" ${index === 0 ? "disabled" : ""}>↑</button><button class="grouping-order-button" data-group-move="down" data-group-id="${escapeHtml(exercise.id)}" type="button" aria-label="Move ${escapeHtml(exercise.name)} down" ${index === draftExercises.length - 1 ? "disabled" : ""}>↓</button><button class="grouping-drag-handle" data-group-drag="true" draggable="true" type="button" aria-label="Drag to reorder ${escapeHtml(exercise.name)}">⠿</button><label class="grouping-link-check" title="Select to link as a superset"><input data-group-select="${escapeHtml(exercise.id)}" type="checkbox" ${selectedGroupExerciseIds.has(exercise.id) ? "checked" : ""} aria-label="Select ${escapeHtml(exercise.name)} to link" /><span></span></label><span class="grouping-exercise-name">${escapeHtml(exercise.name)}${exercise.supersetId ? '<small>LINKED</small>' : ""}</span><label class="grouping-complete-check" title="Mark exercise complete"><input data-group-complete="${escapeHtml(exercise.id)}" type="checkbox" ${exercise.completed ? "checked" : ""} aria-label="Mark ${escapeHtml(exercise.name)} complete" /><span>✓</span></label><button class="grouping-trash-item" data-group-delete="${escapeHtml(exercise.id)}" type="button" aria-label="Delete ${escapeHtml(exercise.name)}">🗑</button></article>`;
  };
  const list = document.getElementById("exercise-group-list");
  list.innerHTML = `${incomplete.length ? `<div class="grouping-section-label">IN PROGRESS</div>${incomplete.map((exercise) => renderRow(exercise, draftExercises.indexOf(exercise))).join("")}` : ""}${completed.length ? `<div class="grouping-section-label completed-label">COMPLETED</div>${completed.map((exercise) => renderRow(exercise, draftExercises.indexOf(exercise))).join("")}` : ""}${draftExercises.length ? "" : '<div class="empty-workout"><strong>No exercises in this workout.</strong></div>'}`;
}

function openExerciseGrouping() {
  selectedGroupExerciseIds = new Set();
  renderExerciseGrouping();
  document.getElementById("exercise-group-dialog").showModal();
}

function linkSelectedExercises() {
  const selected = draftExercises.filter((exercise) => selectedGroupExerciseIds.has(exercise.id));
  if (selected.length < 2) return;
  const existingGroups = new Set(selected.map((exercise) => exercise.supersetId).filter(Boolean));
  const unlink = existingGroups.size === 1 && selected.every((exercise) => exercise.supersetId);
  const supersetId = unlink ? null : `superset-${Date.now()}-${Math.random()}`;
  selected.forEach((exercise) => {
    if (supersetId) exercise.supersetId = supersetId;
    else delete exercise.supersetId;
  });
  selectedGroupExerciseIds.clear();
  renderExerciseGrouping();
  renderDraftExercises();
}

function deleteSelectedExercises() {
  if (!selectedGroupExerciseIds.size) return;
  const deleted = selectedGroupExerciseIds;
  draftExercises = draftExercises.filter((exercise) => !deleted.has(exercise.id));
  if (deleted.has(activeExerciseId)) closeExerciseDetail();
  selectedGroupExerciseIds = new Set();
  renderExerciseGrouping();
  renderDraftExercises();
}

function setExerciseCompleted(exerciseId, completed) {
  const exercise = draftExercises.find((item) => item.id === exerciseId);
  if (!exercise) return;
  exercise.completed = completed;
  exercise.sets.forEach((set) => { set.done = completed; });
  renderExerciseGrouping();
  renderDraftExercises();
  if (activeExerciseId === exerciseId) renderExerciseDetail();
}

function moveGroupedExercise(exerciseId, direction) {
  const index = draftExercises.findIndex((exercise) => exercise.id === exerciseId);
  const targetIndex = index + direction;
  if (index < 0 || targetIndex < 0 || targetIndex >= draftExercises.length) return;
  [draftExercises[index], draftExercises[targetIndex]] = [draftExercises[targetIndex], draftExercises[index]];
  renderExerciseGrouping();
  renderDraftExercises();
}

function updateSupersetPair(exerciseId) {
  if (!draftExercises.some((exercise) => exercise.id === exerciseId)) return;
  openExerciseGrouping();
}

function moveExercise(draggedId, targetId) {
  if (!draggedId || !targetId || draggedId === targetId) return;
  const fromIndex = draftExercises.findIndex((exercise) => exercise.id === draggedId);
  const targetIndex = draftExercises.findIndex((exercise) => exercise.id === targetId);
  if (fromIndex < 0 || targetIndex < 0) return;
  const [exercise] = draftExercises.splice(fromIndex, 1);
  draftExercises.splice(targetIndex, 0, exercise);
  renderDraftExercises();
}

function addExercise(name) {
  if (!name) return;
  if (draftExercises.some((exercise) => exercise.name === name)) {
    showToast("That exercise is already in this workout.");
    return;
  }
  draftExercises.push({ id: crypto.randomUUID ? crypto.randomUUID() : `exercise-${Date.now()}-${Math.random()}`, name, notes: "", sets: [] });
  document.getElementById("exercise-select").value = "";
  renderDraftExercises();
}

function finishWorkout() {
  const completed = draftExercises.map((exercise) => ({ ...exercise, sets: exercise.sets.filter((set) => set.done && Number(set.weight) > 0 && Number(set.reps) > 0) })).filter((exercise) => exercise.sets.length);
  if (!completed.length) {
    showToast("Mark at least one completed set before finishing.");
    return;
  }
  const details = completed.map((exercise) => ({ name: exercise.name, notes: exercise.notes, supersetId: exercise.supersetId, completed: exercise.completed, sets: exercise.sets.map(({ weight, reps, notes }) => ({ weight: Number(weight) || 0, reps: Number(reps) || 0, notes: notes || "" })) }));
  const volume = details.reduce((total, exercise) => total + exercise.sets.reduce((exerciseTotal, set) => exerciseTotal + set.weight * set.reps, 0), 0);
  const duration = Math.max(1, Math.round((Date.now() - workoutStartedAt) / 60000));
  const personalRecordUpdates = [];
  const personalRecordEvents = [];
  for (const exercise of details) {
    const best = Math.max(...exercise.sets.map((set) => set.weight));
    if (best > 0 && best > (personalRecords[exercise.name] || 0)) {
      personalRecords[exercise.name] = best;
      personalRecordDates[exercise.name] = isoDate(today);
      personalRecordUpdates.push(`${exercise.name}: ${best} lb`);
      personalRecordEvents.push({ exercise: exercise.name, recordType: "weight", value: best });
    }
    const bestReps = Math.max(...exercise.sets.map((set) => set.reps));
    if (bestReps > 0 && bestReps > (personalRepRecords[exercise.name] || 0)) {
      personalRepRecords[exercise.name] = bestReps;
      personalRecordUpdates.push(`${exercise.name}: ${bestReps} reps`);
      personalRecordEvents.push({ exercise: exercise.name, recordType: "reps", value: bestReps });
    }
  }
  const { phase } = getSelectedSplitSession();
  const workoutSession = { id: `session-${Date.now()}`, date: isoDate(today), name: document.getElementById("workout-name").value.trim() || phase.title, duration, exercises: completed.map((exercise) => exercise.name), volume: Math.round(volume), weightUnit: "lb", sets: details.reduce((total, exercise) => total + exercise.sets.length, 0), notes: completed.map((exercise) => exercise.notes).filter(Boolean).join(" · "), splitId: selectedSplitId, programDay: phase.id, setDetails: details };
  sessions.push(workoutSession);
  saveData().then(async () => {
    if (personalRecordEvents.length) await accountRequest("/api/activity/prs", { method: "POST", body: { workoutId: workoutSession.id, prs: personalRecordEvents } });
    await refreshCommunityActivity();
  }).catch(() => showToast("Workout saved, but its community activity could not be posted."));
  selectedWorkoutPhaseId = getNextSplitSession().phase.id;
  draftExercises = [];
  activeExerciseId = null;
  workoutStartedAt = Date.now();
  document.getElementById("workout-name").value = suggestedWorkoutName;
  document.getElementById("exercise-detail-panel").hidden = true;
  document.getElementById("workout-summary-panel").hidden = false;
  document.getElementById("workout-view").classList.remove("detail-open");
  document.body.classList.remove("exercise-focus");
  renderDraftExercises();
  renderDashboard();
  renderNavigation("dashboard");
  showToast(personalRecordUpdates.length ? `Workout saved · New record: ${personalRecordUpdates[0]}` : "Workout saved. Nice work.");
}

function renderLibrary() {
  const query = document.getElementById("exercise-search").value.trim().toLowerCase();
  const group = document.getElementById("muscle-filter").value;
  const allNames = new Set([...EXERCISES.map((exercise) => exercise.name), ...sessions.flatMap((session) => session.exercises)]);
  const recommended = new Set(getSelectedSplitSession().phase.exercises);
  const exercises = [...allNames].map((name) => ({ name, group: muscleGroupFor(name), type: exerciseType(name), record: personalRecords[name] }))
    .filter((exercise) => exercise.name.toLowerCase().includes(query) && (group === "all" || exercise.group === group))
    .sort((first, second) => Number(recommended.has(second.name)) - Number(recommended.has(first.name)) || first.name.localeCompare(second.name));
  document.getElementById("exercise-count").textContent = `${exercises.length} MOVEMENTS`;
  document.getElementById("exercise-library").innerHTML = exercises.length ? exercises.map((exercise) => {
    const initials = exercise.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    const recent = [...sessions].reverse().find((session) => session.exercises.includes(exercise.name));
    return `<article class="library-exercise${recommended.has(exercise.name) ? " is-recommended" : ""}"><span class="exercise-initial">${initials}</span><div class="library-exercise-info"><strong>${escapeHtml(exercise.name)}</strong><span>${escapeHtml(exercise.group.toUpperCase())} · ${escapeHtml(exercise.type.toUpperCase())}${exercise.record ? ` · PR ${exercise.record} LB` : ""}</span></div>${recommended.has(exercise.name) ? '<span class="exercise-match">UP NEXT</span>' : ""}<span class="exercise-last">${recent ? formatDate(new Date(`${recent.date}T12:00:00`)).toUpperCase() : "NOT LOGGED"}</span></article>`;
  }).join("") : '<div class="no-results">No exercises match that search.</div>';
}

function refreshDateLabels() {
  document.getElementById("today-label").textContent = formatDate(today, { weekday: "short", month: "short", day: "numeric" }).toUpperCase();
  document.getElementById("workout-date-label").textContent = formatDate(today, { weekday: "long", month: "long", day: "numeric" });
  document.getElementById("footer-year").textContent = String(today.getFullYear());
}

let workoutStartedAt = Date.now();
for (const eventName of ["pointerdown", "pointermove", "keydown", "touchstart", "wheel", "scroll"]) {
  window.addEventListener(eventName, recordUserActivity, { passive: true });
}
window.addEventListener("focus", scheduleIdleLogout);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") scheduleIdleLogout();
});
document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => renderNavigation(button.dataset.view)));
document.querySelectorAll("[data-open-view]").forEach((button) => button.addEventListener("click", () => renderNavigation(button.dataset.openView)));
document.getElementById("mobile-menu-open").addEventListener("click", openMobileMenu);
document.getElementById("mobile-menu-open").addEventListener("pointerup", (event) => {
  if (event.pointerType === "touch") openMobileMenu();
});
document.getElementById("mobile-menu-open").addEventListener("touchend", openMobileMenu, { passive: true });
document.getElementById("sidebar-close").addEventListener("click", () => {
  closeMobileMenu();
  document.getElementById("mobile-menu-open").focus();
});
document.getElementById("sidebar-backdrop").addEventListener("click", () => {
  closeMobileMenu();
  document.getElementById("mobile-menu-open").focus();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("mobile-menu-open")) {
    closeMobileMenu();
    document.getElementById("mobile-menu-open").focus();
  }
});
document.querySelectorAll(".split-option").forEach((button) => button.addEventListener("click", () => selectTrainingSplit(button.dataset.split)));
document.getElementById("start-suggested-session").addEventListener("click", loadSuggestedWorkout);
document.getElementById("load-split-suggestion").addEventListener("click", loadSuggestedWorkout);
document.getElementById("load-last-split-workout").addEventListener("click", loadLastMatchingWorkout);
document.getElementById("recent-workout-select").addEventListener("change", (event) => {
  const sessionId = event.target.value;
  if (!sessionId) return;
  const previousWorkout = sessions.find((session) => String(session.id) === sessionId);
  event.target.value = "";
  if (previousWorkout) loadPreviousWorkout(previousWorkout);
});
document.getElementById("exercise-detail-back").addEventListener("click", closeExerciseDetail);
document.getElementById("save-detail-set").addEventListener("click", saveExerciseSet);
document.getElementById("clear-delete-set").addEventListener("click", clearOrDeleteExerciseSet);
document.getElementById("save-set-note").addEventListener("click", saveSetNote);
document.getElementById("set-note-dialog").addEventListener("close", () => { activeNoteSetIndex = null; });
document.getElementById("close-exercise-groups").addEventListener("click", () => document.getElementById("exercise-group-dialog").close());
document.getElementById("done-exercise-groups").addEventListener("click", () => document.getElementById("exercise-group-dialog").close());
document.getElementById("link-selected-exercises").addEventListener("click", linkSelectedExercises);
document.getElementById("delete-selected-exercises").addEventListener("click", deleteSelectedExercises);
document.getElementById("detail-exercise-notes").addEventListener("input", (event) => {
  const exercise = draftExercises.find((item) => item.id === activeExerciseId);
  if (exercise) exercise.notes = event.target.value;
});
document.getElementById("number-pad-close").addEventListener("click", () => document.getElementById("number-pad-dialog").close());
document.getElementById("exercise-detail-panel").addEventListener("input", (event) => {
  const field = event.target.dataset.detailInput;
  if (field) detailSetDraft[field] = event.target.value;
  const completion = event.target.dataset.detailDone;
  if (completion !== undefined) {
    const exercise = draftExercises.find((item) => item.id === activeExerciseId);
    if (exercise?.sets[Number(completion)]) {
      exercise.sets[Number(completion)].done = event.target.checked;
      exercise.completed = exercise.sets.length > 0 && exercise.sets.every((set) => set.done);
      renderExerciseDetail();
    }
  }
});
document.getElementById("exercise-group-dialog").addEventListener("change", (event) => {
  if (event.target.matches("[data-group-select]")) {
    const id = event.target.dataset.groupSelect;
    if (event.target.checked) selectedGroupExerciseIds.add(id);
    else selectedGroupExerciseIds.delete(id);
    renderExerciseGrouping();
    return;
  }
  if (event.target.matches("[data-group-complete]")) setExerciseCompleted(event.target.dataset.groupComplete, event.target.checked);
});
document.getElementById("exercise-group-dialog").addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-group-delete]");
  if (deleteButton) {
    selectedGroupExerciseIds = new Set([deleteButton.dataset.groupDelete]);
    deleteSelectedExercises();
    return;
  }
  const orderButton = event.target.closest("[data-group-move]");
  if (orderButton) moveGroupedExercise(orderButton.dataset.groupId, orderButton.dataset.groupMove === "up" ? -1 : 1);
});
document.getElementById("exercise-group-dialog").addEventListener("dragstart", (event) => {
  const handle = event.target.closest("[data-group-drag]");
  const row = handle?.closest("[data-grouping-id]");
  if (!row) { event.preventDefault(); return; }
  activeDragExerciseId = row.dataset.groupingId;
  if (event.dataTransfer) { event.dataTransfer.effectAllowed = "move"; event.dataTransfer.setData("text/plain", activeDragExerciseId); }
});
document.getElementById("exercise-group-dialog").addEventListener("dragover", (event) => { if (event.target.closest("[data-grouping-id]")) event.preventDefault(); });
document.getElementById("exercise-group-dialog").addEventListener("drop", (event) => {
  const target = event.target.closest("[data-grouping-id]");
  if (!target || !activeDragExerciseId) return;
  event.preventDefault();
  moveExercise(activeDragExerciseId, target.dataset.groupingId);
  activeDragExerciseId = null;
  renderExerciseGrouping();
});
document.getElementById("exercise-detail-panel").addEventListener("click", (event) => {
  const noteButton = event.target.closest("[data-set-note]");
  if (noteButton) {
    openSetNote(Number(noteButton.dataset.setNote));
    return;
  }
  const editButton = event.target.closest("[data-edit-set]");
  if (editButton) {
    editExerciseSet(Number(editButton.dataset.editSet));
    return;
  }
  const numericInput = event.target.closest("[data-detail-input]");
  if (numericInput) {
    openNumberPad(numericInput);
    return;
  }
  const stepButton = event.target.closest("[data-detail-step]");
  if (stepButton) {
    const field = stepButton.dataset.detailStep;
    detailSetDraft[field] = Math.max(0, (Number(detailSetDraft[field]) || 0) + Number(stepButton.dataset.delta));
    renderExerciseDetail();
  }
});
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
  try { localStorage.setItem("repwise-light", String(document.body.classList.contains("light"))); } catch { /* Theme still works for this visit. */ }
});
document.getElementById("add-exercise").addEventListener("click", () => addExercise(document.getElementById("exercise-select").value));
document.getElementById("exercise-select").addEventListener("change", (event) => { if (event.target.value) addExercise(event.target.value); });
document.getElementById("workout-day").addEventListener("change", (event) => {
  selectedWorkoutPhaseId = event.target.value;
  renderSplitUI();
  renderDraftExercises();
  if (document.getElementById("exercises-view").classList.contains("active")) renderLibrary();
});
document.getElementById("quick-start-day").addEventListener("change", (event) => {
  selectedWorkoutPhaseId = event.target.value;
  renderSplitUI();
  renderDraftExercises();
});
document.getElementById("save-custom-exercise").addEventListener("click", saveCustomExercise);
document.getElementById("custom-exercise-name").addEventListener("keydown", (event) => {
  if (event.key === "Enter") { event.preventDefault(); saveCustomExercise(); }
});
document.getElementById("workout-name").addEventListener("input", () => { suggestedWorkoutName = ""; });
document.getElementById("save-workout").addEventListener("click", finishWorkout);
document.getElementById("history-filter").addEventListener("change", renderHistory);
document.getElementById("exercise-search").addEventListener("input", renderLibrary);
document.getElementById("muscle-filter").addEventListener("change", renderLibrary);
document.getElementById("feedback-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const values = new FormData(form);
  const status = document.getElementById("feedback-status");
  const submitButton = form.querySelector('[type="submit"]');
  submitButton.disabled = true;
  status.textContent = "Sending feedback…";
  try {
    await accountRequest("/api/feedback", {
      method: "POST",
      body: { category: values.get("feedback-category"), message: values.get("message") },
    });
    form.reset();
    status.textContent = "Thanks. Kenny and the admins (The AI robots that built this shit) have been notified.";
    await loadFeedbackView();
  } catch (error) {
    status.textContent = error.message || "Could not send feedback.";
  } finally {
    submitButton.disabled = false;
  }
});
document.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-exercise]");
  if (removeButton) {
    draftExercises = draftExercises.filter((exercise) => exercise.id !== removeButton.dataset.removeExercise);
    renderDraftExercises();
    return;
  }
  const addSetButton = event.target.closest("[data-add-set]");
  if (addSetButton) {
    const exercise = draftExercises.find((item) => item.id === addSetButton.dataset.addSet);
    if (exercise) exercise.sets.push({ weight: 0, reps: 0, done: false });
    renderDraftExercises();
    return;
  }
  const supersetButton = event.target.closest("[data-superset-toggle]");
  if (supersetButton) {
    updateSupersetPair(supersetButton.dataset.supersetToggle);
    return;
  }
  const exerciseButton = event.target.closest("[data-open-exercise]");
  if (exerciseButton && exerciseHoldTriggered) {
    event.preventDefault();
    exerciseHoldTriggered = false;
    return;
  }
  if (exerciseButton) openExerciseDetail(exerciseButton.dataset.openExercise);
});
document.getElementById("workout-exercises").addEventListener("pointerdown", (event) => {
  const exerciseButton = event.target.closest("[data-open-exercise]");
  if (!exerciseButton || event.pointerType === "mouse") return;
  exerciseHoldTriggered = false;
  exerciseHoldTimer = window.setTimeout(() => {
    exerciseHoldTriggered = true;
    openExerciseGrouping();
  }, 550);
});
for (const eventName of ["pointerup", "pointercancel", "pointerleave"]) {
  document.getElementById("workout-exercises").addEventListener(eventName, () => window.clearTimeout(exerciseHoldTimer));
}
document.getElementById("workout-exercises").addEventListener("dragstart", (event) => {
  if (!event.target.closest("[data-drag-handle]")) { event.preventDefault(); return; }
  const card = event.target.closest("[data-exercise-id]");
  activeDragExerciseId = card?.dataset.exerciseId || null;
  if (event.dataTransfer) { event.dataTransfer.effectAllowed = "move"; event.dataTransfer.setData("text/plain", activeDragExerciseId || ""); }
  card?.classList.add("is-dragging");
});
document.getElementById("workout-exercises").addEventListener("dragover", (event) => { if (event.target.closest("[data-exercise-id]")) event.preventDefault(); });
document.getElementById("workout-exercises").addEventListener("drop", (event) => {
  const target = event.target.closest("[data-exercise-id]");
  if (!target || !activeDragExerciseId) return;
  event.preventDefault();
  moveExercise(activeDragExerciseId, target.dataset.exerciseId);
  activeDragExerciseId = null;
});
document.getElementById("workout-exercises").addEventListener("dragend", () => {
  activeDragExerciseId = null;
  document.querySelectorAll(".exercise-summary-row.is-dragging").forEach((card) => card.classList.remove("is-dragging"));
});
document.getElementById("number-pad").addEventListener("click", (event) => {
  const key = event.target.closest("[data-keypad-key]");
  if (!key) return;
  const display = document.getElementById("number-pad-display");
  const action = key.dataset.keypadKey;
  if (action === "clear") display.value = "0";
  else if (action === "backspace") display.value = display.value.length > 1 ? display.value.slice(0, -1) : "0";
  else if (action === "decimal") { if (display.dataset.allowDecimal === "true" && !display.value.includes(".")) display.value += "."; }
  else if (action === "done") {
    const value = Number(display.value);
    if (!Number.isFinite(value) || value < 0 || !numberPadTarget) { showToast("Enter a valid number."); return; }
    numberPadTarget.value = String(value);
    if (numberPadTarget.dataset.detailInput) numberPadTarget.textContent = String(value);
    numberPadTarget.dispatchEvent(new Event("input", { bubbles: true }));
    document.getElementById("number-pad-dialog").close();
    numberPadTarget = null;
  } else display.value = display.value === "0" ? action : display.value + action;
});
document.getElementById("number-pad-dialog").addEventListener("close", () => { numberPadTarget = null; });
document.querySelectorAll("[data-auth-mode]").forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});
document.getElementById("open-recovery").addEventListener("click", () => {
  document.getElementById("recovery-username").value = document.getElementById("login-username").value;
  setAuthMode("recover");
});
document.getElementById("login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const values = new FormData(form);
  try {
    setAuthMessage("Signing in…", "pending");
    const result = await accountRequest("/api/login", { method: "POST", body: { username: values.get("username"), password: values.get("password") } });
    await activateAccount(result.user, await accountRequest("/api/data"));
    form.reset();
  } catch (error) {
    setAuthMessage(error.message);
  }
});
document.getElementById("register-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const questionIds = [1, 2, 3].map((index) => document.getElementById(`recovery-question-${index}`).value);
  if (new Set(questionIds).size !== 3) {
    setAuthMessage("Choose three different recovery questions.");
    return;
  }
  const values = new FormData(form);
  const body = {
    username: values.get("username"),
    password: values.get("password"),
    recovery: questionIds.map((questionId, index) => ({ questionId, answer: document.getElementById(`recovery-answer-${index + 1}`).value })),
  };
  try {
    setAuthMessage("Creating your account…", "pending");
    const result = await accountRequest("/api/register", { method: "POST", body });
    if (result.firstUser && hasLegacyAccountData()) {
      try { await accountRequest("/api/data", { method: "PUT", body: legacyAccountData() }); }
      catch { setAuthMessage("Account created, but this browser’s existing workouts could not be imported."); }
    }
    const data = await accountRequest("/api/data");
    await activateAccount(result.user, data);
    form.reset();
  } catch (error) {
    setAuthMessage(error.message);
  }
});
document.getElementById("load-recovery-questions").addEventListener("click", async () => {
  const username = document.getElementById("recovery-username").value.trim();
  if (!username) {
    setAuthMessage("Enter your username first.");
    return;
  }
  const fields = document.getElementById("recovery-question-fields");
  const resetFields = document.getElementById("recovery-reset-fields");
  try {
    setAuthMessage("Loading recovery questions…", "pending");
    const result = await accountRequest(`/api/recovery-questions?username=${encodeURIComponent(username)}`);
    if (!result.questions.length) throw new Error("No recovery questions found for that username.");
    fields.innerHTML = result.questions.map((question) => `<label class="field-label">${escapeHtml(question.label)}<input data-recovery-answer="${escapeHtml(question.id)}" autocomplete="off" minlength="2" maxlength="120" required /></label>`).join("");
    fields.hidden = false;
    resetFields.hidden = false;
    document.getElementById("load-recovery-questions").hidden = true;
    setAuthMessage();
  } catch (error) {
    fields.hidden = true;
    resetFields.hidden = true;
    setAuthMessage(error.message);
  }
});
document.getElementById("recovery-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const answers = [...document.querySelectorAll("[data-recovery-answer]")].map((input) => ({ questionId: input.dataset.recoveryAnswer, answer: input.value }));
  try {
    setAuthMessage("Checking recovery answers…", "pending");
    const result = await accountRequest("/api/recover", {
      method: "POST",
      body: { username: document.getElementById("recovery-username").value, answers, newPassword: document.getElementById("new-password").value },
    });
    await activateAccount(result.user, await accountRequest("/api/data"));
    event.currentTarget.reset();
  } catch (error) {
    setAuthMessage(error.message);
  }
});
async function signOut(message = "") {
  currentUser = null;
  window.clearTimeout(idleLogoutTimer);
  idleLogoutTimer = null;
  try { await accountRequest("/api/logout", { method: "POST", body: {} }); } catch { /* Clear the local view even when the server is offline. */ }
  if (communityRefreshTimer) window.clearInterval(communityRefreshTimer);
  communityRefreshTimer = null;
  if (feedbackAlertTimer) window.clearInterval(feedbackAlertTimer);
  feedbackAlertTimer = null;
  feedbackAlertCursor = 0;
  draftExercises = [];
  document.getElementById("app-shell").hidden = true;
  document.querySelector(".mobile-nav").hidden = true;
  document.body.classList.remove("authenticated");
  setAuthMode("login");
  if (message) showToast(message);
}
document.getElementById("logout-button").addEventListener("click", signOut);
document.getElementById("logout-sidebar").addEventListener("click", signOut);
document.getElementById("top-avatar").addEventListener("click", () => {
  updateProfileAvatarUI();
  document.getElementById("profile-photo-dialog").showModal();
});
document.getElementById("close-profile-photo").addEventListener("click", () => document.getElementById("profile-photo-dialog").close());
document.getElementById("profile-photo-input").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (file) uploadAvatarFile(file);
  event.target.value = "";
});
document.getElementById("remove-profile-photo").addEventListener("click", () => removeAvatar());
document.getElementById("open-admin-photo-manager").addEventListener("click", async () => {
  document.getElementById("profile-photo-dialog").close();
  document.getElementById("admin-avatar-status").textContent = "";
  await renderAdminAvatarUsers();
  document.getElementById("admin-avatar-dialog").showModal();
});
document.getElementById("close-admin-avatar-dialog").addEventListener("click", () => document.getElementById("admin-avatar-dialog").close());
document.getElementById("admin-avatar-list").addEventListener("change", (event) => {
  const input = event.target.closest("[data-admin-avatar-upload]");
  const file = input?.files?.[0];
  if (file) uploadAvatarFile(file, Number(input.dataset.adminAvatarUpload));
  if (input) input.value = "";
});
document.getElementById("admin-avatar-list").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-admin-avatar-remove]");
  if (removeButton && !removeButton.disabled) removeAvatar(Number(removeButton.dataset.adminAvatarRemove));
  const deletePasswordButton = event.target.closest("[data-admin-password-delete]");
  if (deletePasswordButton && !deletePasswordButton.disabled) deleteAdminMemberPassword(Number(deletePasswordButton.dataset.adminPasswordDelete));
  const accountButton = event.target.closest("[data-admin-account-action]");
  if (accountButton && !accountButton.disabled) toggleAdminMemberAccount(Number(accountButton.dataset.adminAccountId), accountButton.dataset.adminAccountAction);
});
document.getElementById("workout-calendar-open").addEventListener("click", () => {
  document.getElementById("workout-calendar-search").value = "";
  document.getElementById("workout-calendar-month").value = isoDate(today).slice(0, 7);
  selectedCalendarDate = null;
  renderWorkoutCalendar();
  document.getElementById("workout-calendar-dialog").showModal();
});
document.getElementById("workout-calendar-close").addEventListener("click", () => document.getElementById("workout-calendar-dialog").close());
document.getElementById("workout-calendar-dialog").addEventListener("close", () => setCalendarCopyMode(null));
document.getElementById("calendar-copy-cancel").addEventListener("click", () => {
  setCalendarCopyMode(null);
  renderWorkoutCalendar();
});
document.getElementById("workout-calendar-search").addEventListener("input", () => {
  selectedCalendarDate = null;
  renderWorkoutCalendar();
});
document.getElementById("workout-calendar-month").addEventListener("change", () => {
  if (!pendingCalendarCopy) selectedCalendarDate = null;
  renderWorkoutCalendar();
});
document.getElementById("calendar-day-back").addEventListener("click", () => {
  selectedCalendarDate = null;
  renderWorkoutCalendar();
  document.querySelector(".workout-calendar-shell").scrollTop = 0;
});
document.getElementById("workout-calendar-grid").addEventListener("click", (event) => {
  const day = event.target.closest("[data-calendar-date]");
  if (!day || day.disabled) return;
  if (pendingCalendarCopy) {
    copyWorkoutToDate(day.dataset.calendarDate);
    return;
  }
  selectedCalendarDate = day.dataset.calendarDate;
  renderWorkoutCalendar();
  document.querySelector(".workout-calendar-shell").scrollTop = 0;
});
document.getElementById("workout-calendar-results").addEventListener("change", (event) => {
  const block = event.target.closest("[data-copy-exercise-index]");
  if (!block) return;
  const exerciseBox = block.querySelector("[data-copy-exercise]");
  const setBoxes = [...block.querySelectorAll("[data-copy-set]")];
  if (event.target === exerciseBox) setBoxes.forEach((box) => { box.checked = exerciseBox.checked; });
  else if (setBoxes.length) exerciseBox.checked = setBoxes.some((box) => box.checked);
});
document.getElementById("workout-calendar-results").addEventListener("click", (event) => {
  const copyButton = event.target.closest("[data-calendar-copy]");
  if (copyButton) {
    startCalendarCopy(copyButton.closest("[data-copy-session]"));
    return;
  }
  const loadButton = event.target.closest("[data-calendar-load]");
  if (!loadButton) return;
  const previousWorkout = sessions.find((session) => String(session.id) === loadButton.dataset.calendarLoad);
  document.getElementById("workout-calendar-dialog").close();
  if (previousWorkout) loadPreviousWorkout(previousWorkout);
});
document.addEventListener("click", (event) => {
  const likeButton = event.target.closest("[data-like-event]");
  if (likeButton) toggleActivityLike(Number(likeButton.dataset.likeEvent));
});
populateExerciseOptions();
refreshDateLabels();
renderSplitUI();
renderDashboard();
renderDraftExercises();
try { if (localStorage.getItem("repwise-light") === "true") document.body.classList.add("light"); } catch { /* Private browsing can disable storage. */ }
initializeAccountPortal();
