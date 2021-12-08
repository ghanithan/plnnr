
import { build, files, timestamp } from '$service-worker';


const staticPlnnr = "plnnr-pwa-v1"
const assets = [...build];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPlnnr).then(cache => {
      cache.addAll(assets)
    })
  )
})

/*
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});


self.addEventListener('message', (event) => {
  if (event.data.type === 'CACHE_URLS') {
      event.waitUntil(
          caches.open(staticPlnnr)
              .then( (cache) => {
                  return cache.addAll(event.data.payload);
              })
      );
  }
});*/

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
