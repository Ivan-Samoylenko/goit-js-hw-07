import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const largeImage = basicLightbox.create(`<img>`, {
  onShow: () => window.addEventListener('keydown', onEscape),
  onClose: () => window.removeEventListener('keydown', onEscape),
});

gallery.addEventListener('click', onClickGallery);

function getGalleryItemMarkup() {
  return galleryItems
    .map(item => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
        </a>
      </div>
    `;
    })
    .join('');
}

gallery.innerHTML = getGalleryItemMarkup();

function onClickGallery(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  largeImage.element().querySelector('img').setAttribute('src', `${event.target.dataset.source}`);
  largeImage.show();
}

function onEscape(event) {
  if (event.code !== 'Escape') {
    return;
  }
  largeImage.close();
  largeImage.element().querySelector('img').removeAttribute('src');
}

console.log(galleryItems);
