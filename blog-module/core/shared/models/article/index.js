'use strict';

// DEPENDENCIES
var mongoose = require('mongoose');
var easyid = require('./../../tools/easyid');

var _paginate = require('./_paginate');

// DEFINE SCHEMA
var Schema = mongoose.Schema;

var Article = new Schema({
  _id: {
    type: String,
    unique: true,
    required: true
  },
  creator: {
    type: String,
    // required: true,
    // ref: 'Account'
  },
  title: {
    type: String,
    required: true,
    default: ''
  },
  body: {
    type: String,
    required: true,
    default: ''
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

// IMPORT

Article.statics.paginate = _paginate;

// METHODS

Article.methods.edit = function(object, callback) {
  var self = this;
  self.title = object.title || self.title;
  self.body = object.body || self.body;
  self.save(function(err, article) {
    if(err) return callback(err);
    return callback(null, article);
  });
};

Article.methods.delete = function(callback) {
  var self = this;
  self.remove(function(err) {
    if(err) return callback(err);
    return callback(null, true);
  });
};

// STATICS

Article.statics.create = function(obj, callback) {
  var model = this;
  easyid.generate(function(err, id) {
    obj._id = id;
    new model(obj).save(function(err, article) {
      if(err) return callback(err);
      return callback(null, article);
    });
  });
};

Article.statics.load = function(conditions, callback) {
  if(typeof conditions === 'string') conditions = {_id: conditions};
  this.findOne(conditions).populate('creator', 'profile _id').exec(function(err, article) {
    if(err) return callback(err);
    if(!article) return callback(new Error('Article not found.'));
    return callback(null, article);
  });
};

Article.statics.list = function(conditions, callback) {
  if(typeof conditions === 'function') {
    callback = conditions;
    conditions = {};
  }
  this.find(conditions).sort({date: -1}).populate('creator').exec(function(err, list) {
    if(err) return callback(err);
    return callback(null, list);
  });
};

// EXPORT MODEL

module.exports = mongoose.model('Article', Article);
