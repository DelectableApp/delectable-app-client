// (1) Installation
self.addEventListener('install', event => {
  // Un Service Worker a fini d'être
  // installé quand la promesse dans
  // `event.waitUntil` est résolue
  event.waitUntil(
    // Création d'une promesse
    // factice qui est résolue au
    // bout d'une seconde.
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
  );
});


// (2) Activation
self.addEventListener('activate', event => {
  // Un Service Worker a fini d'être
  // activé quand la promesse dans
  // `event.waitUntil` est résolue
  event.waitUntil(
    // Création d'une promesse
    // factice qui est résolue au
    // bout d'une seconde.
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
  );
});


// (2) Activation
self.addEventListener('fetch', event => {
});
