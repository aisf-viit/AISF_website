// gallery.js

let currentIndex = 0;

function showImage(index) {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery-image');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Initialize gallery by showing the first image
showImage(currentIndex);
