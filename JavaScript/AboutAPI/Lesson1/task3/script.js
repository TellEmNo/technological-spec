// 1. Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и
// текста. Вам необходимо использовать Bootstrap для стилизации элементов.
// 2. Используйте Bootstrap, чтобы стилизовать элементы:
// a. Заголовок статьи (<h2>)
// b. Текст статьи (<p>)
// c. Кнопки "Добавить статью", "Удалить" и "Редактировать".
// 3. Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте
// JSON-данные для определения заголовков и текстов статей.
// 4. Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна
// появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
// 5. Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая
// статья должна быть удалена из списка.
// 6. Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать"
// пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте
// всплывающее окно или prompt для ввода новых данных.
// 7. Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное
// хранилище браузера, чтобы они сохранялись после перезагрузки страницы.

// JSON данные для статей
const initialArticles = [
  {
    title: 'Заголовок 1',
    content: 'Контент 1'
  },
  {
    title: 'Заголовок 2',
    content: 'Контент 2'
  },
  {
    title: 'Заголовок 3',
    content: 'Контент 3'
  }
];

// Получаем статьи из LocalStorage или используем начальный список
let articles = JSON.parse(localStorage.getItem('articles')) || initialArticles;
const articlesBox = document.querySelector('.articles-box');
const addArticleBtn = document.getElementById('add-article');

// Функция для отрисовки всех статей
const renderArticles = () => {
  articlesBox.innerHTML = ''; // Очищаем контейнер перед отрисовкой
  articles.forEach((article, index) => {
    const articleCard = document.createElement('div');
    articleCard.classList.add('card', 'mb-3');
    
    articleCard.innerHTML = `
      <div class="card-body">
        <h2 class="card-title">${article.title}</h2>
        <p class="card-text">${article.content}</p>
        <button class="btn btn-warning me-2 edit-article" data-index="${index}">Редактировать</button>
        <button class="btn btn-danger delete-article" data-index="${index}">Удалить</button>
      </div>
    `;
    articlesBox.appendChild(articleCard);
  });
  addListeners();
};

// Функция для добавления обработчиков на кнопки редактирования и удаления
const addListeners = () => {
  document.querySelectorAll('.delete-article').forEach(button => {
    button.addEventListener('click', deleteArticle);
  });

  document.querySelectorAll('.edit-article').forEach(button => {
    button.addEventListener('click', editArticle);
  });
};

// Функция для добавления статьи
const addArticle = () => {
  const newArticle = {
    title: 'Новая статья',
    content: 'Введите содержание статьи...'
  };
  articles.push(newArticle);
  saveArticles();
  renderArticles();
};

// Функция для редактирования статьи
const editArticle = (e) => {
  const index = e.target.dataset.index;
  const newTitle = prompt('Введите новый заголовок:', articles[index].title);
  const newContent = prompt('Введите новый текст:', articles[index].content);

  if (newTitle !== null && newContent !== null) {
    articles[index].title = newTitle;
    articles[index].content = newContent;
    saveArticles();
    renderArticles();
  }
};

// Функция для удаления статьи
const deleteArticle = (e) => {
  const index = e.target.dataset.index;
  articles.splice(index, 1); // Удаляем статью из массива
  saveArticles();
  renderArticles();
};

// Функция для сохранения статей в LocalStorage
const saveArticles = () => {
  localStorage.setItem('articles', JSON.stringify(articles));
};

// Событие для добавления новой статьи
addArticleBtn.addEventListener('click', addArticle);

// Первоначальная отрисовка статей
renderArticles();