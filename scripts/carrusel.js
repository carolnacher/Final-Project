let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNext() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  const newPosition = -currentIndex * (itemWidth + 20); // 20px de margen entre imágenes
  document.querySelector('.carousel-inner').style.transform = `translateX(${newPosition}px)`;
}

// Event Listeners para botones de navegación
document.getElementById('prevBtn').addEventListener('click', showPrev);
document.getElementById('nextBtn').addEventListener('click', showNext);
