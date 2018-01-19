var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('users', {
		title: 'Users List page',
		users:[
			{id: 1, name: 'abc', age : '23'},
			{id: 2, name: 'xyz', age : '33'},
			{id: 3, name: 'dffff', age : '56'},
			{id: 4, name: 'sss ssss', age : '22'},
			{id: 5, name: 'sa', age : '33'},
			{id: 6, name: 'we', age : '12'}
		]
	});
	//res.send('respond with a resource');
});

/* GET users update. */
router.get('/:id', function(req, res, next) {
	res.render('usersEdit', {
		title: 'Users Update',
		users: {id: req.params.id, name: 'abc', age : '23'}
		//users: {id: 1, name: 'abc', age : '23'}
		//users: {id: req.query.id, name: 'abc', age : '23'}
	});
	//res.send('respond with a resource');
});

module.exports = router;
