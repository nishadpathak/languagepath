import { notFound } from "next/navigation";
import { DrillSession } from "@/components/DrillSession";
import { getCourse } from "@/data/courses";

export default async function BuildPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = getCourse(courseId);
  if (!course) notFound();
  return (
    <DrillSession
      course={course}
      drills={course.build}
      kind="build"
      title="Build a new sentence"
      blurb="Brand-new lines from pieces you already hold. Nothing here is a memorized script."
    />
  );
}
