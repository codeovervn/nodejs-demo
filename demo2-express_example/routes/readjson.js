var express = require('express');
const path = require('path')
var fs = require('fs');
var router = express.Router();

/* GET ReadJson listing. */
router.get('/', function(req, res, next) {
	let reqPath = path.join(__dirname, '../readfile/file.json');
	fs.readFile(reqPath , 'utf8', function (err, data) {
		var jsonObj = JSON.parse(data);
		//console.log(jsonObj);
		res.render('readjson', {
			title: 'ReadJson List page',
			users: jsonObj
		});
	});
});

/* DELETE record */
router.get('/:id', (req, res, next) => {
	let id = req.params.id;
	//console.log("delete id: " + id);
	let reqPath = path.join(__dirname, '../readfile/file.json');
	fs.readFile(reqPath , 'utf8', function (err, data) {
		var jsonObj = JSON.parse(data);
		delete jsonObj[id];
		//jsonObj = jsonObj.filter((user) => { return jsonObj[id] !== id });
		//console.log("jsonObj : " + jsonObj);
		fs.writeFileSync(reqPath, JSON.stringify(jsonObj, null, 2));
		res.render('readjson', {
			title: 'ReadJson List page',
			users: jsonObj
		});
	});
});

/* Revert ReadJson List page */
router.get('/data/revert', (req, res, next) => {
	var jsonObj = [
			{"id":1, "name": "HN", "age":2},
			{"id":2, "name": "Dung", "age":23},
			{"id":3, "name": "Ngo", "age":55},
			{"id":4, "name": "Le", "age":42},
			{"id":5, "name": "Thinh", "age":2},
			{"id":6, "name": "Trung", "age":234},
			{"id":7, "name": "Le Trung", "age":234},
			{"id":8, "name": "Le Trung Dung", "age":999}
		];
	let reqPath = path.join(__dirname, '../readfile/file.json');
	fs.writeFileSync(reqPath, JSON.stringify(jsonObj, null, 2));
	//console.log("reverting...");
	res.render('readjson', {
		title: 'ReadJson List page',
		users: jsonObj
	});
});

/* Regist Data */
router.post('/data/regist', (req, res, next) => {
	var jsonObjWrite = {"id": req.body.id, "name": req.body.name, "age": req.body.age};
	
	let reqPath = path.join(__dirname, '../readfile/file.json');
	fs.readFile(reqPath , 'utf8', function (err, data) {
		var jsonObjRead = JSON.parse(data);
		jsonObjRead.push(jsonObjWrite);
		fs.writeFileSync(reqPath, JSON.stringify(jsonObjRead, null, 2));
		
		res.render('readjson', {
			title: 'ReadJson List page',
			users: jsonObjRead
		});
	});
});

module.exports = router;
