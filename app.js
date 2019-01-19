'use strict';

const { join } = require('path');

const express = require('express');
const serve = (path, ...args) => express.static(join(__dirname, path), ...args);

const logger = require('morgan');
const compress = require('compression');
const helmet = require('helmet');
const forceSecure = require('./lib/force-secure');
const errorController = require('./lib/force-secure');
const microcache = require('route-cache');
const favicon = require('serve-favicon');
const mime = require('mime-types');

const config = require('./config');

const app = express();

app.set('trust proxy', true);

app.use(helmet());
app.use(compress({ threshold: 0 }));
app.use(forceSecure(config.env === 'production'));
app.use(favicon(join(__dirname, 'dist/favicon.ico')));

if (config.env !== 'test') app.use(logger('dev'));
if (config.useMicroCache) app.use(microcache.cacheSeconds(5, request => request.originalUrl));

app.use(serve('dist', {
  setHeaders: (response, path) => {
    const { cacheDuration: duration, cacheMimeTypes: types } = config;
    if (types.includes(mime.lookup(path))) response.setHeader('Cache-Control', `public, max-age=${ duration }`);
  }
}));
app.use('*', serve('dist/index.html'));
app.use(errorController(config));

module.exports = app;
