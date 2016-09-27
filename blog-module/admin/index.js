// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var session = require('express-session');
var mongoStore = require('connect-mongodb-session')(session);
var path = require('path');

var viewFunctions =  require('./../shared/tools/view-functions');

var router = require('./routes');
var errorHandler = require('./controllers/error-handler');

module.exports = function(config) {
  // BOOTSTRAP APP
  var app = express();

  // DATABASE CONNECTION
  mongoose.connect(config.database, function(err) {
    if(err) throw err;
  });

  // APP SETTINGS
  app.set('base', config.base + '/admin' || '/admin');
  app.set('auth', config.auth);

  // SET VIEWS
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  // AUTHENTICATION
  app.use(session({
    store: new mongoStore({
      mongooseConnection: mongoose.connection
    }),
    cookie: {
      maxAge: config.auth.duration || 1000 * 60 * 60 * 24
    },
    secret: config.auth.secret,
    resave: true,
    saveUninitialized: false
  }));

  // BODY PARSER
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // SET PUBLIC FOLDER
  app.use(express.static(path.join(__dirname, 'public')));
  // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  app.use(function(req, res, next) {
    req.app.locals.functions = viewFunctions;
    req.app.locals.admin = req.session.admin ? true : false;
    return next();
  });

  // ROUTES
  app.use('/', router);

  // ERROR HANDLER
  app.use('/', errorHandler);

  // RETURN APP OBJECT
  return app;
};
