import { getCourse, type Course } from "@/data/courses";

export type ChatMessage = { role: "user" | "assistant"; content: string };

export const GROK_CHAT_URL = "https://api.x.ai/v1/chat/completions";
export const DEFAULT_GROK_MODEL = "grok-4.7";

export function tutorProvider() {
  if (process.env.XAI_API_KEY) return "grok" as const;
  if (process.env.OPENAI_API_KEY) return "openai" as const;
  return "local" as const;
}

export function tutorSystemPrompt(course: Course) {
  const samples = course.recall
    .slice(0, 8)
    .map((item) => item.answer)
    .join(" · ");
  return [
    `You are GrokBot, LanguagePath’s beginner conversation partner for ${course.language}.`,
    "Stay inside A1–A2. Prefer two short sentences. Follow the method: construct from known pieces, say it aloud, then check.",
    `If the learner uses English, ask them to try ${course.language} and offer one model sentence they can actually build.`,
    "Gently correct by restating the line, not by lecturing. Do not invent advanced grammar.",
    samples ? `Sentences they already built: ${samples}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function courseSample(course: Course) {
  if (course.recall[0]?.answer) return course.recall[0].answer;
  for (const lesson of course.lessons) {
    for (const step of lesson.steps) {
      if (step.kind === "construct" || step.kind === "rebuild") return step.answer;
    }
  }
  return "Quiero café.";
}

export function localTutor(courseId: string, messages: ChatMessage[]) {
  const course = getCourse(courseId) ?? getCourse("es")!;
  const last = messages.filter((message) => message.role === "user").at(-1)?.content ?? "";
  const sample = courseSample(course);
  if (!last.trim()) {
    return `Try building one sentence in ${course.language}. Example: ${sample}`;
  }
  if (last.length < 8) {
    return `A bit short. Stretch it with a piece you already have. In ${course.language} you could try: ${sample}`;
  }
  return `Good — keep it in ${course.language}. I would answer simply: “${sample}” Then rebuild it from the pieces, out loud.`;
}

async function chatCompletions(options: {
  url: string;
  key: string;
  model: string;
  course: Course;
  messages: ChatMessage[];
}) {
  const response = await fetch(options.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${options.key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: options.model,
      temperature: 0.4,
      messages: [
        { role: "system", content: tutorSystemPrompt(options.course) },
        ...options.messages.map((message) => ({
          role: message.role,
          content: message.content,
        })),
      ],
    }),
  });
  if (!response.ok) return null;
  const body = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  return body.choices?.[0]?.message?.content?.trim() || null;
}

export async function grokTutor(courseId: string, messages: ChatMessage[]) {
  const key = process.env.XAI_API_KEY;
  if (!key) return localTutor(courseId, messages);
  const course = getCourse(courseId) ?? getCourse("es")!;
  const reply = await chatCompletions({
    url: GROK_CHAT_URL,
    key,
    model: process.env.GROK_MODEL || DEFAULT_GROK_MODEL,
    course,
    messages,
  });
  return reply || localTutor(courseId, messages);
}

export async function openAiTutor(courseId: string, messages: ChatMessage[]) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return localTutor(courseId, messages);
  const course = getCourse(courseId) ?? getCourse("es")!;
  const reply = await chatCompletions({
    url: "https://api.openai.com/v1/chat/completions",
    key,
    model: "gpt-4o-mini",
    course,
    messages,
  });
  return reply || localTutor(courseId, messages);
}

export async function replyWithTutor(courseId: string, messages: ChatMessage[]) {
  const provider = tutorProvider();
  if (provider === "grok") return grokTutor(courseId, messages);
  if (provider === "openai") return openAiTutor(courseId, messages);
  return localTutor(courseId, messages);
}
