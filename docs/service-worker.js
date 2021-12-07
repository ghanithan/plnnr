const build = [
  "/plnnr/_app/start-37ffa83d.js",
  "/plnnr/_app/assets/start-61d1577b.css",
  "/plnnr/_app/layout.svelte-8217da89.js",
  "/plnnr/_app/error.svelte-7f0ca712.js",
  "/plnnr/_app/pages/index.svelte-896d044b.js",
  "/plnnr/_app/assets/pages/index.svelte-dc4ab6ab.css",
  "/plnnr/_app/chunks/vendor-3eb577cd.js"
];
const files = [
  "/plnnr/.DS_Store",
  "/plnnr/.nojekyll",
  "/plnnr/favicon.png",
  "/plnnr/images/.DS_Store",
  "/plnnr/images/icons/endless-128px.png",
  "/plnnr/images/icons/endless-16px.png",
  "/plnnr/images/icons/endless-24px.png",
  "/plnnr/images/icons/endless-256px-square.png",
  "/plnnr/images/icons/endless-256px.png",
  "/plnnr/images/icons/endless-32px.png",
  "/plnnr/images/icons/endless-512px.png",
  "/plnnr/images/icons/endless-64px.png",
  "/plnnr/manifest.json"
];
const staticPlnnr = "plnnr-pwa-v1";
const assets = [...build, ...files];
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(caches.open(staticPlnnr).then((cache) => {
    cache.addAll(assets);
  }));
});
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(caches.match(fetchEvent.request).then((res) => {
    return res || fetch(fetchEvent.request);
  }));
});
