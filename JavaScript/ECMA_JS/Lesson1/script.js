// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergeArrays = (arr1, arr2) => {
  const bothArr = [...arr1, ...arr2];
  return bothArr;
};

console.log(mergeArrays(arr1, arr2));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]


const arrWithDuplicates = [1, 2, 3, 2, 4, 1, 5];

const removeDuplicates = (...args) => {
  const uniqueArr = [...args].filter((item, index) => args.indexOf(item) === index)
  return uniqueArr;
};

console.log(removeDuplicates(...arrWithDuplicates));

// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

const getEvenNumbers = (arr) => {
  const evenNumbers = arr.filter(item => item % 2 === 0);
  return evenNumbers;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getEvenNumbers(arr));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

const calculateAverage = (arr) => {
  const sum = arr.reduce((acc, item) => acc + item, 0);
  const average = sum / arr.length;
  return average;
};

const arrForAverage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calculateAverage(arrForAverage));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

const capitalizeFirstLetter = (str) => {
  const arr = str.split(' ');
  const capitalizedArr = arr.map(item => item[0].toUpperCase() + item.slice(1));
  return capitalizedArr.join(' ');
};

console.log(capitalizeFirstLetter('hello world'));

// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.


const createCalculator = (initialValue) => {
  let value = initialValue;

  return {
    add: (num) => {
      value += num;
    },
    subtract: (num) => {
      value -= num;
    },
    getValue: () => {
      return value;
    }
  };
};

const calculator = createCalculator(10);
calculator.add(8);
calculator.subtract(11);
console.log(calculator.getValue());

// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

const createGreeting = (name) => {
  return () => {
    console.log(`Hello, ${name}!`);
  };
};

const greeting = createGreeting('John');
greeting();

// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

const createPasswordChecker = (length) => {
  return (password) => {
    return password.length === length ? true : false;
  };
};

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password'));
console.log(isPasswordValid('you shall not pass'));

// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

const sumDigits = (num) => {
  if (num < 10) {
    return num;
  } else {
    return num % 10 + sumDigits(Math.floor(num / 10));
  }
};

console.log(sumDigits(456789));

// Homework 1
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arrForMin = [1, 5, 7, 9];
console.log(Math.min(...arrForMin));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
  let value = 0;
  return {
    increment: () => {
      value += 1;
    },
    decrement: () => {
      value -= 1;
    },
    getValue: () => {
      return value;
    }
  };
};

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

const findElementByClass = (root, className) => {
  if (root.classList && root.classList.contains(className)) {
    return root;
  } else {
    for (let i = 0; i < root.children.length; i++) {
      const element = findElementByClass(root.children[i], className);
      if (element) {
        return element;
      }
    }
  }
};

// console.log(findElementByClass(document.body, 'body'));
console.log(findElementByClass(document.body, 'wrapper'));