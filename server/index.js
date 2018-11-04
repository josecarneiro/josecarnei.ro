'use strict';

/* LOAD ENVIRONMENT VARIABLES */

if (process.env.NODE_DEV !== 'production') require('dotenv').config({ path: './config/.env', silent: true });

// DEPENDENCIES
const http = require('http');
const cluster = require('cluster');
const debug = require('debug')('id:server');

const Database = require('./database');

const { environment, port, database, maxWorkers } = require('./../config');
const normalizedPort = normalizePort(port);

const cpuCount = require('os').cpus().length;

const workerCount = Math.min(maxWorkers || Infinity, cpuCount) || 1;

let server;

init();

// INIT SERVER OR CLUSTER
async function init () {
  try {
    await new Database(database).initialize();
    await initializeApp();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

async function initializeApp () {
  const app = require('./../app');
  app.set('port', normalizedPort);
  if (environment === 'production' && cluster.isMaster) {
    for (let i = 0; i < workerCount; i++) cluster.fork();
    cluster.on('exit', () => {
      cluster.fork();
    });
  } else {
    server = http.createServer(app);
    server.listen(normalizedPort);
    server.on('error', onError);
    server.on('listening', onListening);
  }
}

// ON LISTENING HANDLER
function onListening () {
  let address = this.address();
  let bind = typeof address === 'string' ? `pipe ${ address }` : `port ${ address.port }`;
  debug(`Listening on ${ bind }.`);
}

// ERROR HANDLER
function onError (error) {
  if (error.syscall !== 'listen') throw error;
  switch (error.code) {
    case 'EACCES':
      console.error('Port requires elevated privileges.');
      process.exit(1);
    case 'EADDRINUSE':
      console.error('Port is already in use.');
      process.exit(1);
    default:
      console.log('Error handled in server.js.');
      throw error;
  }
}

// HELPERS
function normalizePort (port) {
  if (typeof port === 'string') port = parseInt(port, 10);
  return typeof port === 'number' && !isNaN(port) && port >= 0 ? port : false;
}

const close = async () => {
  server.close(() => {
    process.exit();
  });
};

process
.on('unhandledRejection', (reason, promise) => {
  console.error(reason, 'Unhandled Rejection at Promise', promise);
})
.on('uncaughtException', error => {
  console.error(error);
  process.exit(1);
});

exports.close = close;
