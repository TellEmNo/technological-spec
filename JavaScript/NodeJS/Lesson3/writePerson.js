// 1. Создайте файл writePerson.js
// 2. Напишите код, который создаст файл person.json в директор

const fs = require('fs');
const path = require('path');

const createPerson = (name, surname, age, city) => {
  const person = {
    name: name,
    surname: surname,
    age: age,
    city: city,
  };
  return person;
};

const person = createPerson('Ivan', 'Ivanov', 25, 'Moscow');

fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(person, null, 2));

