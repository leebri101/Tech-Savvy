// script for carousel animation
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".carousel-item");
  const prevArrow = document.querySelector(".prev");
  const nextArrow = document.querySelector(".next");

  let itemWidth = items[0];
  function goToItem(index) {
    currentIndex = index;
    const offset = -index * itemWidth;
    document.querySelector(".carousel-inner").style.transform = `translateX(${offset}px)`;
  }

  // array for next and previous buttons
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
  
  // Event listeners for next & previous buttons
  nextArrow.addEventListener("click", showNextItem);
  prevArrow.addEventListener("click", showPrevItem);

  goToItem(currentIndex);
});
  