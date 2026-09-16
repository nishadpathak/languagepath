import { describe, expect, it } from "vitest";
import { tilesMatch } from "@/data/path";
import { getCourse, lessonSteps } from "@/data/courses";

describe("synthetic lessons", () => {
  it("ships original Spanish and French sample courses", () => {
    const spanish = getCourse("es");
    const french = getCourse("fr");
    expect(spanish?.lessons.length).toBeGreaterThan(2);
    expect(french?.lessons.length).toBeGreaterThan(1);
    const intensive = lessonSteps(spanish!.lessons[0], true);
    expect(intensive.length).toBeGreaterThan(spanish!.lessons[0].steps.length);
    expect(intensive.some((step) => step.kind === "construct" && step.requireSpeak)).toBe(
      true,
    );
  });

  it("treats matching tiles as a clean Path build", () => {
    expect(tilesMatch(["Quiero", "café."], ["Quiero", "café."])).toBe(true);
    expect(tilesMatch(["café.", "Quiero"], ["Quiero", "café."])).toBe(false);
  });
});
