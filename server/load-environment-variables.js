'use strict';

const { resolve } = require('path');

module.exports = ({
  file = 'config/.env',
  environment
} = {}) => {
  const path = resolve(__dirname, '..', file);

  if (environment !== 'production') require('dotenv').config({ path, silent: true });

  if (!process.env.PORT) {
    console.log('FAILED TO LOAD ENVIRONMENT VARIABLES. SHUTTING DOWN.');
    process.exit();
  }
};
