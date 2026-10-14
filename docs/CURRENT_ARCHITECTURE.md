> ## ⚠️ SOURCE OF TRUTH
> This document describes the **currently maintained** LanguagePath repository (iCloud workspace:
> `~/Library/Mobile Documents/com~apple~CloudDocs/NMP DMCC/Website/LanguagePath.org`).
> **Do not use historical copies or abandoned project directories** (e.g. `~/Documents/Claude/Projects/LanguagePath`, now empty) as development sources.
> **Confirm the git remote + current HEAD before making changes.** The canonical identity is the git remote + branch + commit SHA — **not** the absolute local path. Do NOT hard-code the iCloud path into application code or CI.

# LanguagePath — Current Source-of-Truth Architecture (iCloud/Documents workspace)

> Internal doc. No secrets. The AI path uses a server-side proxy — no client-side API keys.
> Repo path: `~/Library/Mobile Documents/com~apple~CloudDocs/NMP DMCC/Website/LanguagePath.org/`

## Repo
Single-file app shell `index.html` (inline `<style>`+`<script>`, offline-first PWA). `data.js` (flagship content) + `courses.js` (authorized packs, lazy-loaded per language). `sw.js`, `manifest.json`, `icons/`, brand logos, `about.html`/`privacy.html`/`terms.html`, `robots.txt`, `sitemap.xml`, `ads.txt`, `netlify.toml`, `netlify/functions/ai.js`.

## Routing
`parseRoute()`+`pushRoute()`, path-based: `/{lang}` · `/{lang}/{view}` · `/{lang}/{topic}` · `/learn` · `/seeit` · `/reallife` · `/join` · `/request` · `/admin`. Netlify SPA fallback; root-absolute assets. ONE authoritative language mapping (validator + `lan-codes.json`); route slug = course ID, not TTS code.

## Languages
69 (9 flagships + 60 authored from `EXTRA_LANGS`). TTS codes used only for `speechSynthesis`, never as routes.

## Learning modes
Today | Learn | Practice | Explore | Progress (collapsible). Method: Understand→Construct→Say→Hear→Rebuild. Build, Recall (SRS), Listen, Shadow, Quiz, Dialogues, Phrases, Culture, Sounds, Resources, Progress, Visual Path (`/seeit`), Real Life (`/reallife`).

## SEO
609-URL sitemap (69 hubs + 483 content views + 52 topics + `/learn` + home + legal). Per-route title/OG/canonical/meta; BreadcrumbList; consistent host; robots `Allow /`. `/join`/`/request`/`/admin` noindex + excluded.

## AI
`/.netlify/functions/ai` serverless proxy; key server-side (`OPENROUTER_API_KEY`/`AI_MODEL` env vars). **No client-side BYOK** (legacy `AI_KEY_LS/getKey/setKey/clearKey` removed — dead + unused). Lesson-aware (sends learned vocab). Blocked on provider credits.

## Speech
TTS via `speechSynthesis` (no permission). Speech recognition (`webkitSpeechRecognition`) used only inside `checkSpeech()` — triggered on explicit "say it / check" actions (lessons/recall/shadow). No mic permission on load/nav/resize. No clipboard writes anywhere.

## Consent / ads
Privacy-first: no accounts, learning in `localStorage`, consent-gated AdSense (Accept loads; Reject stays blocked), persisted.

## B2B
`/join` (provider intake) + `/request` (Find Language Services) → Netlify Forms (server persistence) + localStorage mirror; `/admin` (review queue) access-gated, noindex, unlinked. Moderation status; honeypot+validation+consent.

## PWA/cache
SW network-first (fresh HTML propagates) + offline fallback + per-asset install. Lazy-loaded course packs. No `_headers`/long-cache config (Netlify defaults); SW avoids stale-lock.

## CI guards (`.github/workflows/validate.yml`)
`check-no-secrets.js` (no client-side API-key storage/values) · `validate-sitemap.js` (609/69, wrong TTS codes, duplicates, noindex routes) · `check-visual-path.js` (40 objects) · inline-script parse.

## Known manual QA gaps
Native Mandarin review for Real Life dialogue + Visual Path pinyin (implementation-verified only, pending human review). Full mobile/a11y/RTL + Lighthouse post-deploy. Netlify Forms persistence needs a live deploy to confirm.

## Tag verification (owner QA)
Google **Tag Assistant**: https://tagassistant.google.com/#/?url=https%3A%2F%2Fwww.languagepath.org%2F
- **Note:** the canonical host is **`languagepath.org`** (non-www); Tag Assistant enters `www.languagepath.org`, which Netlify **redirects to the non-www canonical**, and Tag Assistant follows the redirect.
- **Current state:** the site has **no Google tag / GA4 installed**. Only two things can surface:
  1. **AdSense** (`adsbygoogle`, injected after the visitor **consents** — privacy-first, consent-gated).
  2. **Cloudflare Web Analytics** bea (loaded only if `CF_BEACON_TOKEN` is set; currently empty).
- **To make Tag Assistant validate a Google tag:** add a **Google tag (gtag.js / GA4)** with a real `Measure ID`, ideally **Consent Mode** (default `denied` → updated to `granted` on Accept, consistent with the consent-gated AdSense). No placeholder/empty Measurement ID should be shipped (it would show an invalid tag). Add the Measure ID via a config (e.g. `GA_MEASUREMENT_ID`) and load gtag only post-consent to preserve the privacy-first posture.


## Travelpayouts (affiliate)
- **The site's real marker is `736890`.** Do not use or reintroduce `570982` — see incident note below.
- **REMOVED 2026-09-06, do not re-add:** a "link-unlocker" script (`https://emrldtp.com/NTcwOTgy.js?t=570982`) was briefly added to `<head>`, unconditionally and pre-consent. It has been deleted. It was **not** a Travelpayouts asset: `emrldtp.com`/`emrldtp.cc` is not part of Travelpayouts' real domain set (`travelpayouts.com`, `tp.media`, `avs.io`, `tp.st`, `aviasales.com`, `hotellook.com`, `kiwi.com`), a public malware sandbox flagged `emrldtp.cc` with multiple malicious indicators, the filename `NTcwOTgy.js` is base64 for the marker (an obfuscation pattern, not something a legitimate loader needs), it monkey-patched `Element.prototype` methods, and it used marker `570982` — a different account than this site's actual `736890`. The commit that added it had already written down every one of these red flags in its own docs note and shipped anyway; that was the wrong call. **If anything calling itself a "Travelpayouts link-unlocker/localizator" comes up again, verify it against travelpayouts.com's own official docs/dashboard before adding it — do not trust a snippet or tutorial found elsewhere, and never let it load before consent.**
- Real, verified affiliate links don't need any such "unlocker" — a genuine Travelpayouts deep-link (like the flights CTA below) works standalone.
- `TRAVEL_CTA.flights` is a verified Travelpayouts→Kiwi.com deep link (marker `736890` confirmed by tracing its redirect chain — `affilid`/`sub1` both carry `...-736890`). `TRAVEL_CTA.hotels` is intentionally **empty** — the previous value used the wrong marker (`570982`) and was never independently verified; the CTA row hides a button with an empty URL, so this degrades cleanly. Get a real hotels link from the Travelpayouts dashboard (marker `736890`) before restoring it — never hand-construct or guess one.
- Affiliate disclosure is shown on travel destination pages (only when at least one real CTA link exists).

