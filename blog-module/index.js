// DEPENDENCIES
var express = require('express');
var compress = require('compression');
var path = require('path');

var admin = require('./admin');
var base = require('./base');

module.exports = function(config) {
  // ENSURE CONFIG INTEGRITY
  config.database = config.database || 'mongodb://127.0.0.1/blog';

  // BOOTSTRAP APP
  var app = express();

  // MIDDLEWARE
  app.use(compress());

  // SUB-APPS
  app.use('/admin', admin(config));
  app.use('/', base(config));

  // RETURN APP OBJE
  return app;
};

