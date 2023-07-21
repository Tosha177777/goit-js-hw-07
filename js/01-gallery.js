import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
let largeImageUrl;
let instance;

const markup = galleryItems
  .map(
    ({ preview, description, original }) => `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", modalClick);
gallery.addEventListener("keydown", modalCloseEsc);

function modalClick(e) {
  e.preventDefault();
  const target = e.target;
  if (target === e.currentTarget) {
    return;
  }
  largeImageUrl = target.parentNode.href;
  modalOpen();
}

function modalOpen() {
  instance = basicLightbox.create(
    `
		<img src="${largeImageUrl}">
	`
  );
  instance.show();
}

function modalCloseEsc(e) {
  if (e.code === "Escape" && instance) {
    instance.close();
  }
}
