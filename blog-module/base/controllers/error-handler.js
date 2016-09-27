module.exports = function(err, req, res, next) {
  if(!err) {
    err = new Error('Page not found.');
    err.status = 404;
  } else {
    err.message = err.message || 'Something went wrong.';
    err.status = err.status || err.code || 500;
  }
  res.render('error', {error: err});
}