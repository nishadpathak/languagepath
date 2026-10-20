# LanguagePath

<p align="center"><img src="logo.png" alt="LanguagePath" width="360"></p>

An offline-friendly language trainer built around one idea: you don't memorize phrases, you *reason them out* — the teacher hands you a piece, asks you to build something, you say it aloud, then reveal and check. Every step reuses what you already built.

**Serve it** (e.g. Netlify / GitHub Pages) — it's a single-page offline-first PWA with **real per-language URLs** (`/spanish`, `/spanish/lessons`) and a Netlify SPA fallback already configured in `netlify.toml`. No build step. It runs fully offline once hosted via `sw.js`.

## Languages

The dropdown lists **69 free courses**, all fully built — no account, no key:

- **The flagship 9** (30+ lessons each): 🇨🇳 Mandarin · 🇸🇦 Arabic · 🇫🇷 French · 🇩🇪 German · 🇵🇹 Portuguese · 🇪🇸 Spanish · 🇹🇷 Turkish · 🇮🇳 Telugu · 🇮🇷 Farsi
- **60 more**, each a full 12-lesson course: Bengali, Dutch, Greek, Gujarati, Hebrew, Hindi, Indonesian, Italian, Japanese, Kannada, Korean, Malay, Marathi, Polish, Punjabi, Romanian, Russian, Swahili, Swedish, Tamil, Thai, Ukrainian, Urdu, Vietnamese, Tagalog, Javanese, Hausa, Burmese, Azerbaijani, Amharic, Nepali, Serbian, Sinhala, Khmer, Lao, Hungarian, Zulu, Czech, Bulgarian, Armenian, Georgian, Somali, Yoruba, Igbo, Catalan, Finnish, Danish, Norwegian, Malayalam, Odia, Pashto, Uzbek, Oromo, Cantonese, Sundanese, Kurdish, Afrikaans, Kazakh, Slovak, Belarusian

Right-to-left scripts (Arabic, Farsi, Hebrew, Urdu, Pashto) render automatically. The app opens on Mandarin by default.

## What's inside each pack

- **Lessons** — graduated lessons that build sentences from pieces
- **🗣️ Conversation practice** — role-play each scenario line by line: see the cue, say it out loud, reveal, compare
- **Recall** — spaced repetition (Leitner ladder) surfaces items right before you'd forget; **🎤 Say it & check** uses your browser's speech recognition to verify your pronunciation (Chrome/Edge)
- **Listen** — audio-only comprehension drills, with an optional **dictation** field (type what you hear, accent-insensitive)
- **Shadow** — speak-along lines to train rhythm and accent, with a **🎤 Check me** speech check
- **Dialogues** — full real-world conversations, line by line
- **Quiz** — multiple-choice, typing, and **🧩 fill-the-blank (cloze)** challenges
- **Build** — generative practice that combines two sentences you've already learned; **🛠️ Remix** makes brand-new sentences from known parts
- **Chunks** — capture your own phrases; they flow into Recall, Listen, Shadow and Quiz
- **Phrases / Culture / Sounds / Resources** — grab-and-go reference and comprehensible-input links
- **Hub** — the same phrase across all your languages, showing shared roots, plus one cross-language review session

## Make it yours

Everything below is optional and stored **only in your own browser** — nothing is shared. Set it in **🌐 Hub → 👤 Your profile**:

- **Your name** — fills the "my name is…" examples across every language (defaults to "Alex").
- **Languages you already speak** — e.g. "Spanish, Hindi, French" (powers the upcoming ✨ memory bridges).
- **🌓 Light / dark** — toggle in the header; your choice is remembered (dark by default).

**AI features — coming soon.** ✨ Memory bridges, the 🤖 conversation partner, and full 🧩 generative AI Build practice are wired in but dormant until the backend launches (set `AI_ENDPOINT` in `index.html` to enable). Everything else works fully offline with no account or key.

## Data & sync

Progress lives in the browser's `localStorage`, per language. Use the Hub's **Export / Import** buttons to back up or move to another device. TTS uses the device's built-in voices; pick your preferred voice per language in the **Voice** card on the Method tab.

## Files

- `index.html` — the app shell (markup, styles, and the lesson-player engine)
- `courses.js` — all 60 authored course packs (one per language)
- `data.js` — base course & per-language phrase data, loaded before the shell
- `sw.js` — service worker for offline use when hosted
- `manifest.json` + `icons/` — PWA install manifest and install icons (any + maskable)
- `logo.png` (wordmark), `og-image.png`, `apple-touch-icon.png`, `favicon.ico`, `icon.png` — brand and app-icon assets
- `privacy.html`, `terms.html`, `about.html` — legal & about pages
- `robots.txt`, `sitemap.xml` — SEO
- `ads.txt` — Google AdSense publisher verification

## Production

Production deploys from **main** (since 20 Oct 2026). Build with `npm run build`, deploy with `npx -y netlify-cli deploy --prod --no-build --dir=dist --functions netlify/functions --site fb414cb1-b1c9-42a2-85ed-efed0d851ca7`. Keep GitHub main in step with every prod deploy.
