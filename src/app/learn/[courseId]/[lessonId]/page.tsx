import { notFound } from "next/navigation";
import { LessonPlayer } from "@/components/LessonPlayer";
import { getLesson } from "@/data/courses";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const { courseId, lessonId } = await params;
  const found = getLesson(courseId, lessonId);
  if (!found) notFound();
  return <LessonPlayer course={found.course} lesson={found.lesson} />;
}
