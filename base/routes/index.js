var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.locals.meta.description = 'José Maria Carneiro. Business Student, Web Developer.';
  res.locals.data = {
    social: [{
      name: 'jose@light.pt',
      url: 'mailto:jose@light.pt'
    }, {
      name: 'facebook@josemcarneiro',
      url: '//facebook.com/josemcarneiro'
    }, {
      name: 'instagram@josemcarneiro',
      url: '//instagram.com/josemcarneiro'
    }]
  }
  res.render('index');
});

module.exports = router;
