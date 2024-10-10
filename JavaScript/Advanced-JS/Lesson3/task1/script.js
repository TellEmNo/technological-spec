// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
// (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
// имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
// задержки — отображать новости на странице.
// 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
// задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
// добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
// выполнение и ошибки с использованием then() и catch().
// 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
// её снова после завершения операции (будь то успешная загрузка или ошибка).

const newsDatabase = [
  { title: "Новость 1", content: "Содержание новости 1" },
  { title: "Новость 2", content: "Содержание новости 2" },
  { title: "Новость 3", content: "Содержание новости 3" }
];

const fetchNews = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error('Ошибка загрузки новостей. Попробуйте снова.'));
      } else {
        resolve(newsDatabase);
      }
    }, 2000);
  });
};

document.querySelector('.load-news').addEventListener('click', () => {
  const button = document.querySelector('.load-news');
  const newsList = document.querySelector('.news-list');
  const status = document.querySelector('.status');

  newsList.innerHTML = '';
  status.textContent = '';

  button.disabled = true;
  status.textContent = 'Загрузка новостей...';
  status.classList.add('loading');

  fetchNews()
    .then((news) => {
      status.textContent = '';
      status.classList.remove('loading');
      news.forEach((item) => {
        const newsItem = document.createElement('div');
        newsItem.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.content}</p>
        `;
        newsList.appendChild(newsItem);
      })
    })
    .catch((error) => {
      status.textContent = error.message;
      status.classList.remove('loading');
      status.classList.add('error');
    })
    .finally(() => {
      button.disabled = false;
      button.textContent = 'Загрузить новости';
    })
});