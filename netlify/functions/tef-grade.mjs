// POST /.netlify/functions/tef-grade {mode:"ecrite"|"orale", task, text, key?}
// TEF/TCF practice grader (paid add-on, $29/mo). Practice feedback only: never an official TEF/TCF score or CLB/NCLC result.
// Access: a valid, unexpired "tef" licence key, or one free sample per visitor (hashed IP, 30 days, Netlify Blobs).
import crypto from "node:crypto";
import { getStore } from "@netlify/blobs";
import { readLicense } from "./lib/license.mjs";
import { getSession } from "./lib/store.mjs";

const SAMPLE_TTL = 30 * 86400, MAX_CHARS = 6000;
const now = () => Math.floor(Date.now() / 1000);

async function licensed(key) {
  if (!key) return false;
  let p = null; try { p = readLicense(key); } catch (e) { return false; }
  if (!p || !(p.kind === "tef" || (p.skus || []).includes("tef_grader_monthly"))) return false;
  let rec = null; try { rec = p.sid && await getSession(p.sid); } catch (e) {}
  const exp = rec ? rec.expiry : p.exp;
  return !!exp && exp > now();
}

async function takeSample(req, context) {
  const ip = (context && context.ip) || req.headers.get("x-nf-client-connection-ip") || "unknown";
  const salt = process.env.LICENSE_SECRET || "lp";
  const id = crypto.createHmac("sha256", salt).update("tef-sample:" + ip).digest("hex").slice(0, 32);
  const store = getStore({ name: "lp-tef-samples", consistency: "strong" });
  const prev = await store.get(id, { type: "json" }).catch(() => null);
  if (prev && prev.t > now() - SAMPLE_TTL) return false;
  await store.setJSON(id, { t: now() });
  return true;
}

const SYSTEM = `You are a strict but encouraging French examiner-style tutor giving PRACTICE feedback for TEF Canada / TCF Canada preparation.
Rules:
- This is practice feedback only. Never state or imply an official TEF or TCF score, and never give an official CLB or NCLC level.
- Give an "Estimated practice level" using CEFR-style wording only (e.g. "around B1, approaching B2"), plus band-style descriptors.
- Reply in English for explanations; keep all French examples, corrections and the model answer in French.
Output exactly these sections with these Markdown headings:
## Estimated practice level
(one line, CEFR-style, with the words "estimated practice level")
## Descriptors
(4 bullets: Task completion; Coherence and organisation; Vocabulary range; Grammar accuracy${"${ORAL}"} — each with a short descriptor and an estimate out of 5)
## Strengths
(2–4 bullets)
## Errors and corrections
(up to 10 bullets: "original" → "correction" — short reason)
## Model answer
(a rewritten, improved version in French at roughly one level above the learner, respecting the task's word limits)
## Next step
(one concrete practice tip)`;

export default async function handler(req, context) {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
  let b; try { b = await req.json(); } catch (e) { return Response.json({ error: "Bad JSON" }, { status: 400 }); }
  const mode = b.mode === "orale" ? "orale" : "ecrite";
  const task = String(b.task || "").slice(0, 1500).trim();
  const text = String(b.text || "").slice(0, MAX_CHARS).trim();
  if (text.split(/\s+/).filter(Boolean).length < 20) return Response.json({ error: "Please write or say at least 20 words so there is enough to grade." }, { status: 400 });

  const paid = await licensed(String(b.key || ""));
  let sample = false;
  if (!paid) {
    try { sample = await takeSample(req, context); } catch (e) { sample = false; }
    if (!sample) return Response.json({ error: "Your free sample grading has been used. Subscribe or restore your licence key to keep practising.", gated: true }, { status: 402 });
  }

  const key = process.env.OPENROUTER_API_KEY || process.env.AI_API_KEY;
  if (!key) return Response.json({ error: "The grader is temporarily unavailable." }, { status: 500 });
  const model = process.env.AI_MODEL || "openai/gpt-4o-mini";
  const sys = SYSTEM.replace("${ORAL}", mode === "orale" ? "; for speaking also comment on fluency and register (the input is a speech-recognition transcript, so ignore punctuation and capitalisation)" : "");
  const user = `Exam section: ${mode === "orale" ? "Expression orale (speaking transcript)" : "Expression écrite (writing)"}\nTask: ${task || "(not given — infer from the answer)"}\n\nLearner's answer:\n"""${text}"""`;
  try {
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: "Bearer " + key },
      body: JSON.stringify({ model, messages: [{ role: "system", content: sys }, { role: "user", content: user }], max_tokens: 1400, temperature: 0.3 }),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) return Response.json({ error: "Grading failed. Please try again." }, { status: 502 });
    let out = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
    out = out.replace(/\b(official\s+)?(CLB|NCLC)\s*(level\s*)?\d+/gi, "[level estimate removed — not an official result]");
    return Response.json({ feedback: out, sample, paid }, { headers: { "cache-control": "no-store" } });
  } catch (e) {
    return Response.json({ error: "The grader is temporarily unavailable." }, { status: 500 });
  }
}
