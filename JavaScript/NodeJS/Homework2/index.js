const { generatePassword } = require('./password.js');

const getPassword = () => {
  return generatePassword();
}

module.exports = { getPassword };