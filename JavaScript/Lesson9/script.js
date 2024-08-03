// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const inputEl = document.querySelector('input[type="checkbox"]');
// const buttonEl = document.querySelector('.btn');
// const formEl = document.querySelector('.form');
// let errorMessage = false;

// buttonEl.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (!inputEl.checked && !errorMessage) {
//     const pEl = document.createElement('p');
//     pEl.textContent = 'Необходимо согласиться с условиями';
//     buttonEl.insertAdjacentElement('afterend', pEl);
//     errorMessage = true;
//   } 
//     else if (inputEl.checked) {
//       formEl.submit();
//     }
// })


// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const btn = document.querySelector('.btn');
// const inputDrink = document.querySelectorAll('[name="drink"]');
// let errorMessage = false;
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   inputDrink.forEach((radio) => {
//     if (radio.checked) {
//       if (radio.id === 'coffee' && !errorMessage) {
//         const pEl = document.createElement('p');
//         pEl.textContent = 'Кофе ушел';
//         btn.insertAdjacentElement('afterend', pEl);
//         errorMessage = true;
//       } else if (radio.id === 'tea' && !errorMessage) {
//         const pEl = document.createElement('p');
//         pEl.textContent = 'Чай улетел';
//         btn.insertAdjacentElement('afterend', pEl);
//         errorMessage = true;
//       }
//       document.addEventListener('keypress', (e) => {
//         let key = e.key;
//         if (key === 'r') {
//           errorMessage = false;
//         }
//       });
//     }
//   });
// })

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const inputEl = document.querySelector('#pass');
// const btn = document.querySelector('.btn');
// const form = document.querySelector('.form');

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (inputEl.value.toLowerCase() === 'пароль') {
//     inputEl.style.border = '2px solid green';
//     form.submit();
//   } else {
//     inputEl.style.border = '2px solid red';
//     inputEl.value = '';
//     inputEl.placeholder = 'Неверный пароль';
//   }
// })

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

// const inputText = document.querySelector('.input');
// const h1El = document.querySelector('.heading');

// inputText.addEventListener('input', () => {
//   h1El.textContent = inputText.value;
// })

// Homework

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

// const inputText = document.querySelector('#from');
// const spanEl = document.querySelector('span');

// inputText.addEventListener('input', () => {
//   spanEl.textContent = inputText.value;
// })

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// const messageBtn = document.querySelector('.messageBtn');
// const message = document.querySelector('.message');

// messageBtn.addEventListener('click', () => {
//   message.classList.add('animate_animated', 'animate_fadeInLeftBig');
//   message.style.visibility = 'visible';
// });

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector('form');
const formControl = document.querySelectorAll('.form-control');

const validateField = (field) => {
  if (field.value.trim() === "") {
    field.classList.add('error');
  } else field.classList.remove('error');
};

formControl.forEach(element => {
  element.addEventListener('input', () => {
    validateField(element);
  }); // проверка в реальном времени
});

form.addEventListener('submit', (e) => {
  let isValidOrNo = true;

  formControl.forEach(element => {
    validateField(element);
    if (element.classList.contains('error')) {
      isValidOrNo = false;
    };
  }); // проверка при отправке формы
  if (!isValidOrNo) {
    e.preventDefault();
  };
});