"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BuildBoard } from "@/components/BuildBoard";
import { IntensiveToggle } from "@/components/IntensiveToggle";
import type { Course, Drill } from "@/data/courses";
import { canReveal, stepKey } from "@/lib/progress";
import { speakText } from "@/lib/speech";
import { useProgress } from "@/context/ProgressContext";

export function DrillSession({
  course,
  drills,
  title,
  blurb,
  kind,
}: {
  course: Course;
  drills: Drill[];
  title: string;
  blurb: string;
  kind: "recall" | "build";
}) {
  const { progress, markBuilt, markSpoken, setCourse } = useProgress();
  const [index, setIndex] = useState(0);
  const drill = drills[index];
  const key = drill ? stepKey(course.id, kind, drill.id) : "";
  const spoken = progress.spokenStepKeys.includes(key);
  const revealed = progress.completedStepKeys.includes(key);

  useEffect(() => {
    const timer = window.setTimeout(() => setCourse(course.id), 0);
    return () => window.clearTimeout(timer);
  }, [course.id, setCourse]);

  if (!drill) return null;

  const revealAllowed = canReveal({
    intensiveMode: progress.intensiveMode,
    spoken,
  });
  const finished = index + 1 >= drills.length && revealed;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href={`/learn/${course.id}`} className="text-sm underline">
          {course.name}
        </Link>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          {kind === "recall" ? "Spaced recall" : "Build challenge"} · {index + 1} /{" "}
          {drills.length}
        </p>
        <h1 className="font-serif text-4xl">{title}</h1>
        <p className="mt-3 text-[var(--muted)]">{blurb}</p>
      </div>
      <IntensiveToggle compact />
      <article className="space-y-5 rounded-[2rem] border border-[var(--rule)] bg-white/70 p-6">
        <p className="font-serif text-3xl leading-snug">{drill.prompt}</p>
        <ul className="flex flex-wrap gap-2">
          {drill.pieces.map((piece) => (
            <li
              key={`${piece.gloss}-${piece.target}`}
              className="rounded-2xl border border-[var(--rule)] bg-white px-3 py-2"
            >
              <span className="block text-xs uppercase tracking-wide text-[var(--muted)]">
                {piece.gloss}
              </span>
              <span className="font-serif text-lg">{piece.target}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--muted)]">
          Construct it from known pieces. Say it. Then check the tiles and reveal.
        </p>
        <BuildBoard
          key={key}
          tiles={drill.tiles}
          salt={key}
          variant="practice"
          onResult={() => undefined}
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => markSpoken(key)}
            className="rounded-full bg-[var(--forest)] px-4 py-2 text-sm text-[var(--paper)]"
          >
            {spoken ? "Spoken · +XP" : "I said it aloud"}
          </button>
          <button
            type="button"
            onClick={() => {
              if (!revealAllowed) return;
              markBuilt(key);
              speakText(drill.answer, course.locale);
            }}
            disabled={!revealAllowed}
            className="rounded-full bg-[var(--terracotta)] px-4 py-2 text-sm text-white disabled:opacity-40"
          >
            Reveal
          </button>
        </div>
        {!revealAllowed ? (
          <p className="text-sm text-[var(--terracotta)]">
            Speak first. Reveal waits until you do.
          </p>
        ) : null}
        {revealed ? (
          <div className="rounded-2xl bg-[var(--paper)] p-4">
            <p className="font-serif text-4xl">{drill.answer}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Hint: {drill.hint}</p>
          </div>
        ) : null}
      </article>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          disabled={index === 0}
          className="text-sm underline disabled:opacity-40"
        >
          Back
        </button>
        {finished ? (
          <Link
            href={`/learn/${course.id}`}
            className="rounded-full bg-[var(--ink)] px-5 py-2 text-sm text-[var(--paper)]"
          >
            Back to {course.name}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => setIndex((value) => value + 1)}
            disabled={!revealed}
            className="rounded-full bg-[var(--ink)] px-5 py-2 text-sm text-[var(--paper)] disabled:opacity-40"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
