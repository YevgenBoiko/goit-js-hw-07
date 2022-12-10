import { galleryItems } from "./gallery-items.js";
// Change code below this line
const addGalleryItem = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = addGalleryItem;

galleryList.addEventListener("click", onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  document.addEventListener("keydown", onEscapeCloseModal);

  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600">
`
  );

  function onEscapeCloseModal(evt) {
    if (evt.code === "Escape") {
      return instance.close();
    }
  }

  instance.show();
}
