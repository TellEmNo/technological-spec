console.log("Текст из script.js");
const num = 123;
console.log("num = " + num);
let a = 5;
a = 7;
console.log(`a = ${a}`);
const b = 1 + 2 + 3;
console.log(`b = ${b}`);
//Произвольный текст
/*Еще один произвольный текст*/
const c = 10;
const d = 2;
const sum = c + d;
const difference = c - d;
const multiplication = c * d;
const division = c / d;
console.log(`
  sum = ${sum}
  difference = ${difference}
  multiplication = ${multiplication}
  division = ${division}`);
console.log(`result = ${c + d + sum + difference + multiplication + division}`);
const q = 1.5;
const w = 0.75;
console.log(`sum of q and w = ${q + w}`);
const r = -5;
console.log(`${-r}`);
const firstName = 'Владислав';
const secondName = 'Верин';
console.log(`${firstName + ' ' + secondName}`);
const java = 'java';
const script = 'script';
console.log(java + script);
const hello = 'Hello';
const world = 'world';
console.log(`${hello + ' ' + world}`);

// Homework 1
// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.
const celsius = 25;
const fahrenheit = (9 / 5) * celsius + 32;

console.log(`
  Температура в градусах Цельсия = ${celsius}
  Температура в градусах Фаренгейта = ${fahrenheit}`);

// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.

const myName = 'Vladislav';
const admin = myName;
console.log('admin: ' + admin );