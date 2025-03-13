// Example JavaScript (you can add your functionality here)
console.log("Website loaded!");

//Example of adding a class to the body on load.
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }