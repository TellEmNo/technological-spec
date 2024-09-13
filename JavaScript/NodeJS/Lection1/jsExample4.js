const http = require('http');

const routes = {
  '/': 'Главная страница',
  '/about': 'О нас',
};

const server = http.createServer((req, res) => {
  console.log('Запрос получен');
  if (routes[req.url]) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<h1>${routes[req.url]}</h1>`);
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Страница не найдена</h1>');
  }
});


const port = 3001;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});