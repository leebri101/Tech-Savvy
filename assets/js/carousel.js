const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carouselInner.children;
const prevArrow = carousel.querySelector('.prev-arrow');
const nextArrow = carousel.querySelector('.next-arrow');

let currentIndex = 0;

function moveToSlide(index) {
  if (index < 0) index = carouselItems.length - 1;
  if (index > carouselItems.length - 1) index = 0;

  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].classList.remove('active');
  }

  carouselItems[index].classList.add('active');
  currentIndex = index;
}

function moveToNextSlide() {
  moveToSlide(currentIndex + 1);
}

function moveToPrevSlide() {
  moveToSlide(currentIndex - 1);
}

prevArrow.addEventListener('click', moveToPrevSlide);
nextArrow.addEventListener('click', moveToNextSlide);

moveToSlide(currentIndex);
