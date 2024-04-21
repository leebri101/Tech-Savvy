document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".carousel-item");
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");
  let currentIndex = 0;

  function goToItem(index) {
    currentIndex = index;
    const offset = -index * 100;
    document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`;
  }

  function showNextItem() {
    if (currentIndex < items.length - 1) {
      goToItem(currentIndex + 1);
    } else {
      goToItem(0);
    }
  }

  function showPrevItem() {
    if (currentIndex > 0) {
      goToItem(currentIndex - 1);
    } else {
      goToItem(items.length - 1);
    }
  }

  nextArrow.addEventListener("click", showNextItem);
  prevArrow.addEventListener("click", showPrevItem);

  // Initial setup
  goToItem(currentIndex);
});
