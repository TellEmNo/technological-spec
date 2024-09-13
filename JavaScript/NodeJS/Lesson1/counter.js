const counter = (n) => {
  console.log(n);
  setTimeout(() => {
    counter(n + 1);
  }, 50);
}

counter(0);

setTimeout(() => {
  console.log('Скрипт успешно завершен!');
  process.exit();
}, 2000);