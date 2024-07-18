{/* <div class="block">

</div>
Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute) */}

// const baseDiv = document.querySelector('.block');
// const innerDiv = document.createElement('div');
// baseDiv.appendChild(innerDiv);
// innerDiv.classList.add('item');
// innerDiv.textContent = 'Элемент внутри';
// innerDiv.style.color = 'blue';
// innerDiv.style.border = '1px solid black';
// innerDiv.style.backgroundColor = '#f8f8f8';
// innerDiv.style.padding = '16px';
// innerDiv.classList.add('item_1');
// // innerDiv.setAttribute('class', 'item_1');


// Дан код
{/* <div class="elem">
  <img src="photo.png" alt="photo">
  <div class="content">
    <h2 class="heading">Lorem, ipsum dolor.</h2>
    <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
  </div>
</div> */}

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem


// const text = document.querySelector('.text');
// console.log(text.previousElementSibling);
// console.log(text.parentElement);
// console.log(text.parentElement.previousElementSibling);
// console.log(text.parentElement.parentElement);



{/* <div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */}

// const subtitle = document.querySelector('.subtitle');
// console.log(subtitle.parentNode);
// console.log(subtitle.parentNode.parentNode);
// console.log(subtitle.parentNode.parentNode.parentNode);

{/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным */}


// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const button = document.querySelector('button');
// let h2Warning;
// button.addEventListener('click', (event) => {
//   if (input.value.trim() === '') {
//     event.preventDefault();
//     if (!h2Warning) {
//       h2Warning = document.createElement('h2');
//       h2Warning.textContent = 'Поле не заполнено!';
//       form.appendChild(h2Warning);
//       // input.after(h2Warning);
//     }
//     input.style.border = '2px solid red';
//   } else {
//     if (h2Warning) {
//       h2Warning.remove();
//       h2Warning = null;
//     }
//     input.style.border = '2px solid black';
//     form.submit();
//     form.reset();
//   }
// });

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// Homework 
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownItem = document.querySelectorAll('.dropdown-item');
dropdownItem.forEach(element => {
  element.classList.add('super-dropdown');
});
console.log(dropdownItem);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btn = document.querySelector('.btn');
btn.classList.toggle('btn-secondary'); // убрал
console.log(btn);
btn.classList.toggle('btn-secondary'); // добавил
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
divWithClassMenu = document.querySelector('.menu');
divWithClassMenu.classList.remove('dropdown-menu');
console.log(divWithClassMenu);
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:`<a href="#">link</a>`
const dropdownDiv = document.querySelector('div.dropdown');
dropdownDiv.insertAdjacentHTML('afterbegin', '<a href="#" class = "check">link</a>');
const check = document.querySelector('.check');
console.log(check);
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const superDropdown = document.querySelector('#dropdownMenuButton');
superDropdown.id = 'superDropdown';
console.log(superDropdown);
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

divAddAtribute = document.querySelector('div[aria-labelledby="dropdownMenuButton"]');
divAddAtribute.dataset.dd = '3';
console.log(divAddAtribute);
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const btnRemoveAttribute = document.querySelector('.dropdown-toggle');
btnRemoveAttribute.removeAttribute('type');
console.log(btnRemoveAttribute);