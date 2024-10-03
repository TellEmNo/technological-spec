const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;

let saveQueue = Promise.resolve();

let views = {
  home: 0,
  about: 0,
};

const loadViews = async () => {
  try {
    const data = await fs.readFile('views.json', 'utf8');
    views = JSON.parse(data);
  } catch (err) {
    console.log('Файл views.json не найден или ошибка чтения, создается новый файл.');
  }
};

const saveViews = async () => {
  saveQueue = saveQueue.then(async () => {
    try {
      await fs.writeFile('views.json', JSON.stringify(views), 'utf8');
      console.log('Просмотры сохранены в views.json');
    } catch (err) {
      console.error(err);
    } finally {
      isSaving = false;
    }
  })
};

loadViews();

app.get('/', async (req, res) => {
  views.home++;
  await saveViews();

  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(`
    <h1>Главная страница</h1>
    <p>Количество просмотров: ${views.home}</p>
    <a href="/about">О нас</a>
  `);
});

app.get('/about', async (req, res) => {
  views.about++;
  await saveViews();

  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(`
    <h1>О нас</h1>
    <p>Количество просмотров: ${views.about}</p>
    <a href="/">Главная страница</a>
  `);
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
