const { calculateResultSum } = require('./calculateResultSum.js');
const color = require('colors');


const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
console.log(`Общая стоимость: ${total}`);
console.log(total <= 50 ? `${color.green(total)}` : `${color.red(total)}`);