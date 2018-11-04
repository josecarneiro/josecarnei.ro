'use strict';

const { resolve } = require('path');

module.exports = ({
  file = 'config/.env'
} = {}) => {
  const path = resolve(__dirname, '..', file);

  if (process.env.NODE_DEV !== 'production') require('dotenv').config({ path, silent: true });

  if (!process.env.PORT) {
    console.log('FAILED TO LOAD ENVIRONMENT VARIABLES. SHUTTING DOWN.');
    process.exit();
  }
};
