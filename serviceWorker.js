// *********************
// Step 9. Adding a Service Worker
// some variables to be added to the SW
// *********************

// 9a.  Name of our cache
const staticDevCoffee = "dev-coffee-site-v1"

// 9b. The assets that are going to be cached
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/coffee1.jpg",
    "/images/coffee2.jpg",
    "/images/coffee3.jpg",
    "/images/coffee4.jpg",
    "/images/coffee5.jpg",
    "/images/coffee6.jpg",
    "/images/coffee7.jpg",
    "/images/coffee8.jpg",
    "/images/coffee9.jpg",
]

// 9c. 'self' is the SW itself. It listens to lifecycle events, and
// do something in return. In this case the Install event.
// It is only fired once per service worker. As
self.addEventListener("install", installEvent => {
    // 9d. caching is asychrounous, so we need to wait before continueing
    installEvent.waitUntil(
        caches.open(staticDevCoffee)
            .then(cache => {
                cache.addAll(assets)
            })
    )
})


// *********************
// Step 10. Fetching the assets from the cache.
// Again, an event is registered and handled asynchrounously.
// *********************
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})

// *********************
// Step 11, go to app.js to REGISTER this service worker. Otherwise
// it will never be called!
// *********************
