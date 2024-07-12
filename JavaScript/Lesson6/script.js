// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Получите ссылку на первый абзац с классом www. и вывести его в консоль

// const paragraphEl1 = document.querySelector('#block > p');
// console.log(paragraphEl1);
// const pClassWww = document.querySelector('.www');
// console.log(pClassWww);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/

// const link = document.querySelector('.link');
// link.textContent = 'link text js';
// link.href = 'https://developer.mozilla.org/ru/';
// console.log(link);

// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const photoElm = document.querySelector('.photo');
// photoElm.src= 'https://img.freepik.com/free-photo/beautiful-scenery-river-surrounded-by-greenery-forest_181624-40482.jpg?t=st=1720725690~exp=1720729290~hmac=bdffe956fc375755be781dc7b126278f03a098acc83d1ea7374586b224e73c1a&w=1380';

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// const contentElm = document.querySelector('.content');
// const contentPrgrph = document.createElement('p');
// contentPrgrph.className = 'contentPrgrph';
// contentPrgrph.textContent = 'У меня есть текст и его много';
// contentElm.appendChild(contentPrgrph);
// contentElm.remove();
// contentElm.removeChild(contentPrgrph);
// contentPrgrph.remove();

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const contentElm2 = document.querySelector('.content2');
// const content2Btn = document.createElement('button');
// contentElm2.appendChild(content2Btn);
// content2Btn.textContent = 'Считай!';
// let count = 0;
// content2Btn.onclick = () => {
//   count++;
//   console.log(count);
// };
// content2Btn.addEventListener('click', () => {
//   count++;
//   console.log(count);
// });

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const contentElm3 = document.querySelector('.content3');
// const content3Btn = document.createElement('button');
// contentElm2.appendChild(content3Btn);
// content3Btn.textContent = 'Заряжаю!';
// content3Btn.onclick = () => {
// content3Btn.textContent = 'Зарядил';
// };
// content3Btn.addEventListener('click', () => content3Btn.textContent = 'Зарядил');

// Homework
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const super_link = document.querySelector('#super_link');
console.log(super_link);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const allCardLink = document.querySelectorAll('.card-link');
console.log(allCardLink);
allCardLink.forEach(value => {
  value.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// Оставлю два решения на всякий, может что-то не так сделал.

const cardLinks = document.querySelectorAll('.card-body > .card-link');
console.log(cardLinks);


// const cardBody = document.querySelectorAll('.card-body');
// const cardLinks = [];
// cardBody.forEach(values => {
//   const links = values.querySelectorAll('.card-link');
//   links.forEach(link => cardLinks.push(link))
// });
// console.log(cardLinks);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const ElementWithDataNumber50 = document.querySelector('[data-number="50"]');
console.log(ElementWithDataNumber50);

// Выведите содержимое тега title в консоль.

const title = document.title;
console.log(title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const card = document.querySelector('.card');
const elementP = document.createElement('p');
elementP.textContent = 'Привет!';
// const cardBody = document.querySelector('.card-body');
// card.insertBefore(elementP, cardBody);
card.insertBefore(elementP, card.firstChild);

// 8. Удалите тег h6 на странице.

const h6 = document.querySelector('h6');
h6.remove();