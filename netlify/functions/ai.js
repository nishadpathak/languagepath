// LanguagePath AI proxy (Netlify Function v2 — Web Standard Request/Response).
// Keeps the LLM API key server-side so it is never exposed in the public JS bundle.
// Client sends an Anthropic-shaped request; we translate to OpenRouter and back.
// Env vars (set in Netlify — never commit): OPENROUTER_API_KEY, AI_MODEL.

const MAX_BODY_BYTES = 32 * 1024;
const MAX_MESSAGES = 30;
const MAX_TEXT = 8000;
const json = (payload, status = 200) => Response.json(payload, {
  status,
  headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
});
function validatePayload(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return false;
  if (!Array.isArray(body.messages) || body.messages.length < 1 || body.messages.length > MAX_MESSAGES) return false;
  if (!body.messages.every(m => m && typeof m === "object" && !Array.isArray(m) &&
      ["user", "assistant"].includes(m.role) && typeof m.content === "string" &&
      m.content.length > 0 && m.content.length <= MAX_TEXT)) return false;
  if (body.system !== undefined && (typeof body.system !== "string" || body.system.length > MAX_TEXT)) return false;
  if (body.context !== undefined && (typeof body.context !== "string" || body.context.length > MAX_TEXT)) return false;
  if (body.max_tokens !== undefined && (!Number.isInteger(body.max_tokens) || body.max_tokens < 1 || body.max_tokens > 2000)) return false;
  return true;
}
export default async function handler(req) {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST", "Cache-Control": "no-store" } });
  const length = Number(req.headers.get("content-length"));
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) return json({ error: { message: "Request too large" } }, 413);
  if (!(req.headers.get("content-type") || "").toLowerCase().includes("application/json")) return json({ error: { message: "Expected JSON" } }, 415);
  let body;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) return json({ error: { message: "Request too large" } }, 413);
    body = JSON.parse(raw);
  } catch (_) { return json({ error: { message: "Bad JSON" } }, 400); }
  if (!validatePayload(body)) return json({ error: { message: "Invalid AI request" } }, 400);

  const key = process.env.OPENROUTER_API_KEY || process.env.AI_API_KEY;
  if (!key) return json({ error: { message: "AI is temporarily unavailable." } }, { status: 500 });

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
  body.messages.forEach(m => messages.push({ role: m.role, content: m.content }));

  try {
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: "Bearer " + key },
      body: JSON.stringify({ model, messages, max_tokens: body.max_tokens || 400 }),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) return json({ error: { message: (data.error && data.error.message) || "AI request failed" } }, { status: r.status });
    const text = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
    return json({ content: [{ type: "text", text }] });
  } catch (e) {
    return json({ error: { message: "AI practice is temporarily unavailable." } }, { status: 500 });
  }
}
