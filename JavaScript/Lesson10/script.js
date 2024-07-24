const divEl = document.createElement('div');
const body = document.querySelector('body');
const parseData = JSON.parse(dataFile);

body.appendChild(divEl);
console.log(parseData);
parseData.message.forEach(img => {
  divEl.insertAdjacentHTML('beforeend', `
    <figure>
    <img src="${img}" alt="dogs" />
    <figcaption>lot of dogs</figcaption>
    </figure>`
  );
});

const url = 'https://jsonplaceholder.typicode.com/users';
async function asyncData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}
try {
  const myData = await asyncData(url);
  console.log(myData);
  myData.forEach(elm => {
    divEl.insertAdjacentHTML('beforeend', `
      <h2>${elm.name}</h2>
      <p>${elm.email}</p>
      <p>${elm.address.city}</p>`)
  })
} catch (error) {
  console.log(`Ошибка ${error.message}`);
}