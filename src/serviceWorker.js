const staticPlnnr = "plnnr-pwa-v1"
const assets = [
  "index.html",
  "_app/*/**"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPlnnr).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })