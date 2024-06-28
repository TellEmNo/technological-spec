// userName = prompt('Укажите Ваше имя', 'Имя')
// console.log(`Добро пожаловать на сайт, ${userName}!`);
// let userAge = prompt('Укажите Ваш возраст', '1')
// if (!isNaN(userAge)){
//   if (userAge < 0)
//     console.log('Возраст не может быть отрицательным');
//   else if (userAge == 1) 
//     console.log(`Вам ${userAge} год`);
//   else if (userAge >= 2 && userAge <= 4) 
//     console.log(`Вам ${userAge} годa`);
//   else if (userAge > 4 && userAge <= 100) 
//     console.log(`Вам ${userAge} лет`);
// } else {
//   console.log('Ошибочка вышла...');
// }



// let a = 13;
// let b = 5;
// alert(a % b);
// let a;
// alert(a)
// alert('abc' * 3);
// alert(1 / 0)
// alert (-1 / 0)
// alert('2' * '3');



// let a = '2';
// let b = '3';
// console.log(a + b);

// let a = prompt('Введите число a', 2);
// let b = prompt('Введите число b', 1);
// if (isNaN(a) || isNaN(b)) {
//   console.log('Ошибка. Введите число');
// } else if (a === '' || b === '') {
//     console.log('Ошибка. Введено пустое значение');
//   } else {
//     a = +a;
//     b = +b;
//     console.log(`Сумма: ${a + b}`);
//     console.log(`Разность: ${a - b}`);
//     console.log(`Произведение: ${a * b}`);
//     console.log(`Частное: ${(b == 0) ? 'У нас тут на 0 не делят' : a / b}`);
//     console.log(`Остаток: ${(b == 0) ? 'У нас тут на 0 не делят' : a % b}`);
//   }



// console.log(String(true)); // true
// console.log('a' + true); // atrue
// console.log(Number(true)); // 1
// console.log(true + 1); // 2
// console.log(true + true); // 2
// console.log(true - true); // 0
// console.log(String(true) + Number(true)); // true1



// let aNumber = prompt('Enter a number', 0);
// if (isNaN(aNumber)) {
//   console.log('Error. Enter a number');
// } else if (aNumber > 5) {
//   console.log('The number more than 5');
// } else if (aNumber < 5) {
//   console.log('The number less than 5');
// } else {
//   console.log('The number equals 5');
// }

// let test1 = prompt('Enter a first number', 0);
// let test2 = prompt('Enter a second number', 0);
// if (isNaN(test1) || isNaN(test2)) {
//   console.log('Error. Enter a number');
// } else {
//   console.log(`${(test1 !== test2) ? 'Values are not equal' : 'Values are equal'}`);
// }

// let testNumber1 = prompt('Enter a first number ', 0);
// let testNumber2 = prompt('Enter a second number 2', 0);
// if (isNaN(testNumber1) || isNaN(testNumber2)) {
//   console.log('Error. Enter a number');
// } else {
//   console.log(`Min number: ${(testNumber1 < testNumber2) ? testNumber1 : testNumber2}`);
// }

// let aNumber = prompt('Enter a number', 0);
// if (isNaN(aNumber)) {
//   console.log('Error. Enter a number');
// } else {
//   console.log(`${(aNumber > 0 && aNumber < 15) ? 'The number is between 0 and 15' : 'The number less than 0 or more than 15'}`);
// }


// Homework 2
// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// let num1 = prompt('Enter a first number ', 0);
// let num2 = prompt('Enter a second number ', 0);
// if (isNaN(num1) || isNaN(num2)) {
//   console.log('Error. Enter a number');
// } else {
//   console.log(`${(num1 <= 1 && num2 >= 3) ? 'condition is satisfied' : 'Condition is not satisfied'}`);
// }

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// console.log(`${(test === true) ? '+++' : '---'}`);

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = prompt('Enter a number between 1 to 31', 1)

// if (isNaN(day) && day < 1 && day > 31) {
//   console.log('Error. Something went wrong' );
// } else if (day <= 10) {
//   console.log('first decade of the month');
// } else if (day <= 20) {
//   console.log('second decade of the month');
// } else {
//   console.log('third decade of the month');
// }

// Задание 4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

let aNum = +prompt('Введите положительное число', 1)

let units = aNum % 10;
let tens = Math.floor((aNum % 100) / 10);
let hundreds = Math.floor((aNum % 1000) / 100);
console.log(`В числе ${aNum} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);