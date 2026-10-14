import { notFound } from "next/navigation";
import { DrillSession } from "@/components/DrillSession";
import { getCourse, recallFromLessons } from "@/data/courses";

export default async function RecallPage({
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
      drills={recallFromLessons(course)}
      kind="recall"
      title="Recall what you already built"
      blurb="These sentences showed up in the lessons. Reconstruct them from the pieces. Speak before you reveal."
    />
  );
}
