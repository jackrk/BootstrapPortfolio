var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/home');
});

router.get('/home', function(req, res) {
	res.render('home', {title:"Jack Kohn"});
});

router.get('/about', function(req, res) {
	res.render('about',{title:"About"});
});

router.get('/work', function(req, res) {
	res.render('work',{title:"Work Showcase"});
});

module.exports = router;
