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

const germanChallenges: PathChallenge[] = [
  {
    cityId: "lisbon",
    prompt: "At the first café, say “I would like coffee.”",
    pieces: [
      { gloss: "I would like", target: "ich möchte" },
      { gloss: "coffee", target: "Kaffee" },
    ],
    tiles: ["Ich", "möchte", "Kaffee."],
    answer: "Ich möchte Kaffee.",
  },
  {
    cityId: "madrid",
    prompt: "Ask politely: “I would like water, please.”",
    pieces: [
      { gloss: "I would like", target: "ich möchte" },
      { gloss: "water", target: "Wasser" },
      { gloss: "please", target: "bitte" },
    ],
    tiles: ["Ich", "möchte", "Wasser,", "bitte."],
    answer: "Ich möchte Wasser, bitte.",
  },
  {
    cityId: "barcelona",
    prompt: "Introduce yourself: “Hello, my name is Lena.”",
    pieces: [
      { gloss: "hello", target: "hallo" },
      { gloss: "my name is", target: "ich heiße" },
      { gloss: "Lena", target: "Lena" },
    ],
    tiles: ["Hallo,", "ich", "heiße", "Lena."],
    answer: "Hallo, ich heiße Lena.",
  },
  {
    cityId: "marseille",
    prompt: "Say where you come from: “I come from Germany.”",
    pieces: [
      { gloss: "I come from", target: "ich komme aus" },
      { gloss: "Germany", target: "Deutschland" },
    ],
    tiles: ["Ich", "komme", "aus", "Deutschland."],
    answer: "Ich komme aus Deutschland.",
  },
  {
    cityId: "milan",
    prompt: "Decline a drink: “I would not like coffee.”",
    pieces: [
      { gloss: "I would not like", target: "ich möchte keinen" },
      { gloss: "coffee", target: "Kaffee" },
    ],
    tiles: ["Ich", "möchte", "keinen", "Kaffee."],
    answer: "Ich möchte keinen Kaffee.",
  },
  {
    cityId: "zagreb",
    prompt: "Admit a gap: “I don’t have water.”",
    pieces: [
      { gloss: "I have", target: "ich habe" },
      { gloss: "no water", target: "kein Wasser" },
    ],
    tiles: ["Ich", "habe", "kein", "Wasser."],
    answer: "Ich habe kein Wasser.",
  },
  {
    cityId: "belgrade",
    prompt: "Order two things: “I would like coffee and water.”",
    pieces: [
      { gloss: "I would like", target: "ich möchte" },
      { gloss: "coffee", target: "Kaffee" },
      { gloss: "and", target: "und" },
      { gloss: "water", target: "Wasser" },
    ],
    tiles: ["Ich", "möchte", "Kaffee", "und", "Wasser."],
    answer: "Ich möchte Kaffee und Wasser.",
  },
  {
    cityId: "istanbul",
    prompt: "Ask, then answer origin.",
    pieces: [
      { gloss: "where do you come from?", target: "Woher kommst du?" },
      { gloss: "I come from Germany", target: "Ich komme aus Deutschland" },
    ],
    tiles: ["Woher", "kommst", "du?", "Ich", "komme", "aus", "Deutschland."],
    answer: "Woher kommst du? Ich komme aus Deutschland.",
  },
  {
    cityId: "tbilisi",
    prompt: "Full hello: “Hello, I am Lena. Nice to meet you.”",
    pieces: [
      { gloss: "hello", target: "hallo" },
      { gloss: "I am Lena", target: "ich bin Lena" },
      { gloss: "nice to meet you", target: "freut mich" },
    ],
    tiles: ["Hallo,", "ich", "bin", "Lena.", "Freut", "mich."],
    answer: "Hallo, ich bin Lena. Freut mich.",
  },
  {
    cityId: "baku",
    prompt: "Need versus have: “I would like water. I don’t have coffee.”",
    pieces: [
      { gloss: "I would like water", target: "Ich möchte Wasser" },
      { gloss: "I don’t have coffee", target: "Ich habe keinen Kaffee" },
    ],
    tiles: ["Ich", "möchte", "Wasser.", "Ich", "habe", "keinen", "Kaffee."],
    answer: "Ich möchte Wasser. Ich habe keinen Kaffee.",
  },
  {
    cityId: "samarkand",
    prompt: "A complete order: “I would like a coffee, please.”",
    pieces: [
      { gloss: "I would like", target: "ich möchte" },
      { gloss: "a coffee", target: "einen Kaffee" },
      { gloss: "please", target: "bitte" },
    ],
    tiles: ["Ich", "möchte", "einen", "Kaffee,", "bitte."],
    answer: "Ich möchte einen Kaffee, bitte.",
  },
  {
    cityId: "almaty",
    prompt: "The last city: “Hello, I am Lena. I come from Germany.”",
    pieces: [
      { gloss: "hello", target: "hallo" },
      { gloss: "I am Lena", target: "ich bin Lena" },
      { gloss: "I come from Germany", target: "ich komme aus Deutschland" },
    ],
    tiles: ["Hallo,", "ich", "bin", "Lena.", "Ich", "komme", "aus", "Deutschland."],
    answer: "Hallo, ich bin Lena. Ich komme aus Deutschland.",
  },
];

const portugueseChallenges: PathChallenge[] = [
  {
    cityId: "lisbon",
    prompt: "At the first café, say “I want coffee.”",
    pieces: [
      { gloss: "I want", target: "quero" },
      { gloss: "coffee", target: "café" },
    ],
    tiles: ["Quero", "café."],
    answer: "Quero café.",
  },
  {
    cityId: "madrid",
    prompt: "Ask politely: “I want water, please.”",
    pieces: [
      { gloss: "I want", target: "quero" },
      { gloss: "water", target: "água" },
      { gloss: "please", target: "por favor" },
    ],
    tiles: ["Quero", "água,", "por", "favor."],
    answer: "Quero água, por favor.",
  },
  {
    cityId: "barcelona",
    prompt: "Introduce yourself: “Hello, my name is Inês.”",
    pieces: [
      { gloss: "hello", target: "olá" },
      { gloss: "my name is", target: "chamo-me" },
      { gloss: "Inês", target: "Inês" },
    ],
    tiles: ["Olá,", "chamo-me", "Inês."],
    answer: "Olá, chamo-me Inês.",
  },
  {
    cityId: "marseille",
    prompt: "Say where you are from: “I am from Portugal.”",
    pieces: [
      { gloss: "I am", target: "sou" },
      { gloss: "from", target: "de" },
      { gloss: "Portugal", target: "Portugal" },
    ],
    tiles: ["Sou", "de", "Portugal."],
    answer: "Sou de Portugal.",
  },
  {
    cityId: "milan",
    prompt: "Decline a drink: “I don’t want coffee.”",
    pieces: [
      { gloss: "not", target: "não" },
      { gloss: "I want", target: "quero" },
      { gloss: "coffee", target: "café" },
    ],
    tiles: ["Não", "quero", "café."],
    answer: "Não quero café.",
  },
  {
    cityId: "zagreb",
    prompt: "Admit a gap: “I don’t have water.”",
    pieces: [
      { gloss: "not", target: "não" },
      { gloss: "I have", target: "tenho" },
      { gloss: "water", target: "água" },
    ],
    tiles: ["Não", "tenho", "água."],
    answer: "Não tenho água.",
  },
  {
    cityId: "belgrade",
    prompt: "Order two things: “I want coffee and water.”",
    pieces: [
      { gloss: "I want", target: "quero" },
      { gloss: "coffee", target: "café" },
      { gloss: "and", target: "e" },
      { gloss: "water", target: "água" },
    ],
    tiles: ["Quero", "café", "e", "água."],
    answer: "Quero café e água.",
  },
  {
    cityId: "istanbul",
    prompt: "Ask, then answer: “Where are you from? I am from Portugal.”",
    pieces: [
      { gloss: "where are you from?", target: "De onde és?" },
      { gloss: "I am from Portugal", target: "Sou de Portugal" },
    ],
    tiles: ["De", "onde", "és?", "Sou", "de", "Portugal."],
    answer: "De onde és? Sou de Portugal.",
  },
  {
    cityId: "tbilisi",
    prompt: "Full hello: “Hello, I am Inês. Nice to meet you.”",
    pieces: [
      { gloss: "hello", target: "olá" },
      { gloss: "I am Inês", target: "sou Inês" },
      { gloss: "nice to meet you", target: "prazer" },
    ],
    tiles: ["Olá,", "sou", "Inês.", "Prazer."],
    answer: "Olá, sou Inês. Prazer.",
  },
  {
    cityId: "baku",
    prompt: "Need versus have: “I want water. I don’t have coffee.”",
    pieces: [
      { gloss: "I want water", target: "Quero água" },
      { gloss: "I don’t have coffee", target: "Não tenho café" },
    ],
    tiles: ["Quero", "água.", "Não", "tenho", "café."],
    answer: "Quero água. Não tenho café.",
  },
  {
    cityId: "samarkand",
    prompt: "A complete order: “I want a coffee, please.”",
    pieces: [
      { gloss: "I want", target: "quero" },
      { gloss: "a coffee", target: "um café" },
      { gloss: "please", target: "por favor" },
    ],
    tiles: ["Quero", "um", "café,", "por", "favor."],
    answer: "Quero um café, por favor.",
  },
  {
    cityId: "almaty",
    prompt: "The last city: “Hello, I am Inês. I am from Portugal.”",
    pieces: [
      { gloss: "hello", target: "olá" },
      { gloss: "I am Inês", target: "sou Inês" },
      { gloss: "I am from Portugal", target: "sou de Portugal" },
    ],
    tiles: ["Olá,", "sou", "Inês.", "Sou", "de", "Portugal."],
    answer: "Olá, sou Inês. Sou de Portugal.",
  },
];

const challengesByCourse: Record<string, PathChallenge[]> = {
  es: spanishChallenges,
  fr: frenchChallenges,
  de: germanChallenges,
  pt: portugueseChallenges,
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
