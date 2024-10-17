// 1. Определение текущего размера окна браузера:
// ○ Напишите функцию, которая будет выводить текущую
// ширину и высоту окна браузера при его изменении.
// 2. Подтверждение закрытия страницы:
// ○ Создайте всплывающее окно или диалоговое окно,
// которое появляется при попытке закрыть вкладку
// браузера и спрашивает пользователя, уверен ли он в
// своем решении закрыть страницу.
// 3. Управление историей переходов:
// ○ Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.

const widthAndHeightOfWindow = () => {
  const width = document.querySelector('#width');
  const height = document.querySelector('#height');
  width.textContent = window.innerWidth;
  height.textContent = window.innerHeight;
}

window.addEventListener('resize', widthAndHeightOfWindow)
window.addEventListener('load', widthAndHeightOfWindow)

window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';
})

document.querySelector('.back').addEventListener('click', () => {
  history.back();
})

document.querySelector('.forward').addEventListener('click', () => {
  history.forward();
})