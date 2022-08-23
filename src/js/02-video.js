import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';
const getTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);

if (getTime) {
  player.setCurrentTime(Number(getTime));
}

player.on(
  'timeupdate',
  throttle(event => {
    setLocalStoreg(event);
  }, 250),
);

const setLocalStoreg = event => {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, event.seconds.toString());
  if (event.seconds === event.duration) {
    localStorage.removeItem(VIDEOPLAYER_CURRENT_TIME);
  }
};

// ! Задание 2 - видео плеер
// * В HTML есть < iframe > с видео для Vimeo плеера.Напиши скрипт который будет сохранять текущее
// * время воспроизведения видео в локальное хранилище и, при перезагрузке страницы,
// * продолжать воспроизводить видео с этого времени.

// * <iframe
// *   id="vimeo-player"
// *   src="https://player.vimeo.com/video/236203659"
// *   width="640"
// *   height="360"
// *   frameborder="0"
// *   allowfullscreen
// *   allow="autoplay; encrypted-media"
// * ></iframe>

// * Выполняй это задание в файлах 02-video.html и 02-video.js. Разбей его на несколько подзадач:

// * 1. Ознакомься с документацией библиотеки Vimeo плеера.
// * https://github.com/vimeo/player.js/#vimeo-player-api

// * 2. Добавь библиотеку как зависимость проекта через npm.

// * 3. Инициализируй плеер в файле скрипта как это описано в секции pre-existing player,
// * https://github.com/vimeo/player.js/#pre-existing-player,
// *	но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// *

// * 4. Разбери документацию метода on() https://github.com/vimeo/player.js/#onevent-string-callback-function-void
// *    и начни отслеживать событие timeupdate https://github.com/vimeo/player.js/#events - обновление времени воспроизведения.

// * 5. Сохраняй время воспроизведения в локальное хранилище.
// *    Пусть ключом для хранилища будет строка "videoplayer-current-time".

// * 6. При перезагрузке страницы воспользуйся методом setCurrentTime() https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror
// *    для того чтобы возобновить воспроизведение с сохраненной позиции.

// * 7. Добавь в проект бибилотеку lodash.throttle https://www.npmjs.com/package/lodash.throttle и сделай так,
// * 	чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
