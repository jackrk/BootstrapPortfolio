var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/home');
});

router.get('/home', function(req, res) {
	res.render('home');
});

router.get('/about', function(req, res) {
	res.render('about');
});

module.exports = router;
