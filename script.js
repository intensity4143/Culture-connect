// Toggle the nav menu when hamburger is clicked
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

// Function to toggle the navigation menu visibility
function toggleNavMenu() {
    nav.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNavMenu);

// Changing background image functionality
const imageContainer = document.querySelector('.image-container');
const images = [
    'images/akshardham_monument_with_sarovar-002.jpg',
    'images/akshardham_monument_evening-097.jpg',
    'images/bg4.jpg',
    'images/bg5.jpg',
    'images/bg6.jpg',
    'images/bg3.jpg',
    'images/bg7.jpg',
];

let currentImageIndex = 0;

// Change background image
setInterval(function() {
    imageContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length; 
}, 2000);

