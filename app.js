'use strict';

const { join } = require('path');

const express = require('express');
const serve = (...args) => express.static(join(__dirname, ...args));

const logger = require('morgan');
const compress = require('compression');
const helmet = require('helmet');
// const forceSecure = require('./controllers/force-secure');
const microcache = require('route-cache');
const favicon = require('serve-favicon');

const config = require('./config');

const app = express();

app.set('trust proxy', true);

app.use(helmet());
// app.use(forceSecure({ secure: config.env === 'production' }));
app.use(compress({ threshold: 0 }));

app.use(favicon(join(__dirname, 'dist/favicon.ico')));

app.use(serve('dist'))

if (config.env !== 'test') app.use(logger('dev'));
if (config.useMicroCache) app.use(microcache.cacheSeconds(5, request => request.originalUrl));

app.use('*', serve('dist/index.html'));

app.use((error, request, resonse, next) => {
  console.error(error);
  response.send('Unknown error.');
});

module.exports = app;
