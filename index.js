'use strict';

// DEPENDENCIES
const express = require('express');
const logger = require('morgan');
const compress = require('compression');
const path = require('path');
if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const base = require('./base/base');

const config = require('./config');

// BOOTSTRAP APP
const app = express();

// APP SETTINGS
app.use(compress());

// ROUTING
app.use('/', base(config));

module.exports = app;
