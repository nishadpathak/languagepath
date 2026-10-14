"use client";

import { BuildBoard } from "@/components/BuildBoard";
import { pathForCourse } from "@/data/path";
import { PATH_STARTING_DAYS } from "@/lib/progress";
import { useProgress } from "@/context/ProgressContext";
import { getCourse } from "@/data/courses";

export function PathBoard() {
  const { progress, attemptPath, resetPath, setCourse } = useProgress();
  const course = getCourse(progress.lastCourseId) ?? getCourse("es")!;
  const cities = pathForCourse(course.id);
  const current = cities[progress.pathCityIndex];
  const finished = !current || progress.pathDaysRemaining <= 0;

  return (
    <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
      <ol className="space-y-2">
        {cities.map((city) => {
          const state =
            city.index < progress.pathCityIndex
              ? "done"
              : city.index === progress.pathCityIndex
                ? "now"
                : "later";
          return (
            <li
              key={city.id}
              className={`rounded-2xl border px-4 py-3 ${
                state === "now"
                  ? "border-[var(--terracotta)] bg-white"
                  : "border-[var(--rule)]"
              }`}
            >
              <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
                {city.region}
              </p>
              <p className="font-serif text-xl">{city.name}</p>
              <p className="text-xs text-[var(--muted)]">
                {state === "done" ? "Clean build" : state === "now" ? "Current city" : "Ahead"}
              </p>
            </li>
          );
        })}
      </ol>
      <section className="rounded-[2rem] border border-[var(--rule)] bg-white/70 p-6">
        <p className="text-sm text-[var(--muted)]">
          {course.name} Path · {progress.pathDaysRemaining} / {PATH_STARTING_DAYS} days
        </p>
        <h1 className="mt-2 font-serif text-4xl">Eastbound race</h1>
        <p className="mt-3 max-w-xl text-[var(--muted)]">
          Construct a sentence in each city. A clean build costs nothing. A miss
          costs a day. The eighty-day clock is the rule.
        </p>
        <p className="mt-2 text-sm">
          Misses so far: {progress.pathMisses}. Switch course in Learn — Path
          uses your last language.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(["es", "fr", "de", "pt"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setCourse(id)}
              className={`rounded-full px-3 py-1 text-sm ${
                course.id === id
                  ? "bg-[var(--ink)] text-[var(--paper)]"
                  : "border border-[var(--rule)]"
              }`}
            >
              {id === "es"
                ? "Spanish"
                : id === "fr"
                  ? "French"
                  : id === "de"
                    ? "German"
                    : "Portuguese"}
            </button>
          ))}
        </div>
        {progress.pathDaysRemaining <= 0 ? (
          <div className="mt-8 space-y-4">
            <p>The clock ran out. Restart the line whenever you like — no lives, no coins.</p>
            <button
              type="button"
              onClick={resetPath}
              className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm text-[var(--paper)]"
            >
              Restart Path
            </button>
          </div>
        ) : finished ? (
          <div className="mt-8 space-y-4">
            <p className="font-serif text-3xl">You reached Almaty.</p>
            <p>A clean eastbound line. Restart to roll the cities again.</p>
            <button
              type="button"
              onClick={resetPath}
              className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm text-[var(--paper)]"
            >
              New line
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            <h2 className="font-serif text-3xl">{current.name}</h2>
            <p className="text-lg">{current.challenge.prompt}</p>
            <ul className="flex flex-wrap gap-2">
              {current.challenge.pieces.map((piece) => (
                <li
                  key={piece.target}
                  className="rounded-2xl border border-[var(--rule)] bg-[var(--paper)] px-3 py-2"
                >
                  <span className="block text-xs text-[var(--muted)]">{piece.gloss}</span>
                  <span className="font-serif text-lg">{piece.target}</span>
                </li>
              ))}
            </ul>
            <BuildBoard
              key={`${course.id}-${current.id}-${progress.pathMisses}-${progress.pathCityIndex}`}
              tiles={current.challenge.tiles}
              salt={`${course.id}-${current.id}`}
              onResult={attemptPath}
            />
          </div>
        )}
      </section>
    </div>
  );
}
