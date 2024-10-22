// Вам необходимо создать навигационное меню для веб-сайта, в
// котором меняется активный пункт при клике без фактического
// перехода на другие страницы. Меню должно обладать следующими
// характеристиками:
// 1. Подсветка активного пункта: При клике на пункт меню он
// должен становиться активным, и для активного пункта должен
// применяться определенный стиль (например, изменение цвета
// фона). Если выбрать другой пункт, предыдущий должен
// перестать быть активным.
// 2. Эффекты наведения: При наведении курсора на пункты меню
// должны применяться эффекты (например, изменение цвета
// текста или фона) для подсказки пользователю, что пункт меню
// является интерактивным.


const nav = document.querySelector('ul');
const linkEls = document.querySelectorAll('.nav-link');

nav.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    linkEls.forEach(link => {
      link.classList.remove('active');
    });
    e.target.classList.remove('hover');
    e.target.classList.add('active');
  }
})

nav.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('nav-link')) {
    linkEls.forEach(link => {
      link.classList.remove('hover');
    });
    e.target.classList.add('hover');
  }
})

nav.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('nav-link')) {
    linkEls.forEach(link => {
      link.classList.remove('hover');
    });
  }
})