// LanguagePath AI proxy (Netlify Function v2 — Web Standard Request/Response).
// Keeps the LLM API key server-side so it is never exposed in the public JS bundle.
// Client sends an Anthropic-shaped request; we translate to OpenRouter and back.
// Env vars (set in Netlify — never commit): OPENROUTER_API_KEY, AI_MODEL.

export default async function handler(req, context) {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  let body;
  try { body = await req.json(); } catch (e) { return Response.json({ error: { message: "Bad JSON" } }, { status: 400 }); }

  const key = process.env.OPENROUTER_API_KEY || process.env.AI_API_KEY;
  if (!key) return Response.json({ error: { message: "AI is temporarily unavailable." } }, { status: 500 });

  const model = process.env.AI_MODEL || "openai/gpt-4o-mini";
  const messages = [];
  const ctx = typeof body.context === "string" && body.context.trim() ? body.context : "";
  let sys = body.system || "";
  if (ctx) {
    sys = (sys ? sys + "\n" : "") +
      "IMPORTANT — lesson-aware practice. The learner knows only these words/phrases so far:\n" + ctx +
      "\nBuild replies using almost exclusively these. Keep everything at a beginner level. " +
      "After the target-language reply, add a short line starting with '↳ ' giving a brief English hint.";
  }
  if (sys) messages.push({ role: "system", content: sys });
  (body.messages || []).forEach(m => messages.push({ role: m.role, content: typeof m.content === "string" ? m.content : JSON.stringify(m.content) }));

  try {
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: "Bearer " + key },
      body: JSON.stringify({ model, messages, max_tokens: body.max_tokens || 400 }),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) return Response.json({ error: { message: (data.error && data.error.message) || "AI request failed" } }, { status: r.status });
    const text = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
    return Response.json({ content: [{ type: "text", text }] });
  } catch (e) {
    return Response.json({ error: { message: "AI practice is temporarily unavailable." } }, { status: 500 });
  }
}
