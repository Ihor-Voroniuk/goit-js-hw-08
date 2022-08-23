import throttle from 'lodash.throttle';

const formFeedbackEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('[name="email"]');
const messageInputEl = document.querySelector('[name="message"]');

const KEY_LOCAL_STORAGE = 'feedback-form-state';

const dataInLocalStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));

if (dataInLocalStorage !== null) {
  emailInputEl.value = dataInLocalStorage.email;
  messageInputEl.value = dataInLocalStorage.message;
}

const feedbackFormObj = {
  email: 'email',
  message: 'message',
};

formFeedbackEl.addEventListener(
  'input',
  throttle(() => {
    entryLocalStorage();
  }, 500),
);

function entryLocalStorage() {
  feedbackFormObj.email = emailInputEl.value;
  feedbackFormObj.message = messageInputEl.value;
  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(feedbackFormObj));
}

formFeedbackEl.addEventListener('submit', e => {
  e.preventDefault();

  if (emailInputEl.value !== '' && messageInputEl.value !== '') {
    console.log(feedbackFormObj);

    formFeedbackEl.reset();
    localStorage.removeItem(KEY_LOCAL_STORAGE);
  }
});

// ! Задание 3 - форма обратной связи
// * В HTML есть разметка формы.Напиши скрипт который будет сохранять значения полей
// * в локальное хранилище когда пользователь что - то печатает.

// * <form class="feedback-form" autocomplete="off">
// *   <label>
// *     Email
// *     <input type="email" name="email" autofocus />
// *   </label>
// *   <label>
// *     Message
// *     <textarea name="message" rows="8"></textarea>
// *   </label>
// *   <button type="submit">Submit</button>
// * </form>

// * Выполняй это задание в файлах 03-feedback.html и 03-feedback.js.
// * Разбей его на несколько подзадач:

// * 1. Отслеживай на форме событие input, и каждый раз записывай в
// *    локальное хранилище объект с полями email и password,
// *    в которых сохраняй текущие значения полей формы.
// *  	Пусть ключом для хранилища будет строка "feedback-form-state".

// * 2. При загрузке страницы проверяй состояние хранилища,
// *    и если там есть сохраненные данные, заполняй ими поля формы.
// *    В противном случае поля должны быть пустыми.

// * 3. При сабмите формы очищай хранилище и поля формы,
// *    а также выводи объект с полями email,
// *    password и текущими их значениями в консоль.

// * 5. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// *    Для этого добавь в проект и используй библиотеку lodash.throttle.
