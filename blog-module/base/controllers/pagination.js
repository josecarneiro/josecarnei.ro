exports.base = function(req, res, next) {
  res.render('index');
}

exports.page = function(req, res, next) {
  res.render('page');
};
