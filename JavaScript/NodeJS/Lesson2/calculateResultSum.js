const numberPrecicsion = require('number-precision');

function calculateResultSum(purchases, discount) {
  let total = purchases.reduce((total, purchase) => numberPrecicsion.plus(total, purchase));

  total = numberPrecicsion.times (total, discount);
  return total;
}

module.exports = { calculateResultSum };