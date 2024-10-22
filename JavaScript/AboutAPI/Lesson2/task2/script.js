// Создайте простое модальное окно, которое появляется при клике на кнопку "Открыть
// модальное окно" и закрывается при клике на кнопку "Закрыть". Модальное окно
// должно содержать заголовок "Модальное окно" и кнопку для закрытия.
// Модальное окно должно плавно появляться и исчезать при открытии и закрытии.

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalButton = document.querySelector('.open-modal-btn');
const closeModalButton = document.querySelector('.close-modal-btn');

openModalButton.addEventListener('click', () => {
  modal.classList.add('show');
  overlay.classList.add('show');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('show');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  modal.classList.remove('show');
  overlay.classList.remove('show');
});
