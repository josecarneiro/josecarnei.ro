// DEPENDENCIES
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var extend = require('deep-extend');
if(process.env.NODE_ENV !== 'production') require('dotenv').config();

var admin = require('./core/admin');
var base = require('./core/base');

// EXPORTS
module.exports = function(config) {
  // CONFIG
  var defaults = {
    base: '/',
    database: process.env.MONGODB_URI,
    settings: {
      name: 'Blog',
      postsPerPage: 5
    },
    auth: {
      username: 'admin',
      password: 'admin',
      secret: 'secret'
    },
    theme: 'base'
  };
  config = config || {};
  extend(defaults, config);
  config = defaults;
  if(!config.database) throw new Error('Blog module requires database path.');

  // DATABASE CONNECTION
  mongoose.connect(config.database, function(err) { if(err) throw err; });

  // BOOTSTRAP APP
  var app = express();

  // SUB-APPS
  app.use('/admin', admin(config));
  app.use('/', base(config));

  // RETURN APP OBJECT
  return app;
};

