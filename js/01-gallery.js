import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

// Función para crear elementos de la galería
function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.setAttribute("data-source", item.original);
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

// Función para abrir la ventana modal
function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${source}" alt="">`);
  instance.show();
}

// Crear elementos de la galería y agregar event listener
galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  gallery.appendChild(galleryItem);
});

gallery.addEventListener("click", openModal);
console.log(galleryItems);
