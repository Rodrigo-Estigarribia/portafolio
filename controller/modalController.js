import { projects } from '../model/projectsModel.js';

let currentIndex = 0;
let images = [];

export function initModal(){

  const modal = document.getElementById("modal");
  const closeBtn = modal.querySelector(".close");
  const carouselImg = document.getElementById("carousel-img");

  document.querySelectorAll(".open-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      const project = projects[btn.dataset.index];

      images = project.images; // recibe array de imágenes
      currentIndex = 0;

      carouselImg.src = images[currentIndex];

      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImg.src = images[currentIndex];
  });

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImg.src = images[currentIndex];
  });

}
