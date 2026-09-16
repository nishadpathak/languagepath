import Link from "next/link";
import { courses, constructCount } from "@/data/courses";

export default function LearnIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Courses</p>
        <h1 className="font-serif text-5xl">Pick a path of sentences</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Synthetic sample lessons only — original beginner chains for Spanish
          and French. Nothing here was copied from production course files.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/learn/${course.id}`}
            className="rounded-[2rem] border border-[var(--rule)] bg-white/70 p-6"
          >
            <h2 className="font-serif text-4xl">{course.name}</h2>
            <p className="mt-2 text-[var(--muted)]">{course.tagline}</p>
            <p className="mt-4 text-sm">
              {course.lessons.length} lessons · {constructCount(course)} constructions
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
