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

  const extras = [
    {
      href: `/learn/${course.id}/recall`,
      title: "Recall",
      copy: `${course.recall.length} sentences you already built.`,
    },
    {
      href: `/learn/${course.id}/build`,
      title: "Build",
      copy: `${course.build.length} brand-new lines from known pieces.`,
    },
    {
      href: `/learn/${course.id}/dialogue`,
      title: "Dialogue",
      copy: course.dialogue.title,
    },
    {
      href: `/learn/${course.id}/phrases`,
      title: "Pocket phrases",
      copy: "Greetings, numbers, table talk.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <Link href="/learn" className="text-sm underline">
          All courses
        </Link>
        <h1 className="mt-3 font-serif text-5xl">{course.name}</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">{course.tagline}</p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Free. Understand a piece, construct a new sentence, say it, then
          reveal. Intensive adds a longer chain.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {extras.map((extra) => (
          <Link
            key={extra.href}
            href={extra.href}
            className="rounded-[1.5rem] border border-[var(--rule)] bg-white/70 px-5 py-4"
          >
            <span className="font-serif text-2xl">{extra.title}</span>
            <span className="mt-1 block text-sm text-[var(--muted)]">{extra.copy}</span>
          </Link>
        ))}
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
