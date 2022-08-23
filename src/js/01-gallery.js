import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const parentDivEl = document.querySelector('.gallery');

const gallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
      </a>`;
  })
  .join('');

parentDivEl.insertAdjacentHTML('beforeend', gallery);

new SimpleLightbox('.gallery a', {
  showCounter: false,
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
});

// ! Задание 1 - библиотека SimpleLightbox
// * Выполняй это задание в файлах 01 - gallery.html и 01 - gallery.js.
// * Разбей его на несколько подзадач:

// * 1. Добавь библиотеку SimpleLightbox как зависимость проекта используя
// * 	npm(ссылка на CDN из твоей прошлой работы больше не нужна).

// * 2. Используй свой JavaScript код из предыдущей домашней работы,
// * 	но выполни рефакторинг с учетом того, что библиотека была установлена через
// * 	npm(синтаксис import /export).

// * Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт,
// * кроме того который описан в документации.
