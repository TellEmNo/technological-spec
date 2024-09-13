const http = require('http');

const mainHTML = '<h1>Главная страница</h1><a href="/about">О нас</a><br><a href="/oneMorePage">Еще одна страница</a>';
const aboutHTML = '<h1>О нас</h1><a href="/">Главная страница</a><br><a href="/oneMorePage">Еще одна страница</a>';
const oneMorePage = '<h1>Еще одна страница</h1><a href="/">Главная страница</a><br><a href="/about">О нас</a>';

const routes = {
  '/': mainHTML,
  '/about': aboutHTML,
  '/oneMorePage': oneMorePage,
};

const viewCounters = {
  '/': 0,
  '/about': 0,
  '/oneMorePage': 0,
};

const server = http.createServer((req, res) => {
  console.log('Запрос получен');

  if (routes[req.url]) {

    viewCounters[req.url]++;

    const pageContent = `${routes[req.url]}<br><p> Количество просмотров: ${viewCounters[req.url]}</p>`

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(pageContent);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Страница не найдена</h1><a href="/">На главную</a>');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
