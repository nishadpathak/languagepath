import { describe, expect, it } from "vitest";
import { tilesMatch } from "@/data/path";
import {
  constructCount,
  courses,
  getCourse,
  isBuildStep,
  lessonSteps,
} from "@/data/courses";

describe("flagship courses", () => {
  it("ships original Spanish, French, German, and Portuguese courses", () => {
    expect(courses.map((course) => course.id)).toEqual(["es", "fr", "de", "pt"]);
    expect(getCourse("es")?.lessons.length).toBe(10);
    expect(getCourse("fr")?.lessons.length).toBe(10);
    expect(getCourse("de")?.lessons.length).toBe(8);
    expect(getCourse("pt")?.lessons.length).toBe(8);
  });

  it("keeps the first Spanish lesson id that e2e and Path already use", () => {
    expect(getCourse("es")?.lessons[0]?.id).toBe("es-want");
    expect(getCourse("es")?.lessons[0]?.steps.some((step) => step.kind === "construct")).toBe(
      true,
    );
  });

  it("gives every lesson the construct → listen → rebuild loop plus Intensive extras", () => {
    for (const course of courses) {
      expect(course.recall.length).toBeGreaterThanOrEqual(8);
      expect(course.build.length).toBeGreaterThanOrEqual(3);
      expect(course.dialogue.lines.length).toBeGreaterThanOrEqual(5);
      expect(course.phrases.length).toBeGreaterThanOrEqual(10);
      expect(constructCount(course)).toBeGreaterThan(20);
      for (const lesson of course.lessons) {
        const kinds = new Set(lesson.steps.map((step) => step.kind));
        expect(kinds.has("teach")).toBe(true);
        expect(kinds.has("construct")).toBe(true);
        expect(kinds.has("listen")).toBe(true);
        expect(kinds.has("rebuild")).toBe(true);
        expect(lesson.intensiveSteps.some(isBuildStep)).toBe(true);
        expect(lesson.intensiveSteps.some((step) => isBuildStep(step) && step.requireSpeak)).toBe(
          true,
        );
        const intensive = lessonSteps(lesson, true);
        expect(intensive.length).toBeGreaterThan(lesson.steps.length);
      }
    }
  });

  it("keeps answers as original target-language sentences with matching tiles", () => {
    for (const course of courses) {
      for (const lesson of course.lessons) {
        for (const step of [...lesson.steps, ...lesson.intensiveSteps]) {
          if (!isBuildStep(step)) continue;
          expect(step.answer.length).toBeGreaterThan(3);
          expect(step.tiles.length).toBeGreaterThan(0);
          expect(step.pieces.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("treats matching tiles as a clean Path build", () => {
    expect(tilesMatch(["Quiero", "café."], ["Quiero", "café."])).toBe(true);
    expect(tilesMatch(["café.", "Quiero"], ["Quiero", "café."])).toBe(false);
  });
});
