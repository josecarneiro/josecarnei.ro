'use strict';

// EXPORTS
module.exports = function(conditions, options, callback) {
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
