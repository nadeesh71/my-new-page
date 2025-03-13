const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

// Check for saved preference
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'true') {
  body.classList.add('dark-mode');
  darkModeToggle.classList.add('dark');
  darkModeToggle.textContent = "Light Mode";
}

darkModeToggle.addEventListener('click', () => { 
  body.classList.toggle('dark-mode');
  darkModeToggle.classList.toggle('dark');  

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'true');
    darkModeToggle.textContent = "Light Mode";
  } else {
    localStorage.setItem('darkMode', 'false');
    darkModeToggle.textContent = "Dark Mode";
  }
});
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let counter = 0;
const imageWidth = images[0].clientWidth;

function slide() {
    slider.style.transform = `translateX(-${imageWidth * counter}px)`;
}

function nextSlide() {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    slide();
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
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