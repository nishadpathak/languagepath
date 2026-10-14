export type Piece = {
  gloss: string;
  target: string;
};

export type Step =
  | {
      id: string;
      kind: "teach";
      target: string;
      gloss: string;
      note: string;
    }
  | {
      id: string;
      kind: "construct" | "rebuild";
      prompt: string;
      pieces: Piece[];
      answer: string;
      hint: string;
      tiles: string[];
      requireSpeak?: boolean;
    }
  | {
      id: string;
      kind: "listen";
      target: string;
      prompt: string;
      meaning: string;
    };

export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  steps: Step[];
  intensiveSteps: Step[];
};

export type Drill = {
  id: string;
  prompt: string;
  pieces: Piece[];
  answer: string;
  tiles: string[];
  hint: string;
};

export type DialogueLine = {
  speaker: string;
  target: string;
  gloss: string;
};

export type PocketPhrase = {
  id: string;
  bucket: "greet" | "number" | "table" | "help";
  target: string;
  gloss: string;
};

export type Course = {
  id: string;
  name: string;
  language: string;
  locale: string;
  tagline: string;
  color: string;
  lessons: Lesson[];
  recall: Drill[];
  build: Drill[];
  dialogue: {
    title: string;
    setting: string;
    lines: DialogueLine[];
  };
  phrases: PocketPhrase[];
};

export function pieces(...pairs: Array<[string, string]>): Piece[] {
  return pairs.map(([gloss, target]) => ({ gloss, target }));
}

export function teach(
  id: string,
  target: string,
  gloss: string,
  note: string,
): Step {
  return { id, kind: "teach", target, gloss, note };
}

export function construct(
  id: string,
  prompt: string,
  pairList: Array<[string, string]>,
  answer: string,
  hint: string,
  tiles: string[],
  requireSpeak = false,
): Step {
  return {
    id,
    kind: "construct",
    prompt,
    pieces: pieces(...pairList),
    answer,
    hint,
    tiles,
    requireSpeak,
  };
}

export function rebuild(
  id: string,
  prompt: string,
  pairList: Array<[string, string]>,
  answer: string,
  hint: string,
  tiles: string[],
  requireSpeak = false,
): Step {
  return {
    id,
    kind: "rebuild",
    prompt,
    pieces: pieces(...pairList),
    answer,
    hint,
    tiles,
    requireSpeak,
  };
}

export function listen(
  id: string,
  target: string,
  meaning: string,
  prompt = "Listen. Do not peek yet. What does it mean?",
): Step {
  return { id, kind: "listen", target, meaning, prompt };
}

export function drill(
  id: string,
  prompt: string,
  pairList: Array<[string, string]>,
  answer: string,
  hint: string,
  tiles: string[],
): Drill {
  return {
    id,
    prompt,
    pieces: pieces(...pairList),
    answer,
    hint,
    tiles,
  };
}

export function isBuildStep(
  step: Step,
): step is Extract<Step, { kind: "construct" | "rebuild" }> {
  return step.kind === "construct" || step.kind === "rebuild";
}

export function lessonSteps(lesson: Lesson, intensive: boolean): Step[] {
  return intensive ? [...lesson.steps, ...lesson.intensiveSteps] : lesson.steps;
}

export function estimatedMinutes(lesson: Lesson, intensive: boolean) {
  if (!intensive) return lesson.minutes;
  return Math.min(25, lesson.minutes + Math.max(4, lesson.intensiveSteps.length * 2));
}

export function constructCount(course: Course) {
  return course.lessons.reduce((sum, lesson) => {
    const count = (steps: Step[]) => steps.filter(isBuildStep).length;
    return sum + count(lesson.steps) + count(lesson.intensiveSteps);
  }, 0);
}

export function recallFromLessons(course: Course): Drill[] {
  if (course.recall.length) return course.recall;
  const items: Drill[] = [];
  for (const lesson of course.lessons) {
    for (const step of [...lesson.steps, ...lesson.intensiveSteps]) {
      if (!isBuildStep(step)) continue;
      items.push({
        id: `${lesson.id}-${step.id}`,
        prompt: step.prompt,
        pieces: step.pieces,
        answer: step.answer,
        tiles: step.tiles,
        hint: step.hint,
      });
    }
  }
  return items;
}
