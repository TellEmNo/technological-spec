// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное
// свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется
// значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
// Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
// Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
// противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
// Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// ошибку.


// class BankAccaunt {

//   constructor(balance) {
//     try {
//       if (balance < 0) {
//         throw new Error('Error. Wrong balance.');
//       } else {
//         this.#balance = balance;
//         console.log(`Сurrent balance: ${this.#balance}`);
//         return;
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   #balance = 0;
//   get balance() {
//     console.log(`Сurrent balance: ${this.#balance}`);
//     return this.#balance;
//   };

//   set balance(value) {
//     if (value < 0) {
//       throw new Error('Error. Wrong balance.');
//     } else {
//       this.#balance = value;
//       console.log(`Сurrent balance: ${this.#balance}`);
//       return;
//     }
//   }
//   deposit(amount) {
//     try {
//       if (amount <= 0) {
//         throw new Error('Error. Wrong amount.');
//       } else {
//         this.#balance += amount;
//         console.log(`Deposited ${amount} into account.`);
//         return;
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       console.log(`Сurrent balance: ${this.#balance}`);
//     }
//   };
//   withdraw(amount) {
//     try {
//       if (amount > this.#balance) {
//         throw new Error('Insufficient funds.');
//       } else if (amount <= 0) {
//         throw new Error('Error. Wrong amount.');
//       } else {
//         this.#balance -= amount;
//         console.log(`Withdrawn ${amount} from account.`);
//         return;
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       console.log(`Сurrent balance: ${this.#balance}`);
//     }
//   };
// };

// const bankAccaunt = new BankAccaunt(100);
// bankAccaunt.balance = 0;
// bankAccaunt.deposit(1000);
// bankAccaunt.withdraw(500);
// bankAccaunt.balance;

// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
// некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
// наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
// действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ.

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
// }

// class PremiumUser extends User {
//   constructor(name, surname) {
//     super(name, surname);
//     this.premiumAccount = null;
//   }
//   setPremiumAccount() {
//     this.premiumAccount = new Date()
//     this.premiumAccount.setFullYear(new Date().getFullYear() + 1);
//   }
// }

// class RegularUser extends User {
//   constructor(name, surname) {
//     super(name, surname);
//     this.premiumAccount = null;
//   }
// }

// function getAccountInfo(user) {
//   if (user instanceof PremiumUser) {
//     return`Premium account is valid until ${user?.premiumAccount
//       ?.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) 
//       ?? 'Premium account expired'}`;
//   } else if (user instanceof RegularUser) {
//     return 'Premium account is not valid';
//   }
// }

// const premiumUser = new PremiumUser('Premium', 'User');
// premiumUser.setPremiumAccount();
// const regularUser = new RegularUser('Regular', 'User');

// console.log(getAccountInfo(premiumUser));
// console.log(getAccountInfo(regularUser));

// Вы создаете интерфейс, где пользователь вводит число.
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать
// соответствующий ответ.
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
// "Проверить".
// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
// должна использовать try и catch для проверки вводимого значения.

document.querySelector('.check-button').addEventListener('click', () => {
  const input = document.querySelector('.number-input').value;
  const messageDiv = document.querySelector('.message');

  messageDiv.innerHTML = '';
  try {
    if (isNaN(input) || input.trim() === '') {
      throw new Error('Это не число!');
    } else {
      messageDiv.insertAdjacentHTML('beforeend', `<p>${input} - число!</p>`);
    }
  } catch (error) {
    messageDiv.insertAdjacentHTML('beforeend', `<p>${error.message}</p>`);
  }
});

// Пользователи вашего сайта могут добавлять элементы в список. Но есть условие:
// введенное значение должно содержать от 3 до 10 символов.


document.querySelector('.add-button').addEventListener('click', () => {
  const input = document.querySelector('.item-input').value;
  const itemList = document.querySelector('.item-list');
  const messageDiv = document.querySelector('.message2');

  messageDiv.innerHTML = '';

  try {
      if (input.length < 3 || input.length > 10) {
          throw new Error('Длина введенного значения должна быть от 3 до 10 символов.');
      }

      const listItem = document.createElement('li');
      listItem.textContent = input;
      itemList.appendChild(listItem);

      document.querySelector('.item-input').value = '';
  } catch (error) {
      messageDiv.innerHTML = `<p class="error">${error.message}</p>`;
  }
});
