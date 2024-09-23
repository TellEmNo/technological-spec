// 1. Создайте файл changePerson.js рядом с файлом writePerson.js
// 2. Напишите в нем код, который
// ➜ прочитает файл person.json,
// ➜ уменьшит возраст на 10
// ➜ изменит город на “Ekaterinburg”
// ➜ перезапишет исходный файл person.json

const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'person.json');

const person = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));

person.age -= 10;
person.city = 'Ekaterinburg';
fs.writeFileSync(pathToFile, JSON.stringify(person, null, 2));