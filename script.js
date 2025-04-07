function openMenu(){
    const hamburger = document.querySelector('.fa-bars')
    const rightMenu = document.querySelector('header nav ul')
    hamburger.style.display = 'none'
    rightMenu.style.right = "0"
}
function closeMenu(){
    const hamburger = document.querySelector('.fa-bars')
    const rightMenu = document.querySelector('header nav ul')
    hamburger.style.display = 'block'
    rightMenu.style.right = "-250px"
}mburger.addEventListener('click', toggleNavMenu);

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

