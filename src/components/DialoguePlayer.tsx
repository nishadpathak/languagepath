"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Course } from "@/data/courses";
import { speakText } from "@/lib/speech";
import { useProgress } from "@/context/ProgressContext";

export function DialoguePlayer({ course }: { course: Course }) {
  const { setCourse } = useProgress();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const line = course.dialogue.lines[index];

  useEffect(() => {
    const timer = window.setTimeout(() => setCourse(course.id), 0);
    return () => window.clearTimeout(timer);
  }, [course.id, setCourse]);

  if (!line) return null;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href={`/learn/${course.id}`} className="text-sm underline">
          {course.name}
        </Link>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          Dialogue · {index + 1} / {course.dialogue.lines.length}
        </p>
        <h1 className="font-serif text-4xl">{course.dialogue.title}</h1>
        <p className="mt-3 text-[var(--muted)]">{course.dialogue.setting}</p>
      </div>
      <article className="space-y-4 rounded-[2rem] border border-[var(--rule)] bg-white/70 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          {line.speaker}
        </p>
        <p className="font-serif text-4xl leading-tight">{line.target}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => speakText(line.target, course.locale)}
            className="rounded-full border border-[var(--rule)] px-4 py-2 text-sm"
          >
            Hear it
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full bg-[var(--terracotta)] px-4 py-2 text-sm text-white"
          >
            Reveal English
          </button>
        </div>
        {open ? (
          <p className="rounded-2xl bg-[var(--paper)] p-4 text-lg">{line.gloss}</p>
        ) : (
          <p className="text-sm text-[var(--muted)]">
            Cover the English. Say the line. Then check.
          </p>
        )}
      </article>
      <ol className="space-y-2 text-sm text-[var(--muted)]">
        {course.dialogue.lines.map((item, lineIndex) => (
          <li key={`${item.speaker}-${item.target}`}>
            {lineIndex === index ? "→ " : ""}
            {item.speaker}
          </li>
        ))}
      </ol>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setIndex((value) => Math.max(0, value - 1));
          }}
          disabled={index === 0}
          className="text-sm underline disabled:opacity-40"
        >
          Back
        </button>
        {index + 1 >= course.dialogue.lines.length ? (
          <Link
            href={`/learn/${course.id}`}
            className="rounded-full bg-[var(--ink)] px-5 py-2 text-sm text-[var(--paper)]"
          >
            Back to {course.name}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setIndex((value) => value + 1);
            }}
            className="rounded-full bg-[var(--ink)] px-5 py-2 text-sm text-[var(--paper)]"
          >
            Next line
          </button>
        )}
      </div>
    </div>
  );
}
