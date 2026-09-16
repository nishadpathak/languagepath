import Link from "next/link";
import { notFound } from "next/navigation";
import { estimatedMinutes, getCourse } from "@/data/courses";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = getCourse(courseId);
  if (!course) notFound();

  return (
    <div className="space-y-8">
      <div>
        <Link href="/learn" className="text-sm underline">
          All courses
        </Link>
        <h1 className="mt-3 font-serif text-5xl">{course.name}</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">{course.tagline}</p>
      </div>
      <ol className="space-y-4">
        {course.lessons.map((lesson, index) => (
          <li key={lesson.id}>
            <Link
              href={`/learn/${course.id}/${lesson.id}`}
              className="flex items-center justify-between rounded-[1.75rem] border border-[var(--rule)] bg-white/70 px-5 py-4"
            >
              <span>
                <span className="block text-sm text-[var(--muted)]">
                  Lesson {index + 1} · ~{estimatedMinutes(lesson, false)} min
                </span>
                <span className="font-serif text-3xl">{lesson.title}</span>
                <span className="mt-1 block text-sm text-[var(--muted)]">
                  {lesson.summary}
                </span>
              </span>
              <span className="text-sm">Begin</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
