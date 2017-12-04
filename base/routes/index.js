'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.locals.meta.description = 'José Maria Carneiro. Business Student, Web Developer.';
  res.locals.data = {
    social: [{
      name: 'contact@josecarnei.ro',
      url: 'mailto:contact@josecarnei.ro'
    }, {
      name: 'github@josecarneiro',
      url: 'https://github.com/josecarneiro'
    }, {
      name: 'linkedin@josemcarneiro',
      url: 'https://linkedin.com/in/josemcarneiro'
    }, {
      name: 'instagram@josecarnei.ro',
      url: 'https://instagram.com/josecarnei.ro'
    }, {
      name: 'facebook@josemcarneiro',
      url: 'https://facebook.com/josemcarneiro'
    }, {
      name: 'dribbble@josec',
      url: 'https://dribbble.com/josec'
    }]
  };
  res.render('index');
});

module.exports = router;
