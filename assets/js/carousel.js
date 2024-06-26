const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carouselInner.children;
const prevArrow = carousel.querySelector('.prev-arrow');
const nextArrow = carousel.querySelector('.next-arrow');
let currentIndex = 0;

// slide function for carousel items
function moveToSlide(index) {
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].classList.remove('active');
  }
  carouselItems[index].classList.add('active');
  currentIndex = index;
}

// Move to next slide function
function moveToNextSlide() {
  if (currentIndex >= carouselItems.length - 1) {
    moveToSlide(0);
  } else {
    moveToSlide(currentIndex + 1);
  }
}

// Move to previous slide function
function moveToPrevSlide() {
  if (currentIndex === 0) {
    moveToSlide(carouselItems.length - 1);
  } else {
    moveToSlide(currentIndex - 1);
  }
}

// Event listeners for arrow keys
prevArrow.addEventListener('click', moveToPrevSlide);
nextArrow.addEventListener('click', moveToNextSlide);

moveToSlide(currentIndex);
