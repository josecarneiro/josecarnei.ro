'use strict';

// DEPENDENCIES
const express = require('express');
const logger = require('morgan');
const compress = require('compression');
const path = require('path');

const base = require('./base/base');

const config = require('./config');

const informa = require('informa');

// BOOTSTRAP APP
const app = express();

// APP SETTINGS
app.use(compress());

// ROUTING
app.use('/', base(config));

module.exports = app;
