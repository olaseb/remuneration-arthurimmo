// Service worker minimal : permet l'installation de l'app (icône sur le bureau /
// écran d'accueil), sans mise en cache agressive — les données viennent de
// Firebase en temps réel, donc on laisse toujours passer les requêtes réseau.
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ self.clients.claim(); });
self.addEventListener('fetch', function(e){
  e.respondWith(fetch(e.request).catch(function(){ return caches.match(e.request); }));
});
