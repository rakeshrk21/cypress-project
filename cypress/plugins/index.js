// cypress/plugins/index.js
const path = require('path');

module.exports = (on, config) => {
  // Correctly resolve .ts files
  require('ts-node').register({
    project: path.resolve(__dirname, '../../tsconfig.json')
  });

  return config;
};

