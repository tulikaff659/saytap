// Service Worker for Apple of Fortune
const CACHE_NAME = 'apple-fortune-v1.0';

self.addEventListener('install', event => {
  console.log('Service Worker installing');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
