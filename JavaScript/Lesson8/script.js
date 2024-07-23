// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// const body = document.querySelector('body');
// body.insertAdjacentHTML('afterbegin', '<button class="btn">Button</button>');
// const buttonEl = document.querySelector('.btn');
// window.onload = () => console.log('Страница загрузилась');
// buttonEl.onclick = () => console.log('событие onclick');
// buttonEl.addEventListener('click', () => console.log('событие addEventListener'));

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// const body = document.querySelector('body');
// for (let i = 0; i < 3; i++) {
//   if (i < 3) {
//     body.insertAdjacentHTML('afterbegin', `<button class="btn${i + 1}">Button${i + 1}</button>`);   
//   }
// }
// body.addEventListener('click', (e) =>{
//   if (e.target.nodeName === 'BUTTON') {
//     console.log(`Нажали на кнопку ${e.target.textContent}`);
//   }
// });
// body.insertAdjacentHTML('afterbegin', '<button class="btn4">Button4</button>');
// const btn4 = document.querySelector('.btn4');
// let counter = 0;
// btn4.addEventListener('click', () => {
//   counter++;
//   console.log(`На кнопку нажали ${counter} раз`);
// });
// body.insertAdjacentHTML('afterbegin', '<button class="btn5">Button5</button>');
// const btn5 = document.querySelector('.btn5');
// btn5.addEventListener('click', () => {
//   btn5.textContent = 'Вы нажали на эту кнопку';
// });

// Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только мы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const body = document.querySelector('body');
// const btn = document.createElement('button');
// btn.textContent = 'Create h1';
// btn.classList.add('btn');
// body.appendChild(btn);
// btn.addEventListener('click', () => {
//   const h1 = document.createElement('h1');
//   h1.innerText = 'Новый заголовок';
//   thirdButton.insertAdjacentElement('afterend', h1);
// });
// const deleteBtn = document.createElement('button');
// deleteBtn.textContent = 'Delete h1';
// body.appendChild(deleteBtn);
// deleteBtn.addEventListener('click', () => {
//   document.querySelector('h1').remove();
// });

// const thirdButton = document.createElement('button');
// thirdButton.textContent = 'Third button';
// body.appendChild(thirdButton);
// thirdButton.addEventListener('mouseover', () => {
//   console.log('You hover the cursor over the third button');
// });
// thirdButton.addEventListener('mouseout', () => {
//   console.log('You moved out the cursor from the button');
// });

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

// const body = document.querySelector('body');
// const addBtn = document.createElement('button');
// const ol = document.querySelector('ol');
// addBtn.innerText = 'Add';
// ol.insertAdjacentElement('afterend', addBtn);
// addBtn.addEventListener('click', () => {
//   ol.insertAdjacentHTML('beforeend', '<li class="li">New element of list</li>');
// });
// const deleteBtn = document.createElement('button');
// deleteBtn.innerText = 'Delete';
// addBtn.insertAdjacentElement('afterend', deleteBtn);
// deleteBtn.addEventListener('click', () => {
//   ol.removeChild(ol.firstElementChild);
// });
// const classClickBtn = document.createElement('button');
// classClickBtn.innerText = 'Add class "click"';
// deleteBtn.insertAdjacentElement('afterend', classClickBtn);
// console.log(classClickBtn);
// classClickBtn.addEventListener('click', () => {
//   classClickBtn.classList.add('click');
//   console.log(classClickBtn);
// });

// Homework
// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", () => {
  console.log("Все теги прогрузились"); // Загружает и разбирает HTML-документ, без загрузки таблиц стилей, изображений
});
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener('load', () => {
  console.log('Страница загрузилась') // Сработает, когда будут загружены все ресурсы, включая изображения и таблицы стилей
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener("click", (e) => {
  const clickedElement = e.target;
  const tagName = clickedElement.tagName.toLowerCase();
  if (clickedElement.classList.contains("super_element")) {
      console.log(`Класс "super_element" присутствует в элементе "${tagName}"`);
  } else {
      console.log(`Класс "super_element" отсутствует в элементе "${tagName}"`);
  }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textArea = document.querySelector('textarea');
textArea.addEventListener('mouseover', () => {
  console.log('Вы навели на textarea');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const uList = document.querySelector('ul');
uList.addEventListener('click', (e) => {
  const clickedButton = e.target;
  const buttonContent = clickedButton.textContent;
  console.log(`Текст внутри элемента: "${buttonContent}"`);
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами. 
// Ответ: Из-за "ранга" элементов на которые мы вешаем слушатель событий или учитывается "ранг" именно самих слушателей этих событий, в любом случае это должно быть комбинация этих вещей, не совсем понимаю, как правильно эту мысль выразить. В пятой задаче, когда мы слушаем событие клик, мы вешаем его на элемент 'ul', а в третьей на 'document' и получается, что слушатель событий на ul 'меньше', чем слушатель событий на document. Таким образом, идет вывод от меньшего к большему, как я понимаю.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const list = document.querySelectorAll('ul li');
console.log(list);
list.forEach((item, i) => {
  if ((i + 1) % 2 === 0) {
    item.style.backgroundColor = 'yellow';
}
});