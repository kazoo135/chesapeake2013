var express = require('express');
var router = express.Router();

var appdata = require('../data.json');


router.get('/', function(req, res){
	res.render('index', {
		title: 'Home',
		page: 'home'
	});
});


router.get('/crew', function(req, res){

	res.render('crew', {
		title:'Crew',
		page: 'crew'
	});

});

router.get('/crew/:crewId', function(req, res){

	res.render('crew', {
		title:'Crew',
		page: 'crew'
	});

});

router.get('/contact', function(req, res){

	res.render('contact', {
		title:'Contact Us',
		page: 'contact'
	});

});

module.exports = router; 