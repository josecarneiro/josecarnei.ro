// DEPENDENCIES
var express = require('express');
var logger = require('morgan');
var compress = require('compression');
var path = require('path');
if(process.env.NODE_ENV !== 'production') require('dotenv').config();

var blog = require('./blog-module');
var base = require('./base/base');

var config = require('./config');

// BOOTSTRAP APP
var app = express();

// BLOG
var blogConfig = {
  base: '/blog',
  database: config.blog.database,
  settings: {
    name: 'Light Blog',
    postsPerPage: 5
  },
  auth: {
    username: config.blog.username,
    password: config.blog.password,
    secret: 'sadasdasd'
  },
  // views: './blog/views',
  // public: './blog/public'
};

// APP SETTINGS
app.use(compress());

// ROUTING
app.use('/blog', blog(blogConfig));
app.use('/', base(config));

module.exports = app;
