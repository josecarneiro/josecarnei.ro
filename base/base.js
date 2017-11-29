'use strict';

const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const routes = require('./routes/index');

module.exports = config => {
  if(!config) config = {};
  const app = express();

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(logger('dev'));
  app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));

  app.use((req, res, next) => {
    res.locals = {
      env: app.get('env') === 'development' ? 'dev' : 'production',
      meta: {
        title: {
          base: 'José Maria Carneiro'
        },
        description: 'José Maria Carneiro. Full-Stack Developer.',
        color: '#f3f3f3',
        analytics: config.analytics || ''
      }
    };
    return next();
  });

  app.use('/', routes);

  app.use((req, res, next) => {
    let error = new Error('Page not found :(');
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    if (app.get('env') !== 'development') delete error.stack;
    res.render('error', { error });
  });

  return app;
};
