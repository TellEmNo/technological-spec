// function introduceYourself(userName, userLastName, userAge) {
//   console.log(`Привет, ${userName} ${userLastName}, с возрастом ${userAge}!`);
// }
// let userName = prompt('Enter your name', 'Name');
// let userLastName = prompt('Enter your last name', 'Last name');
// let userAge = prompt('Enter your age', 'Age');

// introduceYourself(userName, userLastName, userAge);

// let number = +prompt('Enter a number', 1);
// let degree = +prompt('Enter degree of number', 2);
// const getDegree = (number, degree) => number ** degree;
// console.log(getDegree(number, degree));

// let number = +prompt('Enter a number', 1);
// function positiveOrNegative(number) {
//   if (number > 0) {
//     console.log('+++');
//   } else if (number < 0) { 
//     console.log('---');
//   } else {
//     console.log('С 0 не играю;(');
//   }
// }
// positiveOrNegative(number);

// c тернарным оператором
// let number = +prompt('Enter a number', 1);
// const positiveOrNegative = number => (number >= 0) ? '+++' : '---';
// console.log(positiveOrNegative(number));

// let z = prompt("Enter a number 'z'", 1);
// let x = prompt("Enter a number 'x'", 2);
// let c = prompt("Enter a number 'c'", 3);

// const summarize = (z,x,c) => z + x + c;
// console.log(summarize(+z,+x,+c));


// let z = prompt("Enter a number 'z'", 1);
// let x = prompt("Enter a number 'x'", 2);
// let c = prompt("Enter a number 'c'", 3);

// const summarize = (z,x,c) => {
//   if (isNaN(z) || isNaN(x) || isNaN(c)) {
//     console.log('All arguments must be numbers or strings containing numbers');
//   } else {
//     z = +z;
//     x = +x;
//     c = +c;
//   }
//   return z + x + c;
// }
// console.log(summarize(z, x, c));

// let z = prompt("Enter a number 'z'", 3);
// let x = prompt("Enter a number 'x'", 4);

// function summarizeSquareRoots(param1, param2) {
//     if (isNaN(param1) || isNaN(param2)) {
//     console.log('All arguments must be numbers or strings containing numbers');
//     } else {
//       param1 = +param1;
//       param2 = +param2;
//     }
//   let squareRootZ = Math.sqrt(param1);
//   let squareRootX = Math.sqrt(param2);

//   return squareRootZ + squareRootX;
// }

// console.log(summarizeSquareRoots(z,x))

// const sqrt = number => number ** 0.5;
// const sum = (a, b) => a + b;
// console.log(sum(sqrt(3), sqrt(4)));

// let z = +prompt("Enter a number 'z'", 3);
// let x = +prompt("Enter a number 'x'", 4);

// const minimumOfTwoNum = (z,x) => (z > x) ? 'x is minimum number' : 'z is minimum number';

// console.log(minimumOfTwoNum(z,x));

// let day = +prompt('Enter the number from 1 to 7');

// function dayOfTheWeek(day) {
//   if (day === 1) day = 'Понедельник';
//   else if (day === 2) day = 'Вторник';
//   else if (day === 3) day = 'Среда';
//   else if (day === 4) day = 'Четверг';
//   else if (day === 5) day = 'Пятница';
//   else if (day === 6) day = 'Суббота';
//   else day = 'Воскресение';
//   return day;
// }
// console.log(dayOfTheWeek(day));

// let day = +prompt('Enter the number from 1 to 7');

// switch(day) {
//   case 1: console.log('Понедельник');
//   break;
//   case 2: console.log('Вторник');
//   break;
//   case 3: console.log('Среда');
//   break;
//   case 4: console.log('Четверг');
//   break;
//   case 5: console.log('Пятница');
//   break;
//   case 6: console.log('Суббота');
//   break;
//   case 7: console.log('Воскресенье');
//   break;
//   default: console.log('Wrong');
//   break;
//   }

// let userName = prompt('Enter your name', 'Смехаил')
// let now = new Date();

// const timeGreetings = (name, time) => {
//   let hour = time.getHours()
//   let greetings = ""
//   if (hour >= 6 && hour <= 10) {
//   greetings = "morning"
//   } else if (hour >= 11 && hour <= 16) {
//   greetings = "day"
//   } else if (hour >= 17 && hour <= 22) {
//   greetings = "evening"
//   } else {
//   greetings = "night"
//   }
//   msg = `Good ${greetings}, ${name}`
  
//   return msg
//   }
  
//   console.log(timeGreetings(userName, now))

// const mystery = (mystery, answer) => {
//   let yourAnswer;
//   do {
//     yourAnswer = prompt(`${mystery}`).toLowerCase();
//     if (yourAnswer !== answer) {
//       alert('Неверно, лови подсказку');
//       alert('Бывает, стоит на плите, а может быть и электрическим...');
//     } else {
//       alert('Верно, это чайник!');
//     }
//   } while (yourAnswer !== answer);
// }

// mystery('Чашек, блюдец он начальник, догадались? Это …', 'чайник');

//Homework 3

// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

let numberZ = +prompt('Enter any number', 2);
let numberX = +prompt('Enter any number', 3);

const cubing = (arg1, arg2) => {
  if (isNaN(arg1) || isNaN(arg2))
    alert('Incorrect data')
  else
    return arg1**3 + arg2**3;
}

console.log(cubing(numberZ, numberX));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let salary = prompt('Enter your salary', 100000)

const taxDeduction = salary => salary * 0.87;

(isNaN(salary)) ? alert('Incorrect. Refresh the page and try again.') : alert(taxDeduction(salary));

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let a = prompt('Enter the number a', 1);
let b = prompt('Enter the number b', 1);
let c = prompt('Enter the number c', 1);

const maxOfTheThree = (a, b, c) => {
  let max;
  if (a >= b)
    max = a;
  else 
    max = b;

  if (max <= c)
    max = c;

  return max;
}
console.log(maxOfTheThree(a, b, c));

//Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно

let numberA = +prompt('Enter a number', 1)
let numberB = +prompt('Enter a number', 1)

const addition = (arg1, arg2) => arg1 + arg2;
const subtracting = (arg1, arg2) => {
  let temp;
  if (arg2 > arg1){
    temp = arg1;
    arg1 = arg2;
    arg2 = temp;
  }
  return arg1 - arg2;
}
const multipliction = (arg1, arg2) => arg1 * arg2;
const division = (arg1, arg2) => arg1 / arg2;
console.log(addition(numberA, numberB));
console.log(subtracting(numberA, numberB));
console.log(multipliction(numberA, numberB));
console.log(division(numberA, numberB));