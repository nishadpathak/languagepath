"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  estimatedMinutes,
  lessonSteps,
  type Course,
  type Lesson,
  type Step,
} from "@/data/courses";
import { canReveal, stepKey } from "@/lib/progress";
import { speakText } from "@/lib/speech";
import { useProgress } from "@/context/ProgressContext";
import { IntensiveToggle } from "@/components/IntensiveToggle";

function Pieces({ step }: { step: Extract<Step, { kind: "construct" }> }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {step.pieces.map((piece) => (
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
  );
}

export function LessonPlayer({ course, lesson }: { course: Course; lesson: Lesson }) {
  const { progress, markBuilt, markSpoken, markLessonComplete, setCourse } =
    useProgress();
  const steps = useMemo(
    () => lessonSteps(lesson, progress.intensiveMode),
    [lesson, progress.intensiveMode],
  );
  const [index, setIndex] = useState(0);
  const step = steps[index];
  const key = step ? stepKey(course.id, lesson.id, step.id) : "";
  const minutes = estimatedMinutes(lesson, progress.intensiveMode);
  const spoken = progress.spokenStepKeys.includes(key);
  const revealed = Boolean(
    step && step.kind === "construct" && progress.completedStepKeys.includes(key),
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setCourse(course.id), 0);
    return () => window.clearTimeout(timer);
  }, [course.id, setCourse]);

  if (!step) return null;

  const revealAllowed = canReveal({
    intensiveMode: progress.intensiveMode,
    spoken,
    requireSpeak: step.kind === "construct" ? step.requireSpeak : false,
  });

  function onSaidIt() {
    if (step.kind !== "construct") {
      speakText(step.target, course.locale);
      return;
    }
    markSpoken(key);
  }

  function onReveal() {
    if (!revealAllowed) return;
    if (step.kind === "construct") {
      markBuilt(key);
      speakText(step.answer, course.locale);
    }
  }

  function onNext() {
    if (index + 1 >= steps.length) {
      markLessonComplete(lesson.id);
      return;
    }
    setIndex((value) => value + 1);
  }

  const finished = index + 1 >= steps.length && (step.kind === "teach" || revealed);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            {course.name} · ~{minutes} min
          </p>
          <h1 className="font-serif text-4xl">{lesson.title}</h1>
        </div>
        <p className="text-sm text-[var(--muted)]">
          {index + 1} / {steps.length}
        </p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--rule)]">
        <div
          className="h-full bg-[var(--terracotta)]"
          style={{ width: `${((index + 1) / steps.length) * 100}%` }}
        />
      </div>
      <IntensiveToggle compact />
      <article className="rounded-[2rem] border border-[var(--rule)] bg-white/70 p-6 shadow-[0_20px_60px_rgba(70,40,10,0.06)]">
        {step.kind === "teach" ? (
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              1 · Understand
            </p>
            <p className="text-[var(--muted)]">{step.gloss}</p>
            <p className="font-serif text-5xl leading-tight">{step.target}</p>
            <p className="text-lg leading-8">{step.note}</p>
            <button
              type="button"
              onClick={() => speakText(step.target, course.locale)}
              className="rounded-full border border-[var(--rule)] px-4 py-2 text-sm"
            >
              Hear it
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              2 · Construct
            </p>
            <p className="font-serif text-3xl leading-snug">{step.prompt}</p>
            <Pieces step={step} />
            <p className="text-[var(--muted)]">
              Pause. Work it out. Say it aloud before you peek.
              {progress.intensiveMode
                ? " Intensive mode keeps Reveal locked until you mark that you spoke."
                : ""}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onSaidIt}
                className="rounded-full bg-[var(--forest)] px-4 py-2 text-sm text-[var(--paper)]"
              >
                {spoken ? "Spoken · +XP" : "I said it aloud"}
              </button>
              <button
                type="button"
                onClick={onReveal}
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
                <p className="text-sm text-[var(--muted)]">Target</p>
                <p className="font-serif text-4xl">{step.answer}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Hint: {step.hint}</p>
              </div>
            ) : null}
          </div>
        )}
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
            onClick={() => markLessonComplete(lesson.id)}
            className="rounded-full bg-[var(--ink)] px-5 py-2 text-sm text-[var(--paper)]"
          >
            Lesson complete · +XP
          </Link>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={step.kind === "construct" && !revealed}
            className="rounded-full bg-[var(--ink)] px-5 py-2 text-sm text-[var(--paper)] disabled:opacity-40"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
