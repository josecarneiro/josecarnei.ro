'use strict';

// DEPENDENCIES
const cluster = require('cluster');
const cpuCount = require('os').cpus().length;
const debug = require('debug')('id:server');

module.exports = class Server {
  constructor ({
    environment = 'production',
    port,
    maxWorkers,
    app
  }) {
    this._options = {
      environment,
      port: this._normalizePort(port),
      workerCount: Math.min(maxWorkers || Infinity, cpuCount) || 1
    };
    this._app = app;
    this._server = null;
  }

  async initialize () {
    const { _app: app, _options: { port, environment, workerCount } } = this;
    app.set('port', port);
    this._debug(`Initializing server with ${ workerCount } workers at port ${ port }.`);
    if (environment === 'production' && cluster.isMaster) {
      for (let i of new Array(workerCount).fill(null)) cluster.fork();
      cluster.on('exit', () => {
        cluster.fork();
      });
    } else {
      this._debug(`Cluster worker id ${ cluster.worker.id } initiating.`);
      this._server = app.listen(port);
      this._server.on('error', this._onError.bind(this));
      this._server.on('listening', this._onListening.bind(this));
    }
  }

  async close () {
    this._server.close(() => {
      process.exit();
    });
  }

  _normalizePort (port) {
    if (typeof port === 'string') port = parseInt(port, 10);
    return typeof port === 'number' && !isNaN(port) && port >= 0 ? port : null;
  }

  _onListening () {
    let address = this._server.address();
    let bind = typeof address === 'string' ? `pipe ${ address }` : `port ${ address.port }`;
    this._debug(`Listening on ${ bind }.`);
  }

  _onError (error) {
    if (error.syscall !== 'listen') throw error;
    switch (error.code) {
      case 'EACCES':
        console.error('Port requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error('Port is already in use.');
        process.exit(1);
        break;
      default:
        console.log('Error handled in server.js.');
        throw error;
    }
  }

  _debug (...args) {
    console.log(...args);
    debug(...args);
  }
};

process
.on('unhandledRejection', (reason, promise) => {
  console.log(reason, 'Unhandled Rejection at Promise', promise);
})
.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});
