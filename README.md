# LanguagePath

Free language learning by constructing sentences: reason one out, say it aloud, then reveal. The core trainer stays free. Optional **Pro** is the only paid offer: Stripe Checkout (monthly/yearly) → webhook → cloud progress sync, streak backup, and AI chat quota.

Sample Spanish and French lessons are **synthetic originals**. They were not scraped from languagepath.org.

## What is free (no account, no card)

- Full lessons: understand a piece → construct → speak → reveal
- Streak and XP for sentences you built and spoke (`localStorage`)
- Path race (80-day clock; misses cost a day)
- Intensive mode (longer chains, speak-before-reveal, ~25 min session)
- **Lessons are never paywalled**

## What Pro adds (one offer)

Create an account, pay with Stripe Checkout, wait for the webhook. Then:

| Pro entitlement | Free |
| --- | --- |
| Cloud progress sync (`GET`/`PUT /api/sync`) | Local only |
| Streak backup on the user row | Browser only |
| AI chat quota | 3 messages / month if signed in; 80 monthly Pro / 120 yearly Pro |

Lessons, Path, and Intensive stay available either way.

## Setup without Stripe (trainer is usable)

```bash
cp .env.example .env
# Required even without Stripe:
#   AUTH_SECRET   openssl rand -base64 32
#   DATABASE_URL  file:./dev.db
npm install
npx prisma db push
npm run db:seed   # optional: demo@languagepath.test / languagepath
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start Spanish. No login needed.

```bash
npm test
npm run lint
npm run build
```

## Stripe test keys (copy these five)

Use **Test mode** in the Stripe Dashboard. Production keys are the same names with `sk_live_` / `pk_live_` / live `price_` / `whsec_`.

1. [API keys](https://dashboard.stripe.com/test/apikeys) → copy:
   - `STRIPE_SECRET_KEY=sk_test_...`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...` (Checkout is Stripe-hosted; this is unused in the client today)
2. [Products](https://dashboard.stripe.com/test/products) → **Add product** named `LanguagePath Pro` → two recurring prices:
   - Monthly, USD **9.00** → `STRIPE_PRICE_MONTHLY=price_...`
   - Yearly, USD **72.00** → `STRIPE_PRICE_YEARLY=price_...`
3. Webhook signing secret:
   - Local: `stripe listen --forward-to localhost:3000/api/stripe/webhook` → copy `whsec_...`
   - Production: Workbench → Webhooks → `https://YOUR_DOMAIN/api/stripe/webhook` → signing secret

Paste into `.env` (no quotes needed unless the value has spaces):

```bash
APP_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_REPLACE_ME
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_REPLACE_ME
STRIPE_PRICE_MONTHLY=price_REPLACE_ME
STRIPE_PRICE_YEARLY=price_REPLACE_ME
STRIPE_WEBHOOK_SECRET=whsec_REPLACE_ME
```

Restart `npm run dev` after changing `.env`.

CLI equivalent for prices:

```bash
stripe products create --name "LanguagePath Pro"
stripe prices create --product prod_XXX --currency usd --unit-amount 900 --recurring-interval month
stripe prices create --product prod_XXX --currency usd --unit-amount 7200 --recurring-interval year
```

### Checkout → webhook → Pro

1. `npm run dev` and `stripe listen --forward-to localhost:3000/api/stripe/webhook` are both running.
2. Sign up at `/signup`.
3. Open `/pricing` → monthly or yearly. You go to Stripe Checkout (not a card form on this site).
4. Pay with test card `4242 4242 4242 4242`, any future expiry, any CVC.
5. Stripe sends `checkout.session.completed` (and subscription events) to `POST /api/stripe/webhook`.
6. You land on `/account?checkout=success`. The page polls `/api/me` until `plan=pro`.
7. `PUT /api/sync` starts succeeding. Chat quota jumps. Lessons were never gated.

Events handled:

- `checkout.session.completed` — attach customer + subscription, mark Pro
- `customer.subscription.created` / `updated` — plan, interval, status, period end
- `customer.subscription.deleted` — back to free (lessons still work)
- `invoice.paid` — reset the AI chat counter for the new period

If keys are missing, Checkout returns **503** with a README hint. The trainer keeps working.

Customer portal: Pro accounts → **Manage billing** on `/account`.

### Local Pro without a Stripe account (webhook mock)

For automated tests only. **Never enable in production.**

```bash
# .env
ALLOW_WEBHOOK_MOCK=1
```

Then, while logged in:

```bash
curl -X POST http://localhost:3000/api/dev/simulate-checkout \
  -H 'Content-Type: application/json' \
  --cookie 'lp_session=...' \
  -d '{"interval":"month"}'
```

That runs the **same** `handleStripeEvent` path as a real `checkout.session.completed`.

```bash
npx tsx scripts/simulate-webhook.ts   # Pro on a throwaway DB user
npm run e2e                           # Chrome: signup → pricing → mock webhook → Pro
```

`npm run e2e` needs `npm run dev`, Google Chrome, and `ALLOW_WEBHOOK_MOCK=1`.

## Intensive mode

Toggle it in a lesson, on `/account`, or open `/intensive`.

- Extra construct chain after the daily lesson
- Reveal stays locked until **I said it aloud**
- Power session is a 25:00 clock over every construct step in the course

## Production-ready vs needs Stripe keys

**Ready without Stripe keys**

- Free lessons, Path, Intensive, streak/XP
- Signup / login
- Pricing page (Checkout button explains missing keys)
- Webhook handler code, Pro flag, cloud sync API, chat quota math

**Needs Stripe test keys to exercise money movement**

- Hosted Checkout redirect
- Signed webhook from Stripe (or Stripe CLI `listen`)
- Customer portal

**Needs live keys + HTTPS only for production charges**

- `sk_live_` / live prices / live `whsec_`
- `APP_URL` = your public origin
- `ALLOW_WEBHOOK_MOCK` must stay unset

## Notes

- Signed-out progress: `localStorage` key `languagepath.progress.v1`
- Speech: browser `speechSynthesis` (`es-ES` / `fr-FR`)
- Path uses the last course you opened (Spanish or French)
- Optional `OPENAI_API_KEY` — without it, chat uses a local beginner tutor and still counts quota
