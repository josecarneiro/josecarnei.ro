exports.require = function(req, res, next) {
  // if(!req.session.admin) next(new Error('No user logged in.'));
  if(!req.session.admin) return res.redirect(req.app.get('base') + '/login');
  return next();
};

exports.display = function(req, res, next) {
  res.render('login');
}

exports.login = function(req, res, next) {
  if(req.body.username === req.app.get('auth').username && req.body.password === req.app.get('auth').password) {
    req.session.admin = true;
    res.redirect(req.app.get('base'));
  } else {
    return next(new Error('Username or password wrong.'));
  }
}

exports.logout = function(req, res, next) {
  req.session.destroy();
  res.redirect(req.app.get('base') + '/login');
}
