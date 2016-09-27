// DEPENDENCIES
var express = require('express');
var compress = require('compression');
var path = require('path');
var mongoose = require('mongoose');

var admin = require('./admin');
var base = require('./base');

module.exports = function(config) {
  // ENSURE CONFIG INTEGRITY
  if(!config.database) throw new Error('Blog module requires database path.');

  console.log(config.database);

  // DATABASE CONNECTION
  mongoose.connect(config.database, function(err) {
    if(err) throw err;
  });

  config.connection = mongoose.connection;

  // BOOTSTRAP APP
  var app = express();

  // MIDDLEWARE
  app.use(compress());

  // SUB-APPS
  app.use('/admin', admin(config));
  app.use('/', base(config));

  // RETURN APP OBJECT
  return app;
};

