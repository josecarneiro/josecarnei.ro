// DEPENDENCIES
var pagination = require('./../controllers/pagination');
var article = require('./../controllers/article');

// BOOTSTRAP ROUTER
var router = require('express').Router();

// BASE
router.get('/', article.list);

// PAGES
router.get('/page/:page', pagination.page);

// ARTICLE
router.get('/:article', article.display);

// EXPORTS ROUTER
module.exports = router;
