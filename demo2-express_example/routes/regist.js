var express = require('express');
var router = express.Router();

/* GET Regist page. */
router.get('/', function(req, res, next) {
	res.render('regist', { title: 'Regist page' });
	//res.send('respond with a resource');
});

module.exports = router;
