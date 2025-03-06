let currentIndex = 0;
const slides = document.querySelectorAll('.slider-img');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Start the slideshow
setInterval(nextSlide, 3000); // Change image every 3 seconds

// Initialize first slide
showSlide(currentIndex);
