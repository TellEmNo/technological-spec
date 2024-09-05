// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

const getPrototypeChain = (obj) => {
  const arrayOfPrototypes = [];
  let prototype = Object.getPrototypeOf(obj);
  while (prototype) {
    arrayOfPrototypes.push(prototype);
    prototype = Object.getPrototypeOf(prototype);
  };
  return arrayOfPrototypes;
};

const obj = {
  serialNumber: 1,
};
const obj2 = Object.create(obj);
obj2.serialNumber = 2;
let obj3 = {
  serialNumber: 3,
};
obj3 = Object.setPrototypeOf(obj3, obj2);

const prototypeChain = getPrototypeChain(obj3);

console.log(prototypeChain);


// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = () => { console.log(`My name is ${this.name} and I'm ${this.age} years old.`) };
};

const person1 = new Person("John", 25);
person1.introduce();

// Напишите конструктор объекта BankAccount, который будет
// представлять банковский счет. Конструктор должен принимать два
// аргумента: accountNumber (строка) и balance (число). Конструктор
// должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму, если на счету есть достаточно средств.
// Если средств недостаточно, выводится сообщение "Недостаточно
// средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета


function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.deposit = (amount) => {
    if (amount <= 0) {
      console.log(`Error. Wrong amount.`);
      return;
    } else {
      this.balance += amount
      console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
      return;
    };
  };
  this.withdraw = (amount) => {
    if (this.balance < amount) {
      console.log(`Insufficient funds. Your balance is: ${this.balance}`);
      return;
    } else if (amount <= 0) {
      console.log(`Error. Wrong amount.`);
      return;
    } else {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
      return;
    };
  };
  this.getBalance = () => { 
    console.log(`The amount in your account: ${this.balance}`) 
  };
};

const myAccaunt = new BankAccount("1234567890",5000);

myAccaunt.deposit(2000);
myAccaunt.deposit(-2000);
myAccaunt.withdraw(3480);
myAccaunt.withdraw(5000);
myAccaunt.withdraw(-5000);
myAccaunt.getBalance();

// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

class Animal {
  constructor (name) {
    this.name = name;
  };
  speak() {
    console.log(`Woof, woof! I'm ${this.name}.`);
  };
};

class Dog extends Animal {
  constructor (name, breed) {
    super(name);
    this.breed = breed;
  };
  fetch() {
    console.log(`The dog ${this.name} fetched a ball.`);
  };
};

const rex = new Dog("Rex", "Beagle");
rex.speak();
console.log(rex.breed);
rex.fetch();

// Создайте класс Product, который будет представлять товар.
// У товара должны быть следующие свойства:
// ● Свойство name (строка) - название продукта.
// ● Свойство price (число) - цена продукта.
// Создайте класс ShoppingCart, представляющий корзину интернет-магазина.
// Конструтор класса ShoppingCart должен принимать два параметра:
// ● customerName (строка) - имя покупателя.
// ● initialTotalCost (число) - начальная общая стоимость заказа (может быть равна 0, если корзина пуста).
// У класса ShoppingCart должeн быть метод addItem(product, quantity), который позволяет добавить товар в корзину.
// Метод должен принимать два параметра:
// ● product (объект класса Product) - добавляемый в корзину продукт.
// ● quantity (число, по умолчанию 1) - количество единиц товара, которое нужно добавить в корзину. 
// Если quantity не указано, по умолчанию quantity = 1.
// У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает общую стоимость заказа.
// У класса ShoppingCart должен быть метод checkout(), который позволяет оформить заказ и выводит сообщение с общей стоимостью заказа и благодарностью за покупку.
// Формат вывода сообщения: "Заказ оформлен для [имя покупателя]. Общая стоимость заказа: [общая стоимость заказа]. Спасибо за покупку!"

class Product {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  };
};

class ShoppingCart {
  constructor (customerName, initialTotalCost, availableMoney = 0) {
    this.customerName = customerName;
    this.initialTotalCost = initialTotalCost;
    this.availableMoney = availableMoney;
    this.items = [];
  };
  
  addItem(product, quantity = 1) {
    this.initialTotalCost += product.price * quantity;
    this.items.push({product, quantity});
  };

  deleteItem(product, quantity = 1) {
    const itemIndex = this.items.findIndex((item) => item.product.name === product.name);

    if (itemIndex !== -1) {
      const item = this.items[itemIndex];

      if (item.quantity > quantity) {
        item.quantity -= quantity;
        this.initialTotalCost -= product.price * quantity;
      } else {
        this.initialTotalCost -= product.price * item.quantity;
        this.items.splice(itemIndex, 1);
      }
    } else {
      console.log(`Товар ${product.name} не найден в корзине.`);
    }
  };

  getCurrentTotalCost() {
    return this.initialTotalCost;
  };

  checkout() {
    if (this.initialTotalCost > this.availableMoney) {
      console.log("Недостаточно средств на счету");
      return;
    };
    console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.initialTotalCost}. Спасибо за покупку!`);
    console.log(`Остаток средства на счету: ${this.availableMoney - this.initialTotalCost}`);
    console.log(this.items);
  };
};

const myCart = new ShoppingCart("Vlad", 0, 6000);

const phone = new Product("iPhone", 1000);
const tv = new Product("Samsung", 2000);
const laptop = new Product("Asus", 1400);
const microwave = new Product("LG", 1300);
const gameConsole = new Product("Sony", 1200);

myCart.addItem(phone, 2);
myCart.addItem(tv);
myCart.addItem(laptop);
console.log(myCart.getCurrentTotalCost());
myCart.addItem(microwave);
myCart.addItem(gameConsole);
myCart.checkout();
myCart.deleteItem(phone, 1);
myCart.deleteItem(laptop)
myCart.checkout();

// Homework 3

// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// Вывод:
// Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

class Employee {
  constructor (name) {
    this.name = name;
  };
  displayInfo() {
    console.log(`Name: ${this.name}`);
  };
};

class Manager extends Employee {
  constructor (name, department) {
    super(name);
    this.department = department;
  };
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
  };
};

const employee = new Employee("John Smith");
employee.displayInfo();
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Product2 {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  };
};

class Order {
  constructor (orderNumber) {
    this.orderNumber = orderNumber;
    this.products = [];
  };
  addProduct(product) {
    this.products.push(product);
  };
  deleteProduct(product) {
    const productIndex = this.products.findIndex(i => i.name === product.name);

    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    } else {
      console.log(`Товар ${product.name} не найден в заказе.`);
    };
  };

  getTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  };
};

const order = new Order(12345);

const product1 = new Product2("Phone", 500);
const product2 = new Product2("Headphones", 100);
const product3 = new Product2("Tablet", 800);
const product4 = new Product2("Smartwatch", 300);

order.addProduct(product1);
order.addProduct(product2);
order.addProduct(product3);
order.addProduct(product4);
console.log(order.getTotalPrice());
order.deleteProduct(product3);
// order.deleteProduct(product3); // Вывод: Товар Tablet не найден в заказе.
console.log(order.getTotalPrice());