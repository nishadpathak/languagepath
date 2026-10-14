"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Course, PocketPhrase } from "@/data/courses";
import { speakText } from "@/lib/speech";
import { useProgress } from "@/context/ProgressContext";

const buckets: Array<{ id: PocketPhrase["bucket"]; title: string }> = [
  { id: "greet", title: "Greetings" },
  { id: "number", title: "Numbers" },
  { id: "table", title: "At the table" },
  { id: "help", title: "Yes, no, help" },
];

export function PhraseBook({ course }: { course: Course }) {
  const { setCourse } = useProgress();

  useEffect(() => {
    const timer = window.setTimeout(() => setCourse(course.id), 0);
    return () => window.clearTimeout(timer);
  }, [course.id, setCourse]);

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <Link href={`/learn/${course.id}`} className="text-sm underline">
          {course.name}
        </Link>
        <h1 className="mt-3 font-serif text-4xl">Pocket phrases</h1>
        <p className="mt-3 text-[var(--muted)]">
          Fast greetings and numbers. Hear them, then drop them into a sentence
          you already know how to build.
        </p>
      </div>
      {buckets.map((bucket) => {
        const items = course.phrases.filter((phrase) => phrase.bucket === bucket.id);
        if (!items.length) return null;
        return (
          <section key={bucket.id} className="space-y-3">
            <h2 className="font-serif text-2xl">{bucket.title}</h2>
            <ul className="space-y-2">
              {items.map((phrase) => (
                <li
                  key={phrase.id}
                  className="flex items-center justify-between rounded-2xl border border-[var(--rule)] bg-white/70 px-4 py-3"
                >
                  <span>
                    <span className="block font-serif text-2xl">{phrase.target}</span>
                    <span className="text-sm text-[var(--muted)]">{phrase.gloss}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => speakText(phrase.target, course.locale)}
                    className="rounded-full border border-[var(--rule)] px-3 py-1 text-sm"
                  >
                    Hear
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
