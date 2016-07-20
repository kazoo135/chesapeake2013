var express = require('express');
var router = express.Router();

var appdata = require('../data.json');


router.get('/', function(req, res){

	res.render('index', {
		title: 'Home'

	});
});



module.exports = router; 