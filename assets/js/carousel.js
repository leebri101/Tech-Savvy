document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    const dotsContainer = document.querySelector(".carousel-controls");
  
    items.forEach((item, index) => {
      const dot = document.createElement("span");
      dot.classList.add("carousel-dot");
      dot.addEventListener("click", () => {
        goToItem(index);
      });
      dotsContainer.appendChild(dot);
    });
  
    let currentIndex = 0;
    const dots = document.querySelectorAll(".carousel-dot");
  
    function goToItem(index) {
      currentIndex = index;
      const offset = -index * 100;
      document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`;
      setActiveDot(index);
    }
  
    function setActiveDot(index) {
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
  
    setActiveDot(currentIndex);
  });