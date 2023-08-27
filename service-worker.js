const APP_PREFIX = "RatioCalculator-";
const VERSION = "1.1.1";
const CACHE_NAME = APP_PREFIX + VERSION;

// cache of essential files
const FILES_TO_CACHE = ["./index.html", "./dist/app.bundle.js"];

// installs service worker
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log(CACHE_NAME + " cache installed");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// manages cache data | clears out prior data, pushes in replacing data
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      let cacheKeeplist = keyList.filter((key) => key.indexOf(APP_PREFIX));
      cacheKeeplist.push(CACHE_NAME);

      return Promise.all(
        keyList.map((key, i) => {
          if (cacheKeeplist.indexOf(key) === -1) {
            console.log((keyList[i] = " cache deleted"));
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});

// fetches cache data
self.addEventListener("fetch", (e) => {
  console.log("fetched " + e.request.url);
  // method intercepts fetch requests
  e.respondWith(
    // methods checks if cache resource exists in `caches` to determine a cache or fetch request return
    caches.match(e.request).then((request) => request || fetch(e.request))
  );
});
