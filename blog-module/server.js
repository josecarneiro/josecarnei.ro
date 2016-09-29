'use strict';

// DEPENDENCIES
var http = require('http');
if(process.env.NODE_ENV !== 'production') require('dotenv').config();

// CONFIG AND REQUIRE APP
var port = normalizePort(process.env.PORT || '3000');
var app = require('./app')();
app.set('port', port);

// CREATE SERVER AND HANDLE LISTETING AND ERRORS
var server = http.createServer(app);
server.listen(port);
server.on('listening', function() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
});
server.on('error', function(error) {
  if (error.syscall !== 'listen') throw error;
  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// HELPER FUNCTIONS
function normalizePort(val) {
  var port = parseInt(val, 10);
  if(isNaN(port)) return val;
  if(port >= 0) return port;
  return false;
}
