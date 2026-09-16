import { laterDate, shiftDayKey, todayKey } from "@/lib/dates";

export const PROGRESS_STORAGE_KEY = "languagepath.progress.v1";
export const PATH_STARTING_DAYS = 80;

export const XP = {
  built: 10,
  spoken: 5,
  pathClean: 25,
  lessonComplete: 20,
} as const;

export type Progress = {
  version: 1;
  intensiveMode: boolean;
  streakCount: number;
  lastStreakDate: string | null;
  xp: number;
  sentencesBuilt: number;
  sentencesSpoken: number;
  completedLessonIds: string[];
  completedStepKeys: string[];
  spokenStepKeys: string[];
  pathCityIndex: number;
  pathDaysRemaining: number;
  pathMisses: number;
  lastCourseId: string;
};

export const defaultProgress = (): Progress => ({
  version: 1,
  intensiveMode: false,
  streakCount: 0,
  lastStreakDate: null,
  xp: 0,
  sentencesBuilt: 0,
  sentencesSpoken: 0,
  completedLessonIds: [],
  completedStepKeys: [],
  spokenStepKeys: [],
  pathCityIndex: 0,
  pathDaysRemaining: PATH_STARTING_DAYS,
  pathMisses: 0,
  lastCourseId: "es",
});

export function parseProgress(value: unknown): Progress {
  const base = defaultProgress();
  if (!value || typeof value !== "object") return base;
  const raw = value as Partial<Progress>;
  return {
    ...base,
    intensiveMode: Boolean(raw.intensiveMode),
    streakCount: Number(raw.streakCount) || 0,
    lastStreakDate: raw.lastStreakDate ?? null,
    xp: Number(raw.xp) || 0,
    sentencesBuilt: Number(raw.sentencesBuilt) || 0,
    sentencesSpoken: Number(raw.sentencesSpoken) || 0,
    completedLessonIds: Array.isArray(raw.completedLessonIds)
      ? raw.completedLessonIds.filter((id) => typeof id === "string")
      : [],
    completedStepKeys: Array.isArray(raw.completedStepKeys)
      ? raw.completedStepKeys.filter((id) => typeof id === "string")
      : [],
    spokenStepKeys: Array.isArray(raw.spokenStepKeys)
      ? raw.spokenStepKeys.filter((id) => typeof id === "string")
      : [],
    pathCityIndex: Number(raw.pathCityIndex) || 0,
    pathDaysRemaining:
      typeof raw.pathDaysRemaining === "number"
        ? raw.pathDaysRemaining
        : PATH_STARTING_DAYS,
    pathMisses: Number(raw.pathMisses) || 0,
    lastCourseId:
      typeof raw.lastCourseId === "string" && raw.lastCourseId
        ? raw.lastCourseId
        : "es",
  };
}

export function applyStreak(progress: Progress, now = new Date()): Progress {
  const today = todayKey(now);
  if (progress.lastStreakDate === today) return progress;
  const continued = progress.lastStreakDate === shiftDayKey(now, -1);
  return {
    ...progress,
    lastStreakDate: today,
    streakCount: continued ? progress.streakCount + 1 : 1,
  };
}

export function stepKey(
  courseId: string,
  lessonId: string,
  stepId: string,
): string {
  return `${courseId}:${lessonId}:${stepId}`;
}

export function recordBuilt(
  progress: Progress,
  key: string,
  now = new Date(),
): Progress {
  if (progress.completedStepKeys.includes(key)) {
    return applyStreak(progress, now);
  }
  return applyStreak(
    {
      ...progress,
      completedStepKeys: [...progress.completedStepKeys, key],
      sentencesBuilt: progress.sentencesBuilt + 1,
      xp: progress.xp + XP.built,
    },
    now,
  );
}

export function recordSpoken(
  progress: Progress,
  key: string,
  now = new Date(),
): Progress {
  if (progress.spokenStepKeys.includes(key)) {
    return applyStreak(progress, now);
  }
  return applyStreak(
    {
      ...progress,
      spokenStepKeys: [...progress.spokenStepKeys, key],
      sentencesSpoken: progress.sentencesSpoken + 1,
      xp: progress.xp + XP.spoken,
    },
    now,
  );
}

export function completeLesson(progress: Progress, lessonId: string): Progress {
  if (progress.completedLessonIds.includes(lessonId)) return progress;
  return {
    ...progress,
    completedLessonIds: [...progress.completedLessonIds, lessonId],
    xp: progress.xp + XP.lessonComplete,
  };
}

export function canReveal(options: {
  intensiveMode: boolean;
  spoken: boolean;
  requireSpeak?: boolean;
}): boolean {
  const locked = options.intensiveMode || Boolean(options.requireSpeak);
  return !locked || options.spoken;
}

export function applyPathAttempt(
  progress: Progress,
  correct: boolean,
  now = new Date(),
): Progress {
  const withStreak = applyStreak(progress, now);
  if (correct) {
    return {
      ...withStreak,
      pathCityIndex: withStreak.pathCityIndex + 1,
      xp: withStreak.xp + XP.pathClean,
    };
  }
  return {
    ...withStreak,
    pathDaysRemaining: Math.max(0, withStreak.pathDaysRemaining - 1),
    pathMisses: withStreak.pathMisses + 1,
  };
}

export function restartPath(progress: Progress): Progress {
  return {
    ...progress,
    pathCityIndex: 0,
    pathDaysRemaining: PATH_STARTING_DAYS,
    pathMisses: 0,
  };
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values));
}

export function mergeProgress(local: Progress, remote: Progress): Progress {
  return {
    version: 1,
    intensiveMode: local.intensiveMode,
    streakCount: Math.max(local.streakCount, remote.streakCount),
    lastStreakDate: laterDate(local.lastStreakDate, remote.lastStreakDate),
    xp: Math.max(local.xp, remote.xp),
    sentencesBuilt: Math.max(local.sentencesBuilt, remote.sentencesBuilt),
    sentencesSpoken: Math.max(local.sentencesSpoken, remote.sentencesSpoken),
    completedLessonIds: unique([
      ...local.completedLessonIds,
      ...remote.completedLessonIds,
    ]),
    completedStepKeys: unique([
      ...local.completedStepKeys,
      ...remote.completedStepKeys,
    ]),
    spokenStepKeys: unique([...local.spokenStepKeys, ...remote.spokenStepKeys]),
    pathCityIndex: Math.max(local.pathCityIndex, remote.pathCityIndex),
    pathDaysRemaining: Math.min(
      local.pathDaysRemaining,
      remote.pathDaysRemaining,
    ),
    pathMisses: Math.max(local.pathMisses, remote.pathMisses),
    lastCourseId: local.lastCourseId || remote.lastCourseId,
  };
}
