const cacheName = "hello-pwa";
const filesToCache = ["/", "/index.html", "/css/style.css", "/js/main.js"];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", async (e) => {
  const cache = await caches.open(cacheName);
  e.waitUntil(cache.addAll(filesToCache));
});

/* Serve cached content when offline */
self.addEventListener("fetch", async (e) => {
  const response = await caches.match(e.request);
  e.respondWith(response || fetch(e.request));
});
