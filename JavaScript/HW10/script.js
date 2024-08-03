const divEl = document.createElement('div');
const body = document.querySelector('body');

body.appendChild(divEl);
const url = 'https://anapioficeandfire.com/api/books';
// const url = 'https://jsonplaceholder.typicode.com/users';


async function getData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}
async function main() { // Чтобы работало вне асинхронной функции, нужно дописать параметр type="module" в подключаемый скрипт файл.
try {
  const myData = await getData(url);
  console.log(myData);
  myData.forEach(elm => {
    divEl.insertAdjacentHTML('beforeend', `
        <figure>
        <img class="img" src="https://t.ctcdn.com.br/DSjFGCs4CprGpViQbmL1fj-nyw4=/1200x675/smart/i350335.jpeg" alt="Картинок нет:("></img>
        <h2>${elm.name}</h2>
        <p>Автор: ${elm.authors}</p>
        <p>Дата выпуска: ${elm.released.slice(0, 10)}</p>
        </figure>
        `)
  })
} catch (error) {
  console.error(`Ошибка: ${error}`);
}
}
main();