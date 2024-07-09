// const week = {
//   1: 'Понедельник',
//   2: 'Вторник',
//   3: 'Среда',
//   4: 'Четверг',
//   5: 'Пятница',
//   6: 'Суббота',
//   7: 'Воскресенье',
// };

// console.log(`${week[2]}`);

// const user = {
//   userName: 'Name',
//   surname: 'Surname',
//   age: '99',
// };
// console.log(`${user['surname']}-${user.userName}-${user.age}`);

// user.middlename = 'MiddleName';
// // user.middlename = prompt('Enter your middlename')
// delete user.surname;
// console.log(user);

// // const sale = (price, discountPercent) => price = Math.round(price * ((100 - discountPercent) / 100));

// const product = {
//   id: 1,
//   name: 'ProDuct',
//   description: ' Cool description',
//   price: 832.5,
//   sale: (price, discountPercent) => price = `Цена со скидкой: ${Math.round(price * ((100 - discountPercent) / 100))}р.`,
// }

// console.log(product.sale(product.price, 20));

// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

// const daysOfWeek = {};

// if (arr1.length === 0 || arr2.length === 0) {
//   console.log('Отсутствуют элементы массива');
// }
// else if (arr1.length === arr2.length) {
//   for (let i = 0; i < arr1.length; i++) {
//     daysOfWeek[arr1[i]] = arr2[i];
//   }
// } else {
//   console.log('Неверные данные. Даны массивы разной длинны.');
// }

// console.log(daysOfWeek);

// const obj = {
//   x: 1,
//   y: 2,
//   z: 4,
// };

// let bonus = prompt('Введите бонусный коэффициент, от 1.0 до 5.0', 1.3);

// Просто вывести результат не изменяя значений объекта

// function bonusCoefficient(bonus) {
//   Object.values(obj).forEach(value => {
//     value *= bonus;
//     console.log(value);
//   })
// }

// Изменить значения объекта на коэффициент

// function bonusCoefficient(bonus) {
//   Object.keys(obj).forEach(key => {
//     obj[key] *= bonus;
//   })
//   console.log(obj);
// }

// bonusCoefficient(bonus);

// const object = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };

// // for in
// function sumValues1(object) {
//   let sum = 0;
//   for (let key in object) {
//     sum += Object.values(object[key]).reduce((a, b) => a += b);
//   }
//   return sum;
// };

// function sumValues2(object) {
//   return Object.values(object).reduce((sum, value) => {
//     if (typeof value === 'object') {
//       return sum += sumValues2(value);
//     }
//     return sum += value;
//   }, 0)
// };

// const totalSum1 = sumValues1(object);
// const totalSum2 = sumValues2(object);
// console.log(totalSum1, totalSum2);

const riddle = {
  question: 'Зимой и летом одним цветом ?',
  answer: ['ёлка', 'елка'],
  hints: ['Подсказка: Это дерево', 'Подсказка: на этом дереве растут иглы'],
  askQuestion() {
    for (let i = 0; i < 3; i++) {
      let userAnswer = prompt(riddle.question, '...').toLowerCase();
      if (userAnswer === this.answer[0] || userAnswer === this.answer[1]) {
        alert('Вы победили!')
        break;
      } else if (i === 2) {
        alert('Вы проиграли');
      } else {
        alert(this.hints[i])
      }
    }
  },
};

// riddle.askQuestion();

// Homework 5

// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
}

const moreOrEquals3 = (obj) => {
  Object.values(numbers).forEach(value => {
    if (value >= 3) console.log(value);
  })
}

console.log(moreOrEquals3(numbers));

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

const decreaseByPercent = () => {
  let percent = prompt('Сколько процентов скидка?', 10)
  let rate = (100 - percent) / 100;
  products.forEach(i => {
    i.price *= rate;
    console.log(i.price);
  });
}

console.log(decreaseByPercent());

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const otherProducts = [
{
id: 3,
price: 127,
photos: [
"1.jpg",
"2.jpg",
],
},
{
id: 5,
price: 499,
photos: [],
},
{
id: 10,
price: 26,
photos: [
"3.jpg",
],
},
{
id: 8,
price: 78,
},
];

// 1

newArray = otherProducts.filter(key => {
  if (key.photos && key.photos.length >= 1) return true
})
console.log(newArray);

// 2

console.log(otherProducts.sort(function(a, b) {
  return a.price - b.price;
}));

// Задание 5
// Дано 2 массива 

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const daysOfWeek = {};

if (en.length === ru.length) {
  for (let i = 0; i < ru.length; i++) {
    daysOfWeek[en[i]] = ru[i];
  }
} else {
  console.log('Неверные данные. Даны массивы разной длинны.');
}
console.log(daysOfWeek);