const lightTheme = require('./lightTheme');
const darkTheme = require('./darkTheme');

const prefix = (prefix, vars) => {
  return Object.keys(vars).reduce((acc, key) => {
    acc[`${prefix}${key}`] = vars[key];
    return acc;
  }, {});
};

const config = {
  ...prefix('light-', lightTheme),
  ...prefix('dark-', darkTheme),
};

module.exports = config;
