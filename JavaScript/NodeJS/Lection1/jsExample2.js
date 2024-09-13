const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    console.log('Запрос получен');
  }
  res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
  res.end('<h1>Добро пожаловать на мой первый сервер!</h1>');
});


const port = 3001;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});