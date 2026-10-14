export type {
  Course,
  DialogueLine,
  Drill,
  Lesson,
  Piece,
  PocketPhrase,
  Step,
} from "@/data/types";
export {
  construct,
  constructCount,
  drill,
  estimatedMinutes,
  isBuildStep,
  lessonSteps,
  listen,
  pieces,
  recallFromLessons,
  rebuild,
  teach,
} from "@/data/types";

import { french } from "@/data/french";
import { german } from "@/data/german";
import { portuguese } from "@/data/portuguese";
import { spanish } from "@/data/spanish";
import type { Course } from "@/data/types";

export const courses: Course[] = [spanish, french, german, portuguese];

export function getCourse(courseId: string) {
  return courses.find((course) => course.id === courseId) ?? null;
}

export function getLesson(courseId: string, lessonId: string) {
  const course = getCourse(courseId);
  if (!course) return null;
  const lesson = course.lessons.find((item) => item.id === lessonId) ?? null;
  if (!lesson) return null;
  return { course, lesson };
}
