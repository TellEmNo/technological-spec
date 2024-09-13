const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    console.log('Запрос получен');
  }
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Добро пожаловать на главную страницу!</h1>');
  }
  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>О нас</h1>');
  }
});


const port = 3001;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});