"use client";

import { useEffect, useMemo, useState } from "react";
import { courses, lessonSteps } from "@/data/courses";
import { canReveal, stepKey } from "@/lib/progress";
import { speakText } from "@/lib/speech";
import { useProgress } from "@/context/ProgressContext";
import { IntensiveToggle } from "@/components/IntensiveToggle";

const SESSION_SECONDS = 25 * 60;

export function IntensiveSession() {
  const { progress, setIntensiveMode, markBuilt, markSpoken, setCourse } =
    useProgress();
  const course = courses.find((item) => item.id === progress.lastCourseId) ?? courses[0];
  const chain = useMemo(
    () =>
      course.lessons.flatMap((lesson) =>
        lessonSteps(lesson, true)
          .filter((step) => step.kind === "construct")
          .map((step) => ({ lesson, step })),
      ),
    [course],
  );
  const [index, setIndex] = useState(0);
  const [opened, setOpened] = useState<Record<number, { spoken: boolean; revealed: boolean }>>(
    {},
  );
  const [seconds, setSeconds] = useState(SESSION_SECONDS);
  const current = chain[index];
  const spoken = Boolean(opened[index]?.spoken);
  const revealed = Boolean(opened[index]?.revealed);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntensiveMode(true);
      setCourse(course.id);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [course.id, setCourse, setIntensiveMode]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((value) => Math.max(0, value - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (!current) return null;
  const step = current.step;
  const key = stepKey(course.id, current.lesson.id, step.id);
  const revealAllowed = canReveal({
    intensiveMode: true,
    spoken,
    requireSpeak: true,
  });
  const minutes = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            Power session · {course.name}
          </p>
          <h1 className="font-serif text-4xl">Intensive</h1>
        </div>
        <p className="font-serif text-3xl tabular-nums">
          {minutes}:{secs}
        </p>
      </div>
      <IntensiveToggle />
      <p className="text-[var(--muted)]">
        A 20–25 minute chain. Speak every sentence before you reveal. No hearts.
        When the clock hits zero, stop — tired mimicry is not the method.
      </p>
      <article className="rounded-[2rem] border border-[var(--rule)] bg-white/70 p-6">
        <p className="text-sm text-[var(--muted)]">
          {current.lesson.title} · {index + 1}/{chain.length}
        </p>
        {"prompt" in step ? (
          <>
            <h2 className="mt-2 font-serif text-3xl">{step.prompt}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {step.pieces.map((piece) => (
                <li
                  key={piece.target}
                  className="rounded-2xl border border-[var(--rule)] bg-[var(--paper)] px-3 py-2"
                >
                  <span className="block text-xs text-[var(--muted)]">{piece.gloss}</span>
                  <span className="font-serif text-lg">{piece.target}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setOpened((currentOpened) => ({
                    ...currentOpened,
                    [index]: { spoken: true, revealed: Boolean(currentOpened[index]?.revealed) },
                  }));
                  markSpoken(key);
                }}
                className="rounded-full bg-[var(--forest)] px-4 py-2 text-sm text-[var(--paper)]"
              >
                I said it aloud
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!revealAllowed) return;
                  setOpened((currentOpened) => ({
                    ...currentOpened,
                    [index]: { spoken: true, revealed: true },
                  }));
                  markBuilt(key);
                  speakText(step.answer, course.locale);
                }}
                disabled={!revealAllowed}
                className="rounded-full bg-[var(--terracotta)] px-4 py-2 text-sm text-white disabled:opacity-40"
              >
                Reveal
              </button>
            </div>
            {revealed ? (
              <p className="mt-4 font-serif text-4xl">{step.answer}</p>
            ) : null}
          </>
        ) : null}
      </article>
      <button
        type="button"
        onClick={() => setIndex((value) => Math.min(chain.length - 1, value + 1))}
        disabled={!revealed}
        className="rounded-full bg-[var(--ink)] px-5 py-2 text-sm text-[var(--paper)] disabled:opacity-40"
      >
        Next sentence
      </button>
    </div>
  );
}
