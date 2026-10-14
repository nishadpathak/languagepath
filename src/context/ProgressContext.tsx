"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import {
  applyPathAttempt,
  completeLesson,
  defaultProgress,
  mergeProgress,
  parseProgress,
  PROGRESS_STORAGE_KEY,
  recordBuilt,
  recordSpoken,
  restartPath,
  type Progress,
} from "@/lib/progress";
import { isPro, type PlanSnapshot } from "@/lib/quota";

type Me = PlanSnapshot & {
  id: string;
  email: string;
  name: string | null;
  currentPeriodEnd: string | null;
  aiMessagesUsed: number;
  aiQuotaResetAt: string | null;
  hasStripeCustomer: boolean;
  remainingMessages?: number;
  pro?: boolean;
};

type ProgressContextValue = {
  ready: boolean;
  progress: Progress;
  me: Me | null;
  pro: boolean;
  setIntensiveMode: (value: boolean) => void;
  setCourse: (courseId: string) => void;
  markBuilt: (key: string) => void;
  markSpoken: (key: string) => void;
  markLessonComplete: (lessonId: string) => void;
  attemptPath: (correct: boolean) => void;
  resetPath: () => void;
  refreshMe: () => Promise<void>;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

function readLocal(): Progress {
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    return parseProgress(raw ? JSON.parse(raw) : null);
  } catch {
    return defaultProgress();
  }
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [me, setMe] = useState<Me | null>(null);
  const [ready, setReady] = useState(false);
  const skipNextSync = useRef(true);
  const syncedProUser = useRef<string | null>(null);

  const persistLocal = useCallback((next: Progress) => {
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(next));
  }, []);

  const refreshMe = useCallback(async () => {
    const response = await fetch("/api/me", { cache: "no-store" });
    if (!response.ok) {
      setMe(null);
      return;
    }
    const body = (await response.json()) as { user: Me | null };
    setMe(body.user);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const local = readLocal();

    void (async () => {
      if (cancelled) return;
      setProgress(local);
      await refreshMe();
      if (cancelled) return;
      const meResponse = await fetch("/api/me", { cache: "no-store" });
      const meBody = meResponse.ok
        ? ((await meResponse.json()) as { user: Me | null })
        : { user: null };
      const snapshot = meBody.user;
      setMe(snapshot);
      if (snapshot && isPro(snapshot)) {
        const syncResponse = await fetch("/api/sync", { cache: "no-store" });
        if (syncResponse.ok) {
          const syncBody = (await syncResponse.json()) as { progress: unknown };
          const merged = mergeProgress(local, parseProgress(syncBody.progress));
          setProgress(merged);
          persistLocal(merged);
        }
      }
      skipNextSync.current = true;
      setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [persistLocal, refreshMe]);

  useEffect(() => {
    if (!ready) return;
    const timer = window.setTimeout(() => {
      void refreshMe();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, ready, refreshMe]);

  useEffect(() => {
    if (!ready) return;
    if (!me || !isPro(me)) {
      if (!me) syncedProUser.current = null;
      return;
    }
    if (syncedProUser.current === me.id) return;
    syncedProUser.current = me.id;
    skipNextSync.current = true;
    void (async () => {
      const syncResponse = await fetch("/api/sync", { cache: "no-store" });
      if (!syncResponse.ok) return;
      const syncBody = (await syncResponse.json()) as { progress: unknown };
      setProgress((local) => {
        const merged = mergeProgress(local, parseProgress(syncBody.progress));
        persistLocal(merged);
        return merged;
      });
    })();
  }, [me, persistLocal, ready]);

  useEffect(() => {
    if (!ready) return;
    persistLocal(progress);
    if (!me || !isPro(me)) return;
    if (skipNextSync.current) {
      skipNextSync.current = false;
      return;
    }
    const handle = window.setTimeout(() => {
      void fetch("/api/sync", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ progress }),
      });
    }, 700);
    return () => window.clearTimeout(handle);
  }, [me, persistLocal, progress, ready]);

  const update = useCallback((updater: (current: Progress) => Progress) => {
    setProgress((current) => updater(current));
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      ready,
      progress,
      me,
      pro: isPro(me),
      setIntensiveMode: (value) =>
        update((current) => ({ ...current, intensiveMode: value })),
      setCourse: (courseId) =>
        update((current) => ({ ...current, lastCourseId: courseId })),
      markBuilt: (key) => update((current) => recordBuilt(current, key)),
      markSpoken: (key) => update((current) => recordSpoken(current, key)),
      markLessonComplete: (lessonId) =>
        update((current) => completeLesson(current, lessonId)),
      attemptPath: (correct) =>
        update((current) => applyPathAttempt(current, correct)),
      resetPath: () => update((current) => restartPath(current)),
      refreshMe,
    }),
    [me, progress, ready, refreshMe, update],
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return value;
}
