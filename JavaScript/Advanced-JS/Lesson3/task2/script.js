// Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
// а затем загружать или удалять сохраненные данные.
// Разработка Интерфейса:
// Создать HTML-страницу с:
// ● Одним текстовым полем для ввода данных пользователем.
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ● Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript:
// 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
// сообщение отображается на странице.

const message = document.querySelector('.message');

document.querySelector('.save-button').addEventListener('click', () => {
  const input = document.querySelector('.input').value;
  message.textContent = '';
  saveToLocalStorage(input)
    .then(() => {
      document.querySelector('.input').value = '';
      const item = document.querySelector('.message-field');
      item.textContent = ''; 
      message.textContent = 'Текст сохранен';
    })
    .catch((error) => {
      message.textContent = error.message;
    });
});

const saveToLocalStorage = (input) => {
  return new Promise((resolve, reject) => {
    if (input.length > 0) {
      localStorage.setItem('text', input);
      resolve();
    } else {
      reject(new Error('Пустое поле!'));
    }
  });
};

document.querySelector('.load-button').addEventListener('click', () => {
  message.textContent = '';
  fetchFromLocalStorage()
    .then((text) => {
      const item = document.querySelector('.message-field');
      item.textContent = text;
      message.textContent = 'Текст загружен';
    })
    .catch((error) => {
      message.textContent = error.message;
    });
})

const fetchFromLocalStorage = () => {
  return new Promise((resolve, reject) => {
    const text = localStorage.getItem('text');
    if (text && text !== '') {
      resolve(text);
    } else {
      reject(new Error('Данных не найдено'));
    }
  });
};

document.querySelector('.clear-button').addEventListener('click', () => {
  message.textContent = '';
  clearLocalStorage()
    .then(() => {
      const item = document.querySelector('.message-field');
      item.textContent = '';
      const message = document.querySelector('.message');
      message.textContent = 'Данные удалены';
    })
    .catch((error) => {
      message.textContent = error.message;
    });
});

const clearLocalStorage = () => {
  return new Promise((resolve) => {
    localStorage.removeItem('text');
    resolve();
  });
};
