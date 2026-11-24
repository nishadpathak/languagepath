/* Network-first offline support for the public learner app. */
const CACHE = "languagepath-v27";
const CORE = [
  "/",
  "/index.html",
  "/data.js",
  "/assets/world-map.svg",
  "/logo-header.png",
  "/logo-header-light.png",
  "/about.html",
  "/privacy.html",
  "/terms.html",
  "/manifest.json",
  "/icon.png",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/og-image.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-192.png",
  "/icons/icon-maskable-512.png"
];

function publicUrl(value) {
  try {
    const u = new URL(value, self.location.origin);
    return u.origin === self.location.origin &&
      !/^\/\.netlify(?:\/|$)|^\/(?:pro-success|pro-restore)(?:\.html)?(?:\/|$)/i.test(u.pathname);
  } catch (_) { return false; }
}
function canStore(res) {
  return res.ok && !res.redirected && !/\b(?:no-store|private)\b/i.test(res.headers.get("Cache-Control") || "");
}
async function installCore() {
  const cache = await caches.open(CACHE);
  await Promise.allSettled(CORE.map(url => cache.add(url)));
  const shell = await cache.match("/") || await cache.match("/index.html");
  if (!shell) return;
  // Cache fingerprinted app bundles even when they loaded before the first worker took control.
  const html = await shell.text();
  const assets = new Set([...html.matchAll(/(?:src|href)="(\/assets\/v\/[a-z0-9._/-]+\.(?:css|js))"/gi)].map(m => m[1]));
  await Promise.allSettled([...assets].map(url => cache.add(url)));
}
self.addEventListener("install", e => {
  e.waitUntil(installCore().then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => /^languagepath-v\d+$/.test(k) && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || !publicUrl(e.request.url)) return;
  const network = fetch(e.request);
  e.waitUntil(network.then(async res => {
    if (!canStore(res)) return;
    const copy = res.clone();
    const cache = await caches.open(CACHE);
    await cache.put(e.request, copy);
  }).catch(() => {}));
  e.respondWith(network.catch(async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(e.request);
    if (hit) return hit;
    if (e.request.mode === "navigate") {
      const url = new URL(e.request.url);
      return await cache.match(url.pathname) || await cache.match("/index.html") || await cache.match("/") || Response.error();
    }
    return Response.error();
  }));
});
self.addEventListener("message", e => {
  const d = e.data || {}; if (d.type !== "lp-offline" || !Array.isArray(d.urls)) return;
  const urls = d.urls.filter(u => typeof u === "string" && u.startsWith("/") && publicUrl(u)).slice(0, 200);
  e.waitUntil(caches.open(CACHE).then(async c => {
    let n = 0;
    for (const u of urls) {
      try { const r = await fetch(u, { credentials: "same-origin" }); if (canStore(r)) { await c.put(u, r); n++; } } catch (_) {}
    }
    if (e.source) e.source.postMessage({ type: "lp-offline-done", n });
  }));
});
