// Вы должны создать веб-страницу, которая позволяет пользователю динамически
// управлять элементами на странице. Ниже приведены основные требования и
// функциональность:
// 1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и
// "Клонировать элемент".
// 2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый
// квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент
// должен иметь класс .box и содержать текст, указывающий порядковый номер
// элемента (1, 2, 3 и так далее).
// 3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный
// элемент, если таковой имеется.
// 4. При нажатии на кнопку "Клонировать элемент" создается копия последнего
// добавленного элемента и добавляется на страницу.
// 5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
// 6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в
// любом количестве.

const section = document.querySelector('.task');
let allBoxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('.action-button');
const boxesDiv = document.querySelector('.boxes');

buttons.forEach(button => {
  button.style = 'padding: 5px 10px; border-radius: 5px; width: 130px; height: 40px;';
});

section.style = 'display: flex; flex-wrap: wrap; gap: 10px; flex-direction: column;';
boxesDiv.style = 'display: flex; flex-wrap: wrap; gap: 10px;';
allBoxes.forEach(box => {
  box.style = 'width: 100px; height: 100px; background-color: lightblue; display: flex; align-items: center; justify-content: center; font-size: 25px; font-weight: bold;';
});

const addbutton = document.querySelector('#add-button');
const deletebutton = document.querySelector('#delete-button');
const clonebutton = document.querySelector('#clone-button');
let counter = 3;

addbutton.addEventListener('click', () => {
  const newBox = document.createElement('div');
  newBox.classList.add('box');
  newBox.style = 'width: 100px; height: 100px; background-color: lightblue; display: flex; align-items: center; justify-content: center; font-size: 25px; font-weight: bold;';
  const number = document.createElement('p');
  number.classList.add('number');
  number.textContent = ++counter;
  newBox.appendChild(number);
  boxesDiv.appendChild(newBox);
  allBoxes = document.querySelectorAll('.box');
});

deletebutton.addEventListener('click', () => {
  allBoxes = document.querySelectorAll('.box');
  if (allBoxes.length > 0) {
    const lastBox = allBoxes[allBoxes.length - 1];
    const secondLastBox = allBoxes.length > 1 ? allBoxes[allBoxes.length - 2] : null;

    lastBox.remove();
    
    if (secondLastBox && lastBox.textContent !== secondLastBox.textContent) {
      counter--;
    }
  }
});

clonebutton.addEventListener('click', () => {
  allBoxes = document.querySelectorAll('.box');
  if (allBoxes.length > 0) {
    const lastBox = allBoxes[allBoxes.length - 1];
    const clonedBox = lastBox.cloneNode(true);
    boxesDiv.appendChild(clonedBox);
  }
});
