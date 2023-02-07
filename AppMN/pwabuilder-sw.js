// This is the "Offline copy of pages" service worker

const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(pwabuilder-offline) {
      return Promise.all(
        cacheNames.filter(function(pwabuilder-offline) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(pwabuilder-offline) {
          return caches.delete(pwabuilder-offline);
        })
      );
    })
  );
});
