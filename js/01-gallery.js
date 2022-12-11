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
const instance = basicLightbox.create(
  ` <img src="" >`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscapeCloseModal);
    },
  },
  {
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscapeCloseModal);
    },
  }
);

function onOpenModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance.element().querySelector("img").src = evt.target.dataset.source;

  instance.show();
}

function onEscapeCloseModal(evt) {
  if (evt.code === "Escape") {
    return instance.close();
  }
}
