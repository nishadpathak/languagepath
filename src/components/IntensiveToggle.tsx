"use client";

import { useProgress } from "@/context/ProgressContext";

export function IntensiveToggle({ compact = false }: { compact?: boolean }) {
  const { progress, setIntensiveMode } = useProgress();
  return (
    <label className="flex items-start gap-3 rounded-2xl border border-[var(--rule)] bg-white/60 p-4">
      <input
        type="checkbox"
        checked={progress.intensiveMode}
        onChange={(event) => setIntensiveMode(event.target.checked)}
        className="mt-1 h-4 w-4 accent-[var(--terracotta)]"
      />
      <span>
        <span className="block font-medium text-[var(--ink)]">Intensive mode</span>
        {!compact ? (
          <span className="mt-1 block text-sm text-[var(--muted)]">
            Longer chains, speak-before-reveal, and a 20–25 minute power session.
            Opt-in only — daily lessons stay short.
          </span>
        ) : (
          <span className="block text-sm text-[var(--muted)]">
            Speak before you reveal. Extra chain at the end of each lesson.
          </span>
        )}
      </span>
    </label>
  );
}
