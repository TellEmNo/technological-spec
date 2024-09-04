// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");


const Person = { 
  name: "John",
  age: 25,
  gender: "male",
  introduce() {console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`)},
  changeName(newName) { this.name = newName},
  // То же самое, но с использованием стрелочной функции (пометка для себя)
  // introduce: () => console.log(`My name is ${Person.name}. I'm ${Person.age} years old and I identify as ${Person.gender}.`),
  // changeName: (newName) => Person.name = newName,
};

Person.introduce();
Person.changeName("Mike");
Person.introduce();


// Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

const Animal = {
  name: "Animal",
  eat() {console.log(`${this.name} is eating.`)}};
  // eat: () => console.log(`${Animal.name} is eating.`)};
const Dog = {
  name: "Sharik",
  bark() {console.log(`${this.name} is barking.`)}};
Dog.eat = Animal.eat;
Dog.bark();
Dog.eat();

// Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const calculator = {
  add(a,b) {return a + b},
  subtract(a,b) {return a - b},
  multiply(a,b) {return a * b},
  output() {return this},
};
console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3]));
console.log(calculator.multiply.apply(null, [5, 3]));
const output = calculator.output.bind(calculator);
console.log(output());

// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class NewPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
  introduce() {console.log(`My name is ${this.name} and I'm ${this.age} years old.`)};
};
const person = new NewPerson("John", 95);
person.introduce();

// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890


class BankAccount {
  static bankName = "Банк игрушек";
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  };
  deposit(amount) {
    if (amount <= 0) {
      console.log(`Error. Wrong amount.`);
      return;
    } else {
      this.balance += amount;
      console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
      return;
    };
  };
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient funds. Your balance is: ${this.balance}`);
      return;
    };
    if (amount <= 0) {
      console.log(`Error. Wrong amount.`);
      return;
    } else {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
      return;
    };
  };
};

const account1 = new BankAccount("1234567890", 1000);
const account2 = new BankAccount("1232566892", 300);
account1.deposit(500);
account1.deposit(-500);
account1.withdraw(200);
account1.withdraw(-200);
account1.withdraw(1500);
account2.deposit(800);
account2.withdraw(149.99);

// Homework 2

// Задание 1: ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor(title, author, pages) {
    this.title = title || "No title";
    this.author = author || "Anonymous";
    this.pages = pages;
  };
  displayInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
  };
};

const book1 = new Book("Lord of the rings", "J.R.R. Tolkien", 1200);
book1.displayInfo();
const book2 = new Book(null, null, 78);
book2.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  };
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  };
}

const student1 = new Student("John Doe", 18, 11);
const student2 = new Student("Jane Smith", 17, 10);

student1.displayInfo();
student2.displayInfo();