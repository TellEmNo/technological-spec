const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

let views = {
  home: 0,
  about: 0,
};

const loadViews = () => {
  try {
    const data = fs.readFileSync('views.json', 'utf8');
    views = JSON.parse(data);
  } catch (err) {
    console.log('Файл views.json не найден или ошибка чтения, создается новый файл.');
  }
};

const saveViews = () => {
  fs.writeFileSync('views.json', JSON.stringify(views), 'utf8', (err) => {
    if (err) {
      console.error('Ошибка записи в файл views.json', err);
    }
  });
};

loadViews();

app.get('/', (req, res) => {
  views.home++;
  saveViews();

  res.send(`
    <h1>Главная страница</h1>
    <p>Количество просмотров: ${views.home}</p>
    <a href="/about">О нас</a>
  `);
});

app.get('/about', (req, res) => {
  views.about++; 
  saveViews();

  res.send(`
    <h1>О нас</h1>
    <p>Количество просмотров: ${views.about}</p>
    <a href="/">Главная страница</a>
  `);
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
