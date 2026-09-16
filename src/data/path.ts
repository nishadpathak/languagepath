import { getCourse, type Piece } from "@/data/courses";

export type PathCity = {
  id: string;
  name: string;
  region: string;
};

export const pathCities: PathCity[] = [
  { id: "lisbon", name: "Lisbon", region: "Atlantic" },
  { id: "madrid", name: "Madrid", region: "Iberia" },
  { id: "barcelona", name: "Barcelona", region: "Mediterranean" },
  { id: "marseille", name: "Marseille", region: "Provence" },
  { id: "milan", name: "Milan", region: "Po Valley" },
  { id: "zagreb", name: "Zagreb", region: "Sava" },
  { id: "belgrade", name: "Belgrade", region: "Danube" },
  { id: "istanbul", name: "Istanbul", region: "Bosphorus" },
  { id: "tbilisi", name: "Tbilisi", region: "Caucasus" },
  { id: "baku", name: "Baku", region: "Caspian" },
  { id: "samarkand", name: "Samarkand", region: "Silk Road" },
  { id: "almaty", name: "Almaty", region: "Tian Shan" },
];

export type PathChallenge = {
  cityId: string;
  prompt: string;
  pieces: Piece[];
  tiles: string[];
  answer: string;
};

const spanishChallenges: PathChallenge[] = [
  {
    cityId: "lisbon",
    prompt: "At the first café, say “I want coffee.”",
    pieces: [
      { gloss: "I want", target: "quiero" },
      { gloss: "coffee", target: "café" },
    ],
    tiles: ["Quiero", "café."],
    answer: "Quiero café.",
  },
  {
    cityId: "madrid",
    prompt: "Ask politely: “I want water, please.”",
    pieces: [
      { gloss: "I want", target: "quiero" },
      { gloss: "water", target: "agua" },
      { gloss: "please", target: "por favor" },
    ],
    tiles: ["Quiero", "agua,", "por", "favor."],
    answer: "Quiero agua, por favor.",
  },
  {
    cityId: "barcelona",
    prompt: "Introduce yourself: “Hello, my name is Mara.”",
    pieces: [
      { gloss: "hello", target: "hola" },
      { gloss: "my name is", target: "me llamo" },
      { gloss: "Mara", target: "Mara" },
    ],
    tiles: ["Hola,", "me", "llamo", "Mara."],
    answer: "Hola, me llamo Mara.",
  },
  {
    cityId: "marseille",
    prompt: "Say where you are from: “I am from Spain.”",
    pieces: [
      { gloss: "I am", target: "soy" },
      { gloss: "from", target: "de" },
      { gloss: "Spain", target: "España" },
    ],
    tiles: ["Soy", "de", "España."],
    answer: "Soy de España.",
  },
  {
    cityId: "milan",
    prompt: "Decline a drink: “I don’t want coffee.”",
    pieces: [
      { gloss: "not", target: "no" },
      { gloss: "I want", target: "quiero" },
      { gloss: "coffee", target: "café" },
    ],
    tiles: ["No", "quiero", "café."],
    answer: "No quiero café.",
  },
  {
    cityId: "zagreb",
    prompt: "Admit a gap: “I don’t have water.”",
    pieces: [
      { gloss: "not", target: "no" },
      { gloss: "I have", target: "tengo" },
      { gloss: "water", target: "agua" },
    ],
    tiles: ["No", "tengo", "agua."],
    answer: "No tengo agua.",
  },
  {
    cityId: "belgrade",
    prompt: "Order two things: “I want coffee and water.”",
    pieces: [
      { gloss: "I want", target: "quiero" },
      { gloss: "coffee", target: "café" },
      { gloss: "and", target: "y" },
      { gloss: "water", target: "agua" },
    ],
    tiles: ["Quiero", "café", "y", "agua."],
    answer: "Quiero café y agua.",
  },
  {
    cityId: "istanbul",
    prompt: "Ask, then answer: “Where are you from? I am from Spain.”",
    pieces: [
      { gloss: "where are you from?", target: "¿De dónde eres?" },
      { gloss: "I am from Spain", target: "Soy de España" },
    ],
    tiles: ["¿De", "dónde", "eres?", "Soy", "de", "España."],
    answer: "¿De dónde eres? Soy de España.",
  },
  {
    cityId: "tbilisi",
    prompt: "Full hello: “Hello, I am Mara. Nice to meet you.”",
    pieces: [
      { gloss: "hello", target: "hola" },
      { gloss: "I am Mara", target: "soy Mara" },
      { gloss: "nice to meet you", target: "mucho gusto" },
    ],
    tiles: ["Hola,", "soy", "Mara.", "Mucho", "gusto."],
    answer: "Hola, soy Mara. Mucho gusto.",
  },
  {
    cityId: "baku",
    prompt: "Need versus have: “I want water. I don’t have coffee.”",
    pieces: [
      { gloss: "I want water", target: "Quiero agua" },
      { gloss: "I don’t have coffee", target: "No tengo café" },
    ],
    tiles: ["Quiero", "agua.", "No", "tengo", "café."],
    answer: "Quiero agua. No tengo café.",
  },
  {
    cityId: "samarkand",
    prompt: "A complete order: “I want a coffee, please.”",
    pieces: [
      { gloss: "I want", target: "quiero" },
      { gloss: "a coffee", target: "un café" },
      { gloss: "please", target: "por favor" },
    ],
    tiles: ["Quiero", "un", "café,", "por", "favor."],
    answer: "Quiero un café, por favor.",
  },
  {
    cityId: "almaty",
    prompt: "The last city: “Hello, I am Mara. I am from Spain.”",
    pieces: [
      { gloss: "hello", target: "hola" },
      { gloss: "I am Mara", target: "soy Mara" },
      { gloss: "I am from Spain", target: "soy de España" },
    ],
    tiles: ["Hola,", "soy", "Mara.", "Soy", "de", "España."],
    answer: "Hola, soy Mara. Soy de España.",
  },
];

const frenchChallenges: PathChallenge[] = [
  {
    cityId: "lisbon",
    prompt: "First counter: “I would like a coffee.”",
    pieces: [
      { gloss: "I would like", target: "je voudrais" },
      { gloss: "a coffee", target: "un café" },
    ],
    tiles: ["Je", "voudrais", "un", "café."],
    answer: "Je voudrais un café.",
  },
  {
    cityId: "madrid",
    prompt: "Add water: “I would like some water.”",
    pieces: [
      { gloss: "I would like", target: "je voudrais" },
      { gloss: "some water", target: "de l’eau" },
    ],
    tiles: ["Je", "voudrais", "de", "l’eau."],
    answer: "Je voudrais de l’eau.",
  },
  {
    cityId: "barcelona",
    prompt: "Be polite: “I would like a coffee, please.”",
    pieces: [
      { gloss: "I would like", target: "je voudrais" },
      { gloss: "a coffee", target: "un café" },
      { gloss: "please", target: "s’il vous plaît" },
    ],
    tiles: ["Je", "voudrais", "un", "café,", "s’il", "vous", "plaît."],
    answer: "Je voudrais un café, s’il vous plaît.",
  },
  {
    cityId: "marseille",
    prompt: "Give your name: “My name is Noémie.”",
    pieces: [
      { gloss: "my name is", target: "je m’appelle" },
      { gloss: "Noémie", target: "Noémie" },
    ],
    tiles: ["Je", "m’appelle", "Noémie."],
    answer: "Je m’appelle Noémie.",
  },
  {
    cityId: "milan",
    prompt: "Greet and name yourself: “Hello, I am Noémie.”",
    pieces: [
      { gloss: "hello", target: "bonjour" },
      { gloss: "I am", target: "je suis" },
      { gloss: "Noémie", target: "Noémie" },
    ],
    tiles: ["Bonjour,", "je", "suis", "Noémie."],
    answer: "Bonjour, je suis Noémie.",
  },
  {
    cityId: "zagreb",
    prompt: "Origin: “I come from France.”",
    pieces: [
      { gloss: "I come from", target: "je viens de" },
      { gloss: "France", target: "France" },
    ],
    tiles: ["Je", "viens", "de", "France."],
    answer: "Je viens de France.",
  },
  {
    cityId: "belgrade",
    prompt: "Ask and answer origin.",
    pieces: [
      { gloss: "where do you come from?", target: "Vous venez d’où ?" },
      { gloss: "I come from France", target: "Je viens de France" },
    ],
    tiles: ["Vous", "venez", "d’où", "?", "Je", "viens", "de", "France."],
    answer: "Vous venez d’où ? Je viens de France.",
  },
  {
    cityId: "istanbul",
    prompt: "Two drinks: “I would like a coffee and some water, please.”",
    pieces: [
      { gloss: "I would like", target: "je voudrais" },
      { gloss: "a coffee", target: "un café" },
      { gloss: "and", target: "et" },
      { gloss: "some water", target: "de l’eau" },
      { gloss: "please", target: "s’il vous plaît" },
    ],
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
    answer: "Je voudrais un café et de l’eau, s’il vous plaît.",
  },
  {
    cityId: "tbilisi",
    prompt: "Meet someone: “Hello, my name is Noémie. Pleased to meet you.”",
    pieces: [
      { gloss: "hello", target: "bonjour" },
      { gloss: "my name is Noémie", target: "je m’appelle Noémie" },
      { gloss: "pleased to meet you", target: "enchanté" },
    ],
    tiles: ["Bonjour,", "je", "m’appelle", "Noémie.", "Enchanté."],
    answer: "Bonjour, je m’appelle Noémie. Enchanté.",
  },
  {
    cityId: "baku",
    prompt: "Long hello: “Hello, I am Noémie. I come from France.”",
    pieces: [
      { gloss: "hello", target: "bonjour" },
      { gloss: "I am Noémie", target: "je suis Noémie" },
      { gloss: "I come from France", target: "je viens de France" },
    ],
    tiles: ["Bonjour,", "je", "suis", "Noémie.", "Je", "viens", "de", "France."],
    answer: "Bonjour, je suis Noémie. Je viens de France.",
  },
  {
    cityId: "samarkand",
    prompt: "Repeat the polite coffee line from memory.",
    pieces: [
      { gloss: "I would like", target: "je voudrais" },
      { gloss: "a coffee", target: "un café" },
      { gloss: "please", target: "s’il vous plaît" },
    ],
    tiles: ["Je", "voudrais", "un", "café,", "s’il", "vous", "plaît."],
    answer: "Je voudrais un café, s’il vous plaît.",
  },
  {
    cityId: "almaty",
    prompt: "Last stop: rebuild “Hello, I am Noémie. I come from France.”",
    pieces: [
      { gloss: "hello", target: "bonjour" },
      { gloss: "I am Noémie", target: "je suis Noémie" },
      { gloss: "I come from France", target: "je viens de France" },
    ],
    tiles: ["Bonjour,", "je", "suis", "Noémie.", "Je", "viens", "de", "France."],
    answer: "Bonjour, je suis Noémie. Je viens de France.",
  },
];

const challengesByCourse: Record<string, PathChallenge[]> = {
  es: spanishChallenges,
  fr: frenchChallenges,
};

export function pathForCourse(courseId: string) {
  const course = getCourse(courseId) ?? getCourse("es");
  const challenges = challengesByCourse[course?.id ?? "es"] ?? spanishChallenges;
  return pathCities.map((city, index) => ({
    ...city,
    index,
    challenge: challenges[index],
  }));
}

export function shuffleTiles(tiles: string[], salt: string) {
  const copy = [...tiles];
  let seed = 0;
  for (let i = 0; i < salt.length; i += 1) seed += salt.charCodeAt(i);
  for (let i = copy.length - 1; i > 0; i -= 1) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = seed % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function tilesMatch(built: string[], expected: string[]) {
  return built.join(" ").replace(/\s+/g, " ") === expected.join(" ").replace(/\s+/g, " ");
}
