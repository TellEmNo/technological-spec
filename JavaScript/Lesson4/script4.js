// const arr = [1, 2, 3];

// console.log(arr[0], arr[1], arr[2]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(i => {
//   console.log(i);
// });

// const arr = [1, 2, 3, 4, 5, 6, 7, 'a', 'f', 3, 'f', 's', 'a'];
// console.log(arr.length);

// const arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = i + 1;
//   console.log(arr[i]);
// }

// const arr = [];
// let amount = +prompt('Enter the number of array elements', 1);

// const randomValues = (amount) => {
//   for (let i = 0; i < amount; i++) {
//     let temp = Math.floor(Math.random() * 10);
//     arr.push(temp);
//     console.log(arr[i]);
//   }
// }
// randomValues(amount);

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   ++arr[i];
//   console.log(arr[i]);
// }

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);

// const arr = [1, 2, 3, 'f', 12];
// console.log(arr.length);
// arr.pop();
// arr.pop();
// console.log(arr.length);

// const arr = [1, 2, 3, 'f', 12];
// console.log(arr.length);
// arr.splice(arr.length - 2, 2);
// console.log(arr.length);

// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 99; i+=2) console.log(i);
// for (let i = -1; i <= 99; console.log(i+=2)){};

// for (let i = 100; i >= 0; i--) console.log(i);
// for (let i = 100; i >= 0; console.log(i--)){};

// let number = +prompt('Enter a number from 1 to 999', 1);

// const amountOfIteration = (someNum) => {
//   let iterations = 0;
//   do {
//     someNum *= 3;
//     iterations++;
//   } while (someNum < 1000);
//   return iterations;
// }

// console.log(amountOfIteration(number));

// for (let i = 1; i <= 3; i++) {
//   let row = '';
//   for (let j = 1; j <= 3; j++) {
//     row += `${i}${j} `
//   }
//   console.log(row.trim());
// }

// const arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10){
//     console.log(arr[i]);
//   }
// }

// const arr = [2, 5, 9, 15, 1, 4];

// const newArr = arr.filter(i => i > 3 && i <10);
// newArr.forEach(i => {
//   console.log(i);
// });

// let result = 0;
// for (let i = 0; i < 100; i+=2) {
//   result += i;
// }
// console.log(result);

// const arr = [2, 5, 9, 3, 1, 4];
// let result = 0;

// for (const value of arr) {
//   result += value;
// }
// console.log(result);

// const arr = [2, 5, 9, 3, 1, 4];
// let result = 0;

// arr.forEach(value => {
//   result += value;
// });
// console.log(result);

// const arr = [2, 5, 9, 3, 1, 4];
// let result = arr.reduce((acc, currentValue) => acc + currentValue, 0);

// console.log(result);

// let row = '';
// for (let i = 1; i < 10; i++) {
//   (i !== 9) ? row += `-${i}` : row += `-${i}-`;
// }
// console.log(row);

// const arr = [2, 5, 9, 0, 3, 1, 4]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) break;
//   console.log(arr[i]);
// }

// Homework 4

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
  if (i === 0) console.log(`${i} - это ноль`);
  else if (i % 2 === 1) console.log(`${i} - нечетное число`);
  else console.log(`${i} - четное число`);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.splice(3, 2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arr = [];
let amount = +prompt('Enter the number of array elements', 1);

const randomValues = (amount) => {
  for (let i = 0; i < amount; i++) {
    let temp = Math.round(Math.random() * 10);
    arr.push(temp);
  }
  return arr;
}
const getArr = randomValues(amount);
console.log(getArr);

let sum = getArr.reduce((acc, currentValue) => acc + currentValue, 0)
console.log(`Сумма: ${sum}`);

let min = Math.min(...arr); // без троеточия выдает NaN
console.log(`Минимальное число в массиве: ${min}`);

let haveOrDontHave;

for (let i = 0; i < getArr.length; i++) {
  if (getArr[i] === 3) {
    haveOrDontHave = 'В данном массиве есть число 3';
    break;
  } else haveOrDontHave = 'В данном массиве нет числа 3';
}
console.log(haveOrDontHave);

// Необязательное задание.
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let rock = '';

for (let i = 0; i < 20; i++) {
  rock += 'x';
  console.log(rock);
}