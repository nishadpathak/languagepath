import Link from "next/link";
import { courses, constructCount } from "@/data/courses";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
            languagepath.org · free core
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
            Reason the sentence out. Say it. Then reveal.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            LanguagePath is a trainer for building sentences you have not
            memorized. You get a piece, you construct the next line, you speak
            it, then you check. No account required. Lessons never sit behind a
            paywall.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/learn/es/es-want"
              className="rounded-full bg-[var(--terracotta)] px-5 py-3 text-sm text-white"
            >
              Start Spanish free
            </Link>
            <Link
              href="/path"
              className="rounded-full border border-[var(--ink)] px-5 py-3 text-sm"
            >
              Play Path
            </Link>
          </div>
        </div>
        <aside className="rounded-[2rem] border border-[var(--rule)] bg-white/70 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            The method
          </p>
          <ol className="mt-4 space-y-3">
            {[
              ["Understand", "Take one piece of the language."],
              ["Construct", "Build a sentence you have not seen."],
              ["Say", "Speak it before you reveal."],
              ["Reveal", "Check, hear, and reuse it next."],
            ].map(([title, copy], index) => (
              <li key={title} className="flex gap-3">
                <span className="font-serif text-2xl text-[var(--terracotta)]">
                  {index + 1}
                </span>
                <span>
                  <span className="block font-medium">{title}</span>
                  <span className="text-sm text-[var(--muted)]">{copy}</span>
                </span>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/learn/${course.id}`}
            className="rounded-[2rem] border border-[var(--rule)] bg-white/60 p-6 hover:border-[var(--ink)]"
          >
            <p className="text-sm text-[var(--muted)]">{course.lessons.length} lessons</p>
            <h2 className="font-serif text-4xl">{course.name}</h2>
            <p className="mt-2 text-[var(--muted)]">{course.tagline}</p>
            <p className="mt-4 text-sm">
              {constructCount(course)} sentences you can actually build.
            </p>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[1.5rem] border border-[var(--rule)] p-5">
          <h3 className="font-serif text-2xl">Light gamification</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Streak and XP for sentences you built and spoke. Path is a city race
            with an eighty-day clock. No hearts, lives, or coin spam.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-[var(--rule)] p-5">
          <h3 className="font-serif text-2xl">Intensive, if you ask</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Opt into longer chains and speak-before-reveal. The power session is
            about twenty-five minutes, then you stop.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-[var(--rule)] p-5">
          <h3 className="font-serif text-2xl">Pro is optional</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Account, Stripe monthly or yearly, cloud sync, streak backup, and a
            GrokBot quota. The course itself stays free.
          </p>
        </div>
      </section>
    </div>
  );
}
