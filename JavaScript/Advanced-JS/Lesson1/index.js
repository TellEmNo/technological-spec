// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль.

// const reviewsSybmol = Symbol('reviews');
// const ratingSymbol = Symbol('rating');
// const tagsSymbol = Symbol('tags');

// const addMetadata = (book, symbol, value) => {
//   if (book[symbol]) {
//     book[symbol].push(value);
//   } else {
//     book[symbol] = [value];
//   }
// };

// const getMetadata = (book, symbol) => {
//   return book[symbol];
// };

// const createBook = (title, author, pages) => {
//   title = title || "No title",
//   author = author || "Anonymous",
//   pages = pages || 0 
//   return {
//     title,
//     author,
//     pages,
//   }
// };

// const book = createBook("Lord of the rings", "J.R.R. Tolkien", 1200);
// console.log(book.author);

// addMetadata(book, reviewsSybmol, ["Отличная книга!", "Хорошая книга!"]);
// addMetadata(book, ratingSymbol, 4.8);
// addMetadata(book, tagsSymbol, ["классика", "роман", "литература"]);

// const reviews = getMetadata(book, reviewsSybmol);
// const rating = getMetadata(book, ratingSymbol);
// const tags = getMetadata(book, tagsSymbol);

// console.log(`Отзывы: ${reviews}`);
// console.log(`Рейтинг: ${rating}`);
// console.log(`Теги: ${tags}`);
// console.log(reviews.length);

// Используя Symbol.iterator, создайте объект "Библиотека", который можно
// итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен
// перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
// консоль.

// const library = {
//   books: [
//     {
//       title: "Lord of the rings",
//       author: "J.R.R. Tolkien",
//       pages: 1200,
//     },
//     {
//       title: "Harry Potter",
//       author: "J.K. Rowling",
//       pages: 400,
//     },
//     {
//       title: "The Hobbit",
//       author: "J.R.R. Tolkien",
//       pages: 300,
//     },
//   ],
//   [Symbol.iterator]: function () {
//     let current = 0;
//     const to = this.books.length;
//     return {
//       next: () => {
//         return current < to
//           ? { value: this.books[current++], done: false }
//           : { done: true };
//       },
//     };
//   },
// };

// for (let book of library) {
//   console.log(`Название книги: ${book.title} Автор: ${book.author} Количество страниц: ${book.pages}`);
// }

// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными
// массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит
// Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать
// с ними.

// Дан код html:
// <div>Element 1</div>
// <div data-active="true">Element 2</div>
// <div>Element 3</div>
// <div data-active="true">Element 4</div>

// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и
// фильтрует только те из них, у которых есть атрибут data-active.
// Выведите результат на консоль.

// const divs = document.querySelectorAll("div");
// const divsArray = Array.from(divs);
// // const divsArray = Array.from(document.querySelectorAll("div")); аналогичная первым двум строкам запись 
// const filteredDivs = divsArray.filter((div) => div.hasAttribute("data-active"));
// // const filteredDivs = divsArray.filter(div => div.getAttribute("data-active") === "true");
// // const filteredDivs = divsArray.filter(div => div.dataset.active); // 114, 115, 116 строки выполняют одну и ту же функцию 
// console.log(filteredDivs);
// filteredDivs.forEach(el => {
//   console.log(el);
// });

// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
// кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// 1. Map будет использоваться для хранения соответствия между уроком и
// преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые
// посетил каждый студент.

let lessons = new Map();
lessons.set("Математика", "Вавилова");
lessons.set("Русский язык", "Исаева Н.И.");
lessons.set("Физика", "Кузнецов");
lessons.set("Информатика", "Андреев");
lessons.set("Химия", "Штайнбах");
lessons.set("География", "Смирнов");

const IvanLessons = new Set();
IvanLessons.add("Математика");
IvanLessons.add("Русский язык");
IvanLessons.add("Физика");
IvanLessons.add("Информатика");

const students = new Map();
students.set("Ivan", IvanLessons);

console.log(`Преподаватель по математике: ${lessons.get("Математика")}`);
console.log(`Уроки Ивана: ${[...students.get("Ivan")]}`);