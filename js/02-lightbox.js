import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function getGalleryItemMarkup() {
  return galleryItems
    .map(item => {
      return `
      <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    `;
    })
    .join('');
}

gallery.innerHTML = getGalleryItemMarkup();

new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
  alertError: false,
});

console.log(galleryItems);
