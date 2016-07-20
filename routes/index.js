var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* Get Home Page */
router.get('/', function(req, res){
	var myPhotos = [];
	var myCrew = [];
	myCrew = appdata.crew;
	appdata.crew.forEach(function(item){
		myPhotos = myPhotos.concat(item.photos);
	})
	res.render('index', {
		title: 'Home',
		photos: myPhotos,
		crew: myCrew;
	});
});

/* Get the crew template */
router.get('/crew', function(req, res){
	var myPhotos = [];
	var myCrew = [];
	myCrew = appdata.crew;
	appdata.crew.forEach(function(item){
		myPhotos = myPhotos.concat(item.photos);
	});
	res.render('crew', {
		title: 'Crew',
		photos: myPhotos,
		crew: myCrew
	});
});

router.get('/crew/:crewId', function(req, res){
	var myPhotos = [];
	appdata.crew.forEach(function(item){

		if(item.shortname == req.params.crewId){
		myPhotos = myPhotos.concat(item.photos);			
		}

	});
	res.render('crew', {
		title: 'Crew',
		photos: myPhotos

	});
});


module.exports = router; 