var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.locals.meta.description = 'José Maria Carneiro. Business Student, Web Developer.';
  res.render('index');
});

module.exports = router;
