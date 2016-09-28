// DEPENDENCIES
var express = require('express');
var path = require('path');
var logger = require('morgan');
var viewFunctions =  require('./../shared/tools/view-functions');

var router = require('./routes');
var errorHandler = require('./controllers/error-handler');

module.exports = function(config) {
  // BOOTSTRAP APP
  var app = express();

  // ASSERT CONFIG AND DEFAULT VALUES
  config.views = config.views || path.join(__dirname, 'views');
  config.public = config.public || path.join(__dirname, 'public');

  // APP SETTINGS
  app.set('base', config.base);
  app.set('name', config.settings.name || 'Blog');

  // SET VIEWS
  app.set('views', config.views);
  app.set('view engine', 'pug');

  // SET PUBLIC FOLDER
  app.use(express.static(config.public));

  // MIDDLEWARE
  app.use(logger('dev'));

  // RES LOCALS
  app.use(function(req, res, next) {
    req.app.locals.functions = viewFunctions;
    req.app.locals.meta = {
      title: app.get('name')
    };
    return next();
  });

  // ROUTES
  app.use('/', router);

  // ERROR HANDLER
  if(config.errorHandler && typeof config.errorHandler === 'function') {
    app.use(config.errorHandler);
  } else {
    app.use(errorHandler);
  }

  // RETURN APP OBJECT
  return app;
};
