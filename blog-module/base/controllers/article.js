// DEPENDENCIES

var Article = require('./../../shared/models/article');

// DISPLAY ARTICLE CONTROLLER

exports.list = function(req, res, next) {
  Article.paginate(function(err, paginated) {
    if(err) return next(err);
    res.render('index', {data: {articles: paginated.articles, pagination: paginated.pagination}});
  });
};

exports.display = function(req, res, next) {
  Article.load(req.params.article, function(err, article) {
    if(err) return next(err);
    res.render('article', {data: {article: article}});
  });
};
