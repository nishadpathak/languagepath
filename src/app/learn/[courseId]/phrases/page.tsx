import { notFound } from "next/navigation";
import { PhraseBook } from "@/components/PhraseBook";
import { getCourse } from "@/data/courses";

export default async function PhrasesPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = getCourse(courseId);
  if (!course) notFound();
  return <PhraseBook course={course} />;
}
