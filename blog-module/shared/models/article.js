var mongoose = require('mongoose');
var easyid = require('./../tools/easyid');

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

Article.statics.paginate = function(conditions, options, callback) {
  var model = this;
  if(typeof conditions === 'function') {
    callback = conditions;
    conditions = {};
    options = {};
  } else if(typeof options === 'function') {
    callback = options;
    options = conditions;
    conditions = {};
  }

  var limit = options.limit || 5;
  var page = parseInt(options.page) || 1;
  var skip = limit * (page - 1);

  model.count(function(err, count) {
    if(err) return callback(err);
    var pages = Math.ceil(count / limit);
    model.find(conditions).sort({date: -1}).skip(skip).limit(limit).populate('creator').lean().exec(function(err, articles) {
      if(err) return callback(err);
      var pagination = {
        total: pages,
        current: page
      };
      if(page < pages) pagination.next = page + 1;
      if(page > 1) pagination.previous = page - 1;
      return callback(null, {articles: articles, pagination: pagination});
    });
  })
};

// EXPORT MODEL

module.exports = mongoose.model('Article', Article);
