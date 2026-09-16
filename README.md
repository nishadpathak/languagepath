# LanguagePath

Free language learning by constructing sentences: reason one out, say it aloud, then reveal. The core trainer stays free. This repo is a Next.js app for [languagepath.org](https://languagepath.org) with optional Pro (Stripe), light streak/XP/Path race, and opt-in Intensive sessions.

Sample Spanish and French lessons in this scaffold are **synthetic originals**. They were not scraped from production course files.

## What you get without an account

- Full lesson player: understand a piece → construct a new sentence → speak → reveal
- Streak and XP for sentences you **built** and **spoke** (stored in the browser)
- Path race: an eastbound line of cities, eighty-day clock, misses cost a day, clean builds cost nothing
- Intensive toggle: longer chains, speak-before-reveal, ~20–25 minute power session
- No hearts, lives, or coin spam
- **No hard paywall on lessons**

## What Pro adds (optional)

Create an account, then Stripe Checkout (monthly or yearly). The webhook marks the user Pro. After that:

- Cloud sync of progress
- Streak backup on the account
- AI conversation-partner quota (80/month on monthly Pro, 120/month on yearly; logged-in free accounts get a 3-message taste)

Lessons, Path, and Intensive stay available either way.

## Stack

Next.js (App Router) · TypeScript · Prisma (SQLite by default) · Stripe Checkout + webhooks

## Setup

```bash
cp .env.example .env
# set AUTH_SECRET (openssl rand -base64 32) and DATABASE_URL
npm install
npx prisma db push
npm run db:seed   # optional: demo@languagepath.test / languagepath
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You can complete a Spanish lesson with no login.

### Environment

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Prisma URL. Default `file:./dev.db` (SQLite). A Postgres URL works if you switch the Prisma `provider`. |
| `AUTH_SECRET` | Signs the session cookie. Required for login / Checkout. |
| `APP_URL` | Public origin for Stripe `success_url` / `cancel_url`. |
| `STRIPE_SECRET_KEY` | Secret key (`sk_test_…` locally). |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Publishable key (reserved for client hints; Checkout is hosted). |
| `STRIPE_PRICE_MONTHLY` | Recurring monthly Price id (`price_…`). |
| `STRIPE_PRICE_YEARLY` | Recurring yearly Price id (`price_…`). |
| `STRIPE_WEBHOOK_SECRET` | Signing secret (`whsec_…`) from Stripe CLI or the Dashboard. |
| `OPENAI_API_KEY` | Optional. Without it, chat uses a local beginner tutor and still counts quota. |

## Stripe: Checkout → webhook → Pro sync

Hosted Checkout is the integration. Do not collect card numbers in this app.

### 1. Create the product and prices

In [Stripe Dashboard](https://dashboard.stripe.com/test/products) (test mode):

1. Create a product named **LanguagePath Pro**.
2. Add a **monthly** recurring price (the UI copy uses $9).
3. Add a **yearly** recurring price (the UI copy uses $72).
4. Copy the two `price_…` ids into `.env`.

Or with Stripe CLI:

```bash
stripe products create --name "LanguagePath Pro"
stripe prices create --product prod_XXX --currency usd --unit-amount 900 --recurring-interval month
stripe prices create --product prod_XXX --currency usd --unit-amount 7200 --recurring-interval year
```

### 2. Forward webhooks to the app

The endpoint is `POST /api/stripe/webhook`. It verifies `Stripe-Signature` and upserts the user:

- `checkout.session.completed` — attach customer / subscription, mark Pro
- `customer.subscription.created` / `updated` — keep plan, interval, status, period end in sync
- `customer.subscription.deleted` — return the account to free (lessons still work)

Locally:

```bash
stripe login
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copy the CLI `whsec_…` into `STRIPE_WEBHOOK_SECRET`. Restart `npm run dev`.

Production: add an endpoint in Workbench → Webhooks to `https://your-domain/api/stripe/webhook` for those event types, and store that endpoint’s signing secret.

### 3. Run the flow

1. `npm run dev` and `stripe listen …` are both running.
2. Sign up at `/signup` (or use the seeded demo user).
3. Open `/pricing`, choose monthly or yearly. You are redirected to Stripe Checkout.
4. Pay with test card `4242 4242 4242 4242`.
5. Stripe redirects to `/account?checkout=success`. The page polls `/api/me` until the webhook has set `plan=pro`.
6. Cloud `PUT /api/sync` now succeeds; chat quota jumps to the Pro limit.

Customer portal: Pro accounts can **Manage billing** on `/account` (`POST /api/stripe/portal`).

If Checkout is clicked before keys exist, the API returns `503` with a setup hint. Lessons remain usable.

## Intensive mode

Toggle it in a lesson, on `/account`, or start `/intensive`.

- Extra construct chain after the daily lesson
- Reveal stays locked until **I said it aloud**
- Power session is a 25:00 clock over the course’s construct steps

## Scripts

```bash
npm run dev
npm test
npm run lint
npm run build
```

## Notes

- Progress for signed-out learners lives in `localStorage` (`languagepath.progress.v1`).
- Speech uses the browser `speechSynthesis` API when the device has a voice for `es-ES` / `fr-FR`.
- Path uses the last course you opened (Spanish or French).
