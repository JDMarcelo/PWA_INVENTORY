//check if the SW is supported
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      console.log('Service worker registered');
      // Access the `reg` variable here
    }).catch((err) => {
      console.log('Service worker not registered', err);
    });
  }
  