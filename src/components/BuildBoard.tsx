"use client";

import { useMemo, useState } from "react";
import { shuffleTiles, tilesMatch } from "@/data/path";

export function BuildBoard({
  tiles,
  salt,
  onResult,
  variant = "path",
}: {
  tiles: string[];
  salt: string;
  onResult: (correct: boolean) => void;
  variant?: "path" | "practice";
}) {
  const bank = useMemo(() => shuffleTiles(tiles, salt), [salt, tiles]);
  const [built, setBuilt] = useState<string[]>([]);
  const [remaining, setRemaining] = useState(bank);
  const [result, setResult] = useState<"idle" | "correct" | "miss">("idle");

  function pick(tile: string, index: number) {
    if (result !== "idle") return;
    setBuilt((current) => [...current, tile]);
    setRemaining((current) => current.filter((_, i) => i !== index));
  }

  function undo() {
    if (result !== "idle" || built.length === 0) return;
    const last = built[built.length - 1];
    setBuilt((current) => current.slice(0, -1));
    setRemaining((current) => [...current, last]);
  }

  function check() {
    const correct = tilesMatch(built, tiles);
    setResult(correct ? "correct" : "miss");
    onResult(correct);
  }

  function retry() {
    setBuilt([]);
    setRemaining(bank);
    setResult("idle");
  }

  return (
    <div className="space-y-4">
      <div className="min-h-16 rounded-2xl border border-dashed border-[var(--rule)] bg-white/50 p-3">
        {built.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">Tap tiles to build the sentence.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {built.map((tile, index) => (
              <span key={`${tile}-${index}`} className="rounded-full bg-[var(--ink)] px-3 py-1 text-sm text-[var(--paper)]">
                {tile}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {remaining.map((tile, index) => (
          <button
            key={`${tile}-${index}`}
            type="button"
            onClick={() => pick(tile, index)}
            className="rounded-full border border-[var(--rule)] bg-white px-3 py-1.5 text-sm hover:border-[var(--ink)]"
          >
            {tile}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={undo} className="text-sm underline">
          Undo
        </button>
        <button
          type="button"
          onClick={check}
          disabled={built.length === 0 || result !== "idle"}
          className="rounded-full bg-[var(--terracotta)] px-4 py-2 text-sm text-white disabled:opacity-40"
        >
          Check
        </button>
        {result === "correct" ? (
          <span className="self-center text-sm text-[var(--forest)]">
            {variant === "path" ? "Clean build. No days lost." : "Clean build."}
          </span>
        ) : null}
        {result === "miss" ? (
          <>
            <span className="self-center text-sm text-[var(--terracotta)]">
              {variant === "path" ? "Miss. That costs a day." : "Not yet. Rebuild it from the pieces."}
            </span>
            {variant === "practice" ? (
              <button type="button" onClick={retry} className="text-sm underline">
                Try again
              </button>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
