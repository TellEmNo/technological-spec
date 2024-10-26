// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

// * Дополнительные задачи (по желанию):

// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

const photoEl = document.querySelector('.photo')
const photographerEl = document.querySelector('.photographer')
const likeBtn = document.querySelector('.like-btn')
const likesCountEl = document.querySelector('.likes-count')
const historyEl = document.querySelector('.history')

let likesCount = JSON.parse(localStorage.getItem('likesCount')) || 0;
likesCountEl.textContent = `Лайков: ${likesCount}`;

const apiUrl = 'https://api.unsplash.com/photos/random';
const accessKey = 'JrLkF8yaYtZvQZkTiQGWApwhOr6foD2Xi10vLuV5UjM';

async function fetchRandomPhoto() {
  try {
    const response = await fetch(`${apiUrl}?client_id=${accessKey}`);
    const data = await response.json();
    displayPhoto(data);
    savePhotoToHistory(data);
  } catch (error) {
    console.error('Ошибка загрузки фото:', error);
  }
}

// Отображение фотографии и инфо о фотографе
function displayPhoto(photoData) {
  photoEl.src = photoData.urls.regular;
  photographerEl.textContent = `Фотограф: ${photoData.user.name}`;
}

function increaseLikeCount() {
  likesCount += 1;
  localStorage.setItem('likesCount', JSON.stringify(likesCount));
  likesCountEl.textContent = `Лайков: ${likesCount}`;
}

// Сохранение фото в историю
function savePhotoToHistory(photoData) {
  const history = JSON.parse(localStorage.getItem('photoHistory')) || [];
  history.push({
    url: photoData.urls.regular,
    photographer: photoData.user.name
  });
  localStorage.setItem('photoHistory', JSON.stringify(history));
  displayHistory();
}

// Отображение истории
function displayHistory() {
  historyEl.innerHTML = '';
  const history = JSON.parse(localStorage.getItem('photoHistory')) || [];
  history.forEach(item => {
    const imgEl = document.createElement('img');
    imgEl.src = item.url;
    imgEl.alt = `Photo by ${item.photographer}`;
    historyEl.appendChild(imgEl);
  });
}

likeBtn.addEventListener('click', increaseLikeCount);

window.addEventListener('load', () => {
  fetchRandomPhoto();
  displayHistory();
});