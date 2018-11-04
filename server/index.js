'use strict';

require('./load-environment-variables')({ environment: process.env.NODE_ENV });
const { environment, port, maxWorkers, debug } = require('./../config');

const Server = require('./server');

const server = new Server({
  app: require('./../app'),
  port,
  maxWorkers,
  environment,
  debug
});

const initialize = async () => {
  try {
    server.initialize();
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

initialize();

module.exports = server;
