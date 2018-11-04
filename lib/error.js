'use strict';

const util = require('util');

exports.final = config => (error, req, res, next) => {
  const { env, debug } = config;
  if (env === 'development' || config.debug) console.log(util.inspect(error));
  let handled = {};
  // ERROR MESSAGE
  if (error.message) handled.message = error.message;
  if (typeof error === 'string') handled.message = error;
  // ERROR CODE
  if (error.code) handled.code = error.code;
  // ERROR STACK, IF IN DEV MODE
  if (env === 'development' && (error.stack || error.error)) handled.stack = error.stack || error.error;
  res.status(error.status >= 100 || error.status <= 600 ? error.status : 500).send('Unknown error.');
};
