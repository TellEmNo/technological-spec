// 1. Создайте функцию delayedMessage(message, delay),
// которая принимает аргументы message (строка) и delay
// (число). Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками. Например:
// a. delayedMessage("Сообщение 1", 2000)
// b. delayedMessage("Сообщение 2", 1000)
// c. delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().

const delayedMessage = (message, delay) => {
  setTimeout(() => {
    console.log(message);
  }, delay);
};

// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);
// delayedMessage("Конец программы", 3100);
// console.log("Конец программы");

// У вас есть список задач, которые должны быть выполнены в определенном порядке. Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах. Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем выполняет каждую задачу через определенный промежуток времени.

const tasks = [
  { name: 'task 1', time: 1000 },
  { name: 'task 2', time: 2000 },
  { name: 'task 3', time: 3000 },
  { name: 'task 4', time: 4000 },
  { name: 'task 5', time: 5000 },
];

const taskManager = (tasksArr) => {
  let delay = 0;
  tasksArr.forEach(task => {
    setTimeout(() => {
      console.log(task.name);
    }, delay);
    delay += task.time;
  })
};

// taskManager(tasks);

// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText)

const loadData = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    };
  };
  xhr.open('GET', url, true);
  xhr.send();
};

// loadData('https://jsonplaceholder.typicode.com/users');

// Переписать код с XMLHttpRequest на fetch

const usersList = document.querySelector('.users-list');

const renderUsersList = (users) => {
  usersList.innerHTML = "";
  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.email}</p>
    `
    usersList.append(listItem);
  })
}

const sortUsersByName = (users) => {
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
  renderUsersList(sortedUsers);
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then((result) => {
    if (result.ok) {
      return result.json();
    }
    throw new Error('Error');
  })
  .then((data) => {
    renderUsersList(data);
    const sortButton = document.querySelector('.sort');
    sortButton.addEventListener('click', () => {
      sortUsersByName(data);
    })
  })
  .catch((error) => console.error("Есть ошибки"));
// Вы разрабатываете простой веб-интерфейс для отображения списка пользователей по имени. У вас уже есть функциональность для получения списка пользователей с сервера и отображения их в виде списка на странице.
// Ваша задача - реализовать сортировку пользователей по имени и добавить кнопку, при нажатии на которую список пользователей будет сортироваться по имени.

// Homework 4

// Задание 1
// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

const getUserData = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
      throw new Error('Ошибка при получении данных о пользователе');
    }
    const userData = await response.json();
    console.log('Данные успешно получены', userData);
    return userData;
  } catch (error) {
    console.log('Ошибка при получении данных о пользователе', error);
    return Promise.reject(error);
  }

};
getUserData(10)

// Задание 2
// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *
// Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

const saveUserData = async (userObj) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const userData = await response.json();
    console.log('Данные успешно отправлены на сервер', userData);
    return userData;
  } catch (error) {
    console.error('Произошла ошибка при отправке данных', error);
    return Promise.reject(error);
  };
};

const user = {
  name: 'John Smith',
  age: 30,
  email: 'john@example.com'
};

saveUserData(user)

// Задание 3
// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
// сделаю через класс
const changeStyleDelayed = (classOfElement, time) => {
  const element = document.querySelector(`.${classOfElement}`);
  setTimeout(() => {
    element.classList.add('change-color');
  }, time);
};
changeStyleDelayed('title', 3000);