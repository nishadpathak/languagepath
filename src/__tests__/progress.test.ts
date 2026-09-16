import { describe, expect, it } from "vitest";
import {
  applyPathAttempt,
  applyStreak,
  canReveal,
  defaultProgress,
  mergeProgress,
  recordBuilt,
  recordSpoken,
  restartPath,
} from "@/lib/progress";

describe("streak", () => {
  it("starts a streak on the first active day", () => {
    const now = new Date("2026-04-02T12:00:00");
    const next = applyStreak(defaultProgress(), now);
    expect(next.streakCount).toBe(1);
    expect(next.lastStreakDate).toBe("2026-04-02");
  });

  it("continues yesterday and ignores a second hit today", () => {
    const yesterday = applyStreak(defaultProgress(), new Date("2026-04-01T09:00:00"));
    const today = applyStreak(yesterday, new Date("2026-04-02T09:00:00"));
    const again = applyStreak(today, new Date("2026-04-02T21:00:00"));
    expect(today.streakCount).toBe(2);
    expect(again.streakCount).toBe(2);
  });

  it("resets after a gap", () => {
    const start = applyStreak(defaultProgress(), new Date("2026-04-01T09:00:00"));
    const next = applyStreak(start, new Date("2026-04-03T09:00:00"));
    expect(next.streakCount).toBe(1);
  });
});

describe("xp", () => {
  it("awards built and spoken XP once per step", () => {
    const key = "es:es-want:c1";
    const built = recordBuilt(defaultProgress(), key, new Date("2026-04-02"));
    const spoken = recordSpoken(built, key, new Date("2026-04-02"));
    const again = recordBuilt(spoken, key, new Date("2026-04-02"));
    expect(spoken.xp).toBe(15);
    expect(spoken.sentencesBuilt).toBe(1);
    expect(spoken.sentencesSpoken).toBe(1);
    expect(again.xp).toBe(15);
  });
});

describe("intensive reveal", () => {
  it("locks reveal until the learner speaks", () => {
    expect(
      canReveal({ intensiveMode: true, spoken: false, requireSpeak: true }),
    ).toBe(false);
    expect(
      canReveal({ intensiveMode: true, spoken: true, requireSpeak: true }),
    ).toBe(true);
    expect(canReveal({ intensiveMode: false, spoken: false })).toBe(true);
  });
});

describe("path race", () => {
  it("advances on a clean build and spends a day on a miss", () => {
    const clean = applyPathAttempt(defaultProgress(), true);
    expect(clean.pathCityIndex).toBe(1);
    expect(clean.pathDaysRemaining).toBe(80);
    const miss = applyPathAttempt(clean, false);
    expect(miss.pathDaysRemaining).toBe(79);
    expect(miss.pathMisses).toBe(1);
    const reset = restartPath(miss);
    expect(reset.pathCityIndex).toBe(0);
    expect(reset.pathDaysRemaining).toBe(80);
  });
});

describe("cloud merge", () => {
  it("keeps the stronger streak, XP, and union of completed work", () => {
    const local = {
      ...defaultProgress(),
      xp: 40,
      streakCount: 3,
      lastStreakDate: "2026-04-02",
      completedLessonIds: ["es-want"],
      intensiveMode: true,
    };
    const remote = {
      ...defaultProgress(),
      xp: 90,
      streakCount: 2,
      lastStreakDate: "2026-04-01",
      completedLessonIds: ["es-name"],
      pathDaysRemaining: 70,
    };
    const merged = mergeProgress(local, remote);
    expect(merged.xp).toBe(90);
    expect(merged.streakCount).toBe(3);
    expect(merged.lastStreakDate).toBe("2026-04-02");
    expect(merged.completedLessonIds.sort()).toEqual(["es-name", "es-want"]);
    expect(merged.pathDaysRemaining).toBe(70);
    expect(merged.intensiveMode).toBe(true);
  });
});
