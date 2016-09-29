// DEPENDENCIES

var helpers = require('./../../shared/helpers');
var Article = require('./../../shared/models/article');

// LIST ARTICLES

exports.list = function(req, res, next) {
  Article.paginate({page: 1, limit: 5}, function(err, paginated) {
    if(err) return next(err);
    res.render('index', {data: {articles: paginated.articles, pagination: paginated.pagination}});
  });
};

exports.page = function(req, res, next) {
  var page = req.params.page;
  if(page === 1 || !helpers.isNumeric(page)) return res.redirect(req.app.get('base'));
  Article.paginate({page: page, limit: 5}, function(err, paginated) {
    if(err) return next(err);
    res.render('index', {data: {articles: paginated.articles, pagination: paginated.pagination}});
  });
};

// CREATE

exports.new = function(req, res, next) {
  res.render('article');
};

exports.create = function(req, res, next) {
  var article = {
    title: req.body.title,
    body: req.body.body
  }
  Article.create(article, function(err, article) {
    if(err) return next(err);
    res.redirect(req.app.get('base'));
  });
};

// EDIT

exports.edit = function(req, res, next) {
  Article.load(req.params.article, function(err, article) {
    if(err) return next(err);
    return res.render('article', {data: {article: article}});
  });
};

exports.update = function(req, res, next) {
  if(req.params.article === undefined) return next('Param article is undefined.');
  Article.load(req.params.article, function(err, article) {
    if(err) return next(err);
    article.edit({title: req.body.title, body: req.body.body}, function(err, article) {
      if(err) return next(err);
      res.redirect(req.app.get('base') + '/edit/' + req.params.article);
    });
  });
};

exports.delete = function(req, res, next) {
  if(req.params.article === undefined) return next('Param article is undefined.');
  Article.load(req.params.article, function(err, article) {
    if(err) return next(err);
    article.delete(function(err, success) {
      if(err) return next(err);
      res.redirect(req.app.get('base'));
    });
  });
};
