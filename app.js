var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var compress = require('compression');

var routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(compress());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.locals = {
    env: app.get('env') === 'development' ? 'dev' : 'production',
    meta: {
      title: {
        base: 'José Maria Carneiro'
      },
      description: 'José Maria Carneiro. Business Student, Web Developer.'
    }
  };
  return next();
});

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Page not found :(');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if(app.get('env') ==! 'development') delete err.stack;
  res.render('error', {error: err});
});

module.exports = app;
