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
      kind: "construct";
      prompt: string;
      pieces: Piece[];
      answer: string;
      hint: string;
      tiles: string[];
      requireSpeak?: boolean;
    };

export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  steps: Step[];
  intensiveSteps: Step[];
};

export type Course = {
  id: string;
  name: string;
  language: string;
  locale: string;
  tagline: string;
  color: string;
  lessons: Lesson[];
};

const spanish: Course = {
  id: "es",
  name: "Spanish",
  language: "Spanish",
  locale: "es-ES",
  tagline: "Build café-table sentences from pieces you already hold.",
  color: "#C24D1E",
  lessons: [
    {
      id: "es-want",
      title: "Wanting something",
      minutes: 10,
      summary: "Quiero + a thing. Then add please.",
      steps: [
        {
          id: "t1",
          kind: "teach",
          target: "quiero",
          gloss: "I want",
          note: "Use this when you want a thing, not when you like it.",
        },
        {
          id: "t2",
          kind: "teach",
          target: "café",
          gloss: "coffee",
          note: "The drink, not the shop. Stress the second syllable: ca-FÉ.",
        },
        {
          id: "c1",
          kind: "construct",
          prompt: "How would you say “I want coffee”?",
          pieces: [
            { gloss: "I want", target: "quiero" },
            { gloss: "coffee", target: "café" },
          ],
          answer: "Quiero café.",
          hint: "Wanting first, then the thing.",
          tiles: ["Quiero", "café."],
        },
        {
          id: "t3",
          kind: "teach",
          target: "agua",
          gloss: "water",
          note: "Same slot as café: it is just the thing you want.",
        },
        {
          id: "c2",
          kind: "construct",
          prompt: "Now say “I want water.”",
          pieces: [
            { gloss: "I want", target: "quiero" },
            { gloss: "water", target: "agua" },
          ],
          answer: "Quiero agua.",
          hint: "Swap only the thing. Keep quiero.",
          tiles: ["Quiero", "agua."],
        },
        {
          id: "t4",
          kind: "teach",
          target: "por favor",
          gloss: "please",
          note: "Tuck it at the end. It does not change the rest of the sentence.",
        },
        {
          id: "c3",
          kind: "construct",
          prompt: "Say “I want coffee, please.”",
          pieces: [
            { gloss: "I want", target: "quiero" },
            { gloss: "coffee", target: "café" },
            { gloss: "please", target: "por favor" },
          ],
          answer: "Quiero café, por favor.",
          hint: "Keep the same order as English: want → thing → please.",
          tiles: ["Quiero", "café,", "por", "favor."],
        },
      ],
      intensiveSteps: [
        {
          id: "it1",
          kind: "teach",
          target: "y",
          gloss: "and",
          note: "Join two things you want. One quiero is enough.",
        },
        {
          id: "ic1",
          kind: "construct",
          prompt: "Say “I want coffee and water.”",
          pieces: [
            { gloss: "I want", target: "quiero" },
            { gloss: "coffee", target: "café" },
            { gloss: "and", target: "y" },
            { gloss: "water", target: "agua" },
          ],
          answer: "Quiero café y agua.",
          hint: "Do not repeat quiero.",
          tiles: ["Quiero", "café", "y", "agua."],
          requireSpeak: true,
        },
        {
          id: "ic2",
          kind: "construct",
          prompt: "Say “I want coffee and water, please.”",
          pieces: [
            { gloss: "I want", target: "quiero" },
            { gloss: "coffee", target: "café" },
            { gloss: "and", target: "y" },
            { gloss: "water", target: "agua" },
            { gloss: "please", target: "por favor" },
          ],
          answer: "Quiero café y agua, por favor.",
          hint: "Please still sits at the end.",
          tiles: ["Quiero", "café", "y", "agua,", "por", "favor."],
          requireSpeak: true,
        },
        {
          id: "it2",
          kind: "teach",
          target: "un",
          gloss: "a / one (masculine)",
          note: "Café takes un. You do not need it every time, but it sounds complete.",
        },
        {
          id: "ic3",
          kind: "construct",
          prompt: "Say “I want a coffee, please.”",
          pieces: [
            { gloss: "I want", target: "quiero" },
            { gloss: "a", target: "un" },
            { gloss: "coffee", target: "café" },
            { gloss: "please", target: "por favor" },
          ],
          answer: "Quiero un café, por favor.",
          hint: "un café, not un por favor.",
          tiles: ["Quiero", "un", "café,", "por", "favor."],
          requireSpeak: true,
        },
      ],
    },
    {
      id: "es-name",
      title: "Names at the table",
      minutes: 10,
      summary: "Soy, me llamo, and a first greeting.",
      steps: [
        {
          id: "t1",
          kind: "teach",
          target: "hola",
          gloss: "hello",
          note: "The door into every first conversation.",
        },
        {
          id: "t2",
          kind: "teach",
          target: "soy",
          gloss: "I am",
          note: "Follow it with a name or a description. Not with a thing you want.",
        },
        {
          id: "c1",
          kind: "construct",
          prompt: "Say “I am Mara.”",
          pieces: [
            { gloss: "I am", target: "soy" },
            { gloss: "Mara", target: "Mara" },
          ],
          answer: "Soy Mara.",
          hint: "No extra verb. Soy already means I am.",
          tiles: ["Soy", "Mara."],
        },
        {
          id: "t3",
          kind: "teach",
          target: "me llamo",
          gloss: "my name is / I am called",
          note: "Literal shape: “I call myself.” Then the name.",
        },
        {
          id: "c2",
          kind: "construct",
          prompt: "Say “My name is Mara.”",
          pieces: [
            { gloss: "my name is", target: "me llamo" },
            { gloss: "Mara", target: "Mara" },
          ],
          answer: "Me llamo Mara.",
          hint: "Keep me llamo together.",
          tiles: ["Me", "llamo", "Mara."],
        },
        {
          id: "c3",
          kind: "construct",
          prompt: "Say “Hello, my name is Mara.”",
          pieces: [
            { gloss: "hello", target: "hola" },
            { gloss: "my name is", target: "me llamo" },
            { gloss: "Mara", target: "Mara" },
          ],
          answer: "Hola, me llamo Mara.",
          hint: "Greeting first, then the name line.",
          tiles: ["Hola,", "me", "llamo", "Mara."],
        },
      ],
      intensiveSteps: [
        {
          id: "it1",
          kind: "teach",
          target: "mucho gusto",
          gloss: "nice to meet you",
          note: "After a name. You can answer with the same phrase.",
        },
        {
          id: "ic1",
          kind: "construct",
          prompt: "Say “Hello, I am Mara. Nice to meet you.”",
          pieces: [
            { gloss: "hello", target: "hola" },
            { gloss: "I am", target: "soy" },
            { gloss: "Mara", target: "Mara" },
            { gloss: "nice to meet you", target: "mucho gusto" },
          ],
          answer: "Hola, soy Mara. Mucho gusto.",
          hint: "Two short sentences, not one long one.",
          tiles: ["Hola,", "soy", "Mara.", "Mucho", "gusto."],
          requireSpeak: true,
        },
      ],
    },
    {
      id: "es-from",
      title: "Where you are from",
      minutes: 11,
      summary: "Soy de + a place, then ask the same of someone else.",
      steps: [
        {
          id: "t1",
          kind: "teach",
          target: "de",
          gloss: "from / of",
          note: "After soy, de points at origin.",
        },
        {
          id: "t2",
          kind: "teach",
          target: "España",
          gloss: "Spain",
          note: "Country names stay capitalized.",
        },
        {
          id: "c1",
          kind: "construct",
          prompt: "Say “I am from Spain.”",
          pieces: [
            { gloss: "I am", target: "soy" },
            { gloss: "from", target: "de" },
            { gloss: "Spain", target: "España" },
          ],
          answer: "Soy de España.",
          hint: "soy de, never soy from.",
          tiles: ["Soy", "de", "España."],
        },
        {
          id: "t3",
          kind: "teach",
          target: "¿De dónde eres?",
          gloss: "Where are you from?",
          note: "Eres is “you are.” De dónde is “from where.”",
        },
        {
          id: "c2",
          kind: "construct",
          prompt: "Ask “Where are you from?” then answer “I am from Spain.”",
          pieces: [
            { gloss: "where are you from?", target: "¿De dónde eres?" },
            { gloss: "I am from Spain", target: "Soy de España" },
          ],
          answer: "¿De dónde eres? Soy de España.",
          hint: "Question first, then your line.",
          tiles: ["¿De", "dónde", "eres?", "Soy", "de", "España."],
        },
      ],
      intensiveSteps: [
        {
          id: "ic1",
          kind: "construct",
          prompt: "Say “Hello, I am Mara. I am from Spain.”",
          pieces: [
            { gloss: "hello", target: "hola" },
            { gloss: "I am", target: "soy" },
            { gloss: "Mara", target: "Mara" },
            { gloss: "from Spain", target: "de España" },
          ],
          answer: "Hola, soy Mara. Soy de España.",
          hint: "Repeat soy. Do not stretch one soy across both ideas.",
          tiles: ["Hola,", "soy", "Mara.", "Soy", "de", "España."],
          requireSpeak: true,
        },
      ],
    },
    {
      id: "es-have",
      title: "Having and not having",
      minutes: 10,
      summary: "Tengo, then flip it with no.",
      steps: [
        {
          id: "t1",
          kind: "teach",
          target: "tengo",
          gloss: "I have",
          note: "A different verb from quiero. You can have something you do not want.",
        },
        {
          id: "c1",
          kind: "construct",
          prompt: "Say “I have coffee.”",
          pieces: [
            { gloss: "I have", target: "tengo" },
            { gloss: "coffee", target: "café" },
          ],
          answer: "Tengo café.",
          hint: "Same slot as quiero, new verb.",
          tiles: ["Tengo", "café."],
        },
        {
          id: "t2",
          kind: "teach",
          target: "no",
          gloss: "not / no",
          note: "Put no right before the verb: no tengo, no quiero.",
        },
        {
          id: "c2",
          kind: "construct",
          prompt: "Say “I don’t have water.”",
          pieces: [
            { gloss: "not", target: "no" },
            { gloss: "I have", target: "tengo" },
            { gloss: "water", target: "agua" },
          ],
          answer: "No tengo agua.",
          hint: "no + verb + thing.",
          tiles: ["No", "tengo", "agua."],
        },
        {
          id: "c3",
          kind: "construct",
          prompt: "Say “I don’t want coffee.”",
          pieces: [
            { gloss: "not", target: "no" },
            { gloss: "I want", target: "quiero" },
            { gloss: "coffee", target: "café" },
          ],
          answer: "No quiero café.",
          hint: "The no still sits on the verb, not on café.",
          tiles: ["No", "quiero", "café."],
        },
      ],
      intensiveSteps: [
        {
          id: "ic1",
          kind: "construct",
          prompt: "Say “I want water. I don’t have coffee.”",
          pieces: [
            { gloss: "I want water", target: "Quiero agua" },
            { gloss: "I don’t have coffee", target: "No tengo café" },
          ],
          answer: "Quiero agua. No tengo café.",
          hint: "Two verbs, two sentences.",
          tiles: ["Quiero", "agua.", "No", "tengo", "café."],
          requireSpeak: true,
        },
      ],
    },
  ],
};

const french: Course = {
  id: "fr",
  name: "French",
  language: "French",
  locale: "fr-FR",
  tagline: "Reason out café French, then say it before you peek.",
  color: "#2C4A3E",
  lessons: [
    {
      id: "fr-want",
      title: "Wanting at the counter",
      minutes: 10,
      summary: "Je voudrais + a drink, then s’il vous plaît.",
      steps: [
        {
          id: "t1",
          kind: "teach",
          target: "je voudrais",
          gloss: "I would like",
          note: "Softer than “I want.” This is the café default.",
        },
        {
          id: "t2",
          kind: "teach",
          target: "un café",
          gloss: "a coffee",
          note: "un marks a masculine thing. Keep it with café.",
        },
        {
          id: "c1",
          kind: "construct",
          prompt: "How would you say “I would like a coffee”?",
          pieces: [
            { gloss: "I would like", target: "je voudrais" },
            { gloss: "a coffee", target: "un café" },
          ],
          answer: "Je voudrais un café.",
          hint: "Polite verb first, then the drink.",
          tiles: ["Je", "voudrais", "un", "café."],
        },
        {
          id: "t3",
          kind: "teach",
          target: "de l’eau",
          gloss: "some water",
          note: "Water is feminine; de l’ is the form before a vowel.",
        },
        {
          id: "c2",
          kind: "construct",
          prompt: "Say “I would like some water.”",
          pieces: [
            { gloss: "I would like", target: "je voudrais" },
            { gloss: "some water", target: "de l’eau" },
          ],
          answer: "Je voudrais de l’eau.",
          hint: "Do not force un onto eau.",
          tiles: ["Je", "voudrais", "de", "l’eau."],
        },
        {
          id: "t4",
          kind: "teach",
          target: "s’il vous plaît",
          gloss: "please (formal / polite)",
          note: "Park it at the end, after the thing.",
        },
        {
          id: "c3",
          kind: "construct",
          prompt: "Say “I would like a coffee, please.”",
          pieces: [
            { gloss: "I would like", target: "je voudrais" },
            { gloss: "a coffee", target: "un café" },
            { gloss: "please", target: "s’il vous plaît" },
          ],
          answer: "Je voudrais un café, s’il vous plaît.",
          hint: "Please does not split je voudrais.",
          tiles: ["Je", "voudrais", "un", "café,", "s’il", "vous", "plaît."],
        },
      ],
      intensiveSteps: [
        {
          id: "it1",
          kind: "teach",
          target: "et",
          gloss: "and",
          note: "Join two drinks under one je voudrais.",
        },
        {
          id: "ic1",
          kind: "construct",
          prompt: "Say “I would like a coffee and some water, please.”",
          pieces: [
            { gloss: "I would like", target: "je voudrais" },
            { gloss: "a coffee", target: "un café" },
            { gloss: "and", target: "et" },
            { gloss: "some water", target: "de l’eau" },
            { gloss: "please", target: "s’il vous plaît" },
          ],
          answer: "Je voudrais un café et de l’eau, s’il vous plaît.",
          hint: "One verb, two drinks, please last.",
          tiles: [
            "Je",
            "voudrais",
            "un",
            "café",
            "et",
            "de",
            "l’eau,",
            "s’il",
            "vous",
            "plaît.",
          ],
          requireSpeak: true,
        },
      ],
    },
    {
      id: "fr-name",
      title: "Saying who you are",
      minutes: 10,
      summary: "Je m’appelle, je suis, bonjour.",
      steps: [
        {
          id: "t1",
          kind: "teach",
          target: "bonjour",
          gloss: "hello / good day",
          note: "Daytime greeting. Keep it even in a café queue.",
        },
        {
          id: "t2",
          kind: "teach",
          target: "je m’appelle",
          gloss: "my name is",
          note: "Literal shape: “I call myself.”",
        },
        {
          id: "c1",
          kind: "construct",
          prompt: "Say “My name is Noémie.”",
          pieces: [
            { gloss: "my name is", target: "je m’appelle" },
            { gloss: "Noémie", target: "Noémie" },
          ],
          answer: "Je m’appelle Noémie.",
          hint: "Name last, no extra est.",
          tiles: ["Je", "m’appelle", "Noémie."],
        },
        {
          id: "t3",
          kind: "teach",
          target: "je suis",
          gloss: "I am",
          note: "For a name or a job. Not for a drink you want.",
        },
        {
          id: "c2",
          kind: "construct",
          prompt: "Say “Hello, I am Noémie.”",
          pieces: [
            { gloss: "hello", target: "bonjour" },
            { gloss: "I am", target: "je suis" },
            { gloss: "Noémie", target: "Noémie" },
          ],
          answer: "Bonjour, je suis Noémie.",
          hint: "Greeting, then je suis.",
          tiles: ["Bonjour,", "je", "suis", "Noémie."],
        },
      ],
      intensiveSteps: [
        {
          id: "it1",
          kind: "teach",
          target: "enchanté",
          gloss: "pleased to meet you",
          note: "A speaker who uses masculine agreement can say enchanté. (enchantée with an extra e is the feminine form.)",
        },
        {
          id: "ic1",
          kind: "construct",
          prompt: "Say “Hello, my name is Noémie. Pleased to meet you.”",
          pieces: [
            { gloss: "hello", target: "bonjour" },
            { gloss: "my name is Noémie", target: "je m’appelle Noémie" },
            { gloss: "pleased to meet you", target: "enchanté" },
          ],
          answer: "Bonjour, je m’appelle Noémie. Enchanté.",
          hint: "Two beats: greeting+name, then the nicety.",
          tiles: ["Bonjour,", "je", "m’appelle", "Noémie.", "Enchanté."],
          requireSpeak: true,
        },
      ],
    },
    {
      id: "fr-from",
      title: "Where you come from",
      minutes: 11,
      summary: "Je viens de, then ask the same question.",
      steps: [
        {
          id: "t1",
          kind: "teach",
          target: "je viens de",
          gloss: "I come from",
          note: "Origin. de stays attached to the verb phrase.",
        },
        {
          id: "t2",
          kind: "teach",
          target: "France",
          gloss: "France",
          note: "After de, country names often drop an article in this first pattern.",
        },
        {
          id: "c1",
          kind: "construct",
          prompt: "Say “I come from France.”",
          pieces: [
            { gloss: "I come from", target: "je viens de" },
            { gloss: "France", target: "France" },
          ],
          answer: "Je viens de France.",
          hint: "Do not add suis here.",
          tiles: ["Je", "viens", "de", "France."],
        },
        {
          id: "t3",
          kind: "teach",
          target: "Vous venez d’où ?",
          gloss: "Where do you come from?",
          note: "Vous is the polite you. d’où is “from where.”",
        },
        {
          id: "c2",
          kind: "construct",
          prompt: "Ask where someone is from, then answer that you come from France.",
          pieces: [
            { gloss: "where do you come from?", target: "Vous venez d’où ?" },
            { gloss: "I come from France", target: "Je viens de France" },
          ],
          answer: "Vous venez d’où ? Je viens de France.",
          hint: "Question, then your matching answer.",
          tiles: ["Vous", "venez", "d’où", "?", "Je", "viens", "de", "France."],
        },
      ],
      intensiveSteps: [
        {
          id: "ic1",
          kind: "construct",
          prompt: "Say “Hello, I am Noémie. I come from France.”",
          pieces: [
            { gloss: "hello", target: "bonjour" },
            { gloss: "I am Noémie", target: "je suis Noémie" },
            { gloss: "I come from France", target: "je viens de France" },
          ],
          answer: "Bonjour, je suis Noémie. Je viens de France.",
          hint: "Keep je suis and je viens as separate sentences.",
          tiles: [
            "Bonjour,",
            "je",
            "suis",
            "Noémie.",
            "Je",
            "viens",
            "de",
            "France.",
          ],
          requireSpeak: true,
        },
      ],
    },
  ],
};

export const courses: Course[] = [spanish, french];

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

export function lessonSteps(lesson: Lesson, intensive: boolean): Step[] {
  return intensive ? [...lesson.steps, ...lesson.intensiveSteps] : lesson.steps;
}

export function estimatedMinutes(lesson: Lesson, intensive: boolean) {
  if (!intensive) return lesson.minutes;
  return Math.min(25, lesson.minutes + lesson.intensiveSteps.length * 3);
}

export function constructCount(course: Course) {
  return course.lessons.reduce(
    (sum, lesson) =>
      sum +
      lesson.steps.filter((step) => step.kind === "construct").length +
      lesson.intensiveSteps.filter((step) => step.kind === "construct").length,
    0,
  );
}
