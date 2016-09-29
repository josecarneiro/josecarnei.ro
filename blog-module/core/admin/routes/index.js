// DEPENDENCIES
var auth = require('./../controllers/auth');
var article = require('./../controllers/article');

// BOOTSTRAP ROUTER
var router = require('express').Router();

// BASE
router.get('/', auth.require, article.list);

// PAGES
router.get('/page/:page', auth.require, article.page);

// ARTICLE
router.get('/new', auth.require, article.new)
      .post('/new', auth.require, article.create);
      
router.get('/edit/:article', auth.require, article.edit)
      .post('/edit/:article', auth.require, article.update);

router.post('/delete/:article', auth.require, article.delete);

// AUTH
router.get('/login', auth.display)
      .post('/login', auth.login);


router.get('/logout', auth.logout)
      .post('/logout', auth.logout);

// EXPORTS ROUTER
module.exports = router;
