import { afterEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_GROK_MODEL,
  GROK_CHAT_URL,
  localTutor,
  replyWithTutor,
  tutorProvider,
  tutorSystemPrompt,
} from "@/lib/tutor";
import { getCourse } from "@/data/courses";

describe("GrokBot tutor", () => {
  afterEach(() => {
    delete process.env.XAI_API_KEY;
    delete process.env.OPENAI_API_KEY;
    delete process.env.GROK_MODEL;
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("prefers Grok when XAI_API_KEY is set", () => {
    process.env.XAI_API_KEY = "xai-test";
    process.env.OPENAI_API_KEY = "sk-test";
    expect(tutorProvider()).toBe("grok");
  });

  it("falls back to OpenAI, then the local tutor", () => {
    expect(tutorProvider()).toBe("local");
    process.env.OPENAI_API_KEY = "sk-test";
    expect(tutorProvider()).toBe("openai");
  });

  it("keeps the local tutor inside original Spanish pieces", () => {
    const reply = localTutor("es", [{ role: "user", content: "hello there partner" }]);
    expect(reply).toContain("Quiero café");
    expect(reply.toLowerCase()).toContain("spanish");
  });

  it("asks GrokBot to stay inside LanguagePath pieces", () => {
    const prompt = tutorSystemPrompt(getCourse("es")!);
    expect(prompt).toContain("GrokBot");
    expect(prompt).toContain("Spanish");
    expect(prompt).toContain("Quiero café");
  });

  it("calls the xAI chat completions endpoint for GrokBot", async () => {
    process.env.XAI_API_KEY = "xai-test";
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        choices: [{ message: { content: "Quiero agua, por favor." } }],
      }),
    });
    vi.stubGlobal("fetch", fetchMock);
    const reply = await replyWithTutor("es", [{ role: "user", content: "Quiero café." }]);
    expect(reply).toBe("Quiero agua, por favor.");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(GROK_CHAT_URL);
    const body = JSON.parse(String(init.body)) as { model: string };
    expect(body.model).toBe(DEFAULT_GROK_MODEL);
  });
});
