import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
    .map(({original, preview, description}) =>
        `<li class = "gallery__item"><a class = "gallery__link" href = ${original}><img src = ${preview} alt = '${description}'
data-source = ${original} class = "gallery__image"></a></li>`)
    .join(""); 

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

// const onImageClick = (event) => {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") {
//         return;
//     };
//     const instance = basicLightbox.create(
//         `<img src = ${event.target.dataset.source} alt = ${event.target.alt}
//         width = "800" height = "600">`,
//      {
//      onClose: (instance) => gallery.removeEventListener("keydown", closeByEscape),
//         }
//     );
//      const closeByEscape = (e) => {
//         if (e.code === "Escape") {
//             instance.close();
//         }
//     };
//      instance.show();
//     if (instance.visible()) {
//         gallery.addEventListener("keydown", closeByEscape);
//     }
// };
// gallery.addEventListener("click", onImageClick);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);

