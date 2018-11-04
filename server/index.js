'use strict';

require('./load-environment-variables')();
const { environment, port, maxWorkers } = require('./../config');

const Server = require('./server');

const server = new Server({
  app: require('./../app'),
  port,
  maxWorkers,
  environment
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
