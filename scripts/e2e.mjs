import fs from "node:fs";
import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3000";
const out = "/tmp/languagepath-e2e";
fs.mkdirSync(out, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome-stable",
  headless: "new",
  args: [
    "--no-sandbox",
    "--disable-gpu",
    "--window-size=1280,900",
    `--user-data-dir=/tmp/lp-chrome-${Date.now()}`,
  ],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
const results = [];

async function shot(name) {
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
}

async function step(name, fn) {
  try {
    await fn();
    results.push({ name, ok: true });
    console.log(`PASS ${name}`);
  } catch (error) {
    await shot(`fail-${name.replace(/\s+/g, "-")}`);
    results.push({ name, ok: false, error: String(error) });
    console.error(`FAIL ${name}:`, error);
  }
}

function bodyText() {
  return page.evaluate(() => document.body.innerText.toLowerCase());
}

async function waitForText(snippet, timeout = 15000) {
  await page.waitForFunction(
    (needle) => document.body.innerText.toLowerCase().includes(needle),
    { timeout },
    snippet.toLowerCase(),
  );
}

async function clickLabel(label) {
  const clicked = await page.evaluate((needle) => {
    const match = [...document.querySelectorAll("button,a")].find(
      (el) => el.textContent?.trim() === needle,
    );
    if (!(match instanceof HTMLElement)) return false;
    match.click();
    return true;
  }, label);
  if (!clicked) throw new Error(`could not click ${label}`);
}

await step("home loads without account", async () => {
  await page.goto(BASE, { waitUntil: "networkidle0" });
  const text = await bodyText();
  if (!text.includes("reason the sentence out")) throw new Error("missing hero");
  if (!text.includes("start spanish free")) throw new Error("missing CTA");
  if (!text.includes("log in")) throw new Error("expected logged-out header");
  await shot("01-home");
});

await step("spanish lesson without account", async () => {
  await page.goto(`${BASE}/learn/es/es-want`, { waitUntil: "networkidle0" });
  await waitForText("understand");
  await shot("02-teach");
  for (let i = 0; i < 6; i += 1) {
    const text = await bodyText();
    if (text.includes("i said it aloud")) break;
    const before = await page.evaluate(() => document.body.innerText);
    await clickLabel("Next");
    await page.waitForFunction((prev) => document.body.innerText !== prev, {}, before);
  }
  await waitForText("i said it aloud");
  await clickLabel("I said it aloud");
  await clickLabel("Reveal");
  await waitForText("quiero café");
  const header = await page.evaluate(
    () => document.querySelector("header")?.innerText.toLowerCase() || "",
  );
  if (!header.includes("xp")) throw new Error("xp missing");
  if (!header.includes("streak")) throw new Error(`streak missing: ${header}`);
  await shot("03-construct-reveal");
});

async function revealDisabled() {
  return page.evaluate(() => {
    const button = [...document.querySelectorAll("button")].find(
      (el) => el.textContent?.trim() === "Reveal",
    );
    return button instanceof HTMLButtonElement ? button.disabled : null;
  });
}

await step("intensive locks reveal until spoken", async () => {
  const checkbox = await page.waitForSelector('input[type="checkbox"]');
  const checked = await checkbox.evaluate((el) => el.checked);
  if (!checked) await checkbox.click();
  await page.waitForFunction(() => {
    const box = document.querySelector('input[type="checkbox"]');
    return box instanceof HTMLInputElement && box.checked;
  });
  for (let i = 0; i < 8; i += 1) {
    const body = await bodyText();
    if (body.includes("i said it aloud")) break;
    const before = await page.evaluate(() => document.body.innerText);
    await clickLabel("Next");
    await page.waitForFunction((prev) => document.body.innerText !== prev, {}, before);
  }
  await waitForText("i said it aloud");
  const locked = await revealDisabled();
  if (locked !== true) throw new Error("Reveal should be disabled in intensive mode");
  await shot("04-intensive-locked");
  await clickLabel("I said it aloud");
  const unlocked = await revealDisabled();
  if (unlocked !== false) throw new Error("Reveal stayed locked after speaking");
});

await step("path race clean build", async () => {
  await page.goto(`${BASE}/path`, { waitUntil: "networkidle0" });
  await waitForText("eastbound race");
  const text = await bodyText();
  if (!text.includes("80 / 80 days") && !text.includes("/ 80 days")) {
    throw new Error(`clock missing: ${text.slice(0, 500)}`);
  }
  for (const tile of ["Quiero", "café."]) {
    await clickLabel(tile);
  }
  await clickLabel("Check");
  await waitForText("madrid");
  await shot("05-path");
});

await step("intensive session timer", async () => {
  await page.goto(`${BASE}/intensive`, { waitUntil: "networkidle0" });
  await waitForText("power session");
  const text = await bodyText();
  if (!/\d+:\d{2}/.test(text)) throw new Error("missing timer");
  const locked = await revealDisabled();
  if (locked !== true) throw new Error("intensive session reveal not locked");
  await shot("06-intensive-session");
});

await step("pricing checkout requires login then errors without Stripe", async () => {
  await page.goto(`${BASE}/pricing`, { waitUntil: "networkidle0" });
  await waitForText("keep the core free");
  await clickLabel("Start monthly Pro");
  await page.waitForFunction(() => location.pathname === "/login");
  await shot("07-login-from-pricing");
  await page.goto(`${BASE}/signup`, { waitUntil: "networkidle0" });
  const email = `e2e-${Date.now()}@languagepath.test`;
  await page.type('input[placeholder="Name"]', "E2E learner");
  await page.type('input[type="email"]', email);
  await page.type('input[type="password"]', "languagepath");
  await clickLabel("Create account");
  await page.waitForFunction(() => location.pathname === "/account");
  await page.goto(`${BASE}/pricing`, { waitUntil: "networkidle0" });
  await clickLabel("Start monthly Pro");
  await waitForText("stripe keys and price ids are not set");
  await shot("08-checkout-unconfigured");
});

await step("chat reachable after account", async () => {
  await page.goto(`${BASE}/chat`, { waitUntil: "networkidle0" });
  await waitForText("conversation partner");
  await shot("09-chat");
});

await browser.close();
const failed = results.filter((item) => !item.ok);
console.log(JSON.stringify({ results, failed: failed.length }, null, 2));
if (failed.length) process.exit(1);
