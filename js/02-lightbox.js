import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
let largeImageUrl;

const markup = galleryItems
  .map(
    ({ preview, description, original }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", modalClick);

function modalClick(e) {
  e.preventDefault();
  const target = e.target;
  if (target === e.currentTarget) {
    return;
  }
  modalSlider();
}

function modalSlider() {
  let lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionPosition: "bottom",
    captionsData: "alt",
    captionDelay: 500,
    animationSpeed: 500,
    fadeSpeed: 1000,
  });
  lightbox.open();
}

console.log(galleryItems);
