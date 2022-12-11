import { galleryItems } from "./gallery-items.js";
// Change code below this line
const addElements = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

const galleryList = document.querySelector(".gallery");
galleryList.innerHTML = addElements;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});
