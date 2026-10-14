import { notFound } from "next/navigation";
import { DialoguePlayer } from "@/components/DialoguePlayer";
import { getCourse } from "@/data/courses";

export default async function DialoguePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = getCourse(courseId);
  if (!course) notFound();
  return <DialoguePlayer course={course} />;
}
