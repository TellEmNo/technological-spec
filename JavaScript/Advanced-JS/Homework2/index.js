// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

// class Library {
//   #books = [];
//   constructor(books) {
//     if (!Array.isArray(books)) {
//       throw new Error("Invalid books array");
//     }
//     const uniqueBooks = new Set(books);
//     if (books.length !== uniqueBooks.size) {
//       throw new Error("Duplicate books found");
//     }
//     this.#books = books;
//   }

//   get allBooks() {
//     return this.#books;
//   }

//   addBook(title) {
//     if (this.hasBook(title)) {
//       throw new Error("Book already exists");
//     } else {
//       this.#books.push(title);
//     }
//   }

//   removeBook(title) {
//     if (!this.#books.includes(title)) {
//       throw new Error("Book not found");
//     } else {
//       this.#books = this.#books.filter((book) => book !== title);
//     }
//   }

//   hasBook(title) {
//     return this.#books.includes(title);
//   }
// }

// const library = new Library(['1984', 'Brave New World', 'Fahrenheit 451']);

// console.log(library.allBooks);
// library.addBook('Animal Farm');
// console.log(library.allBooks);
// library.removeBook('Animal Farm');
// console.log(library.allBooks);
// console.log(library.hasBook('Animal Farm'));
// console.log(library.hasBook('1984'));

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const displayInitialReviews = () => {
  const itemList = document.querySelector('.item-list');
  
  initialData.forEach(item => {
    item.reviews.forEach(review => {
      const listItem = document.createElement('li');
      listItem.textContent = review.text; // Отображаем текст отзыва
      itemList.appendChild(listItem); // Добавляем отзыв в список
    });
  });
};

displayInitialReviews();

const addReview = () => {
  document.querySelector('.add-review').addEventListener('click', () => {
    const input = document.querySelector('.review').value;
    const itemList = document.querySelector('.item-list');
    const previousError = document.querySelector('.message .error');
    if (previousError) {
      previousError.remove();
    }
    try {
      if (input.length < 50 || input.length > 500) {
        throw new Error('Длина введенного значения должна быть от 50 до 500 символов.');
      }

      const listItem = document.createElement('li');
      listItem.textContent = input;
      itemList.appendChild(listItem);

      document.querySelector('.review').value = '';
    } catch (error) {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = error.message;
      errorMessage.classList.add('error');
      document.querySelector('.message').appendChild(errorMessage);

    }
  });
}

addReview();