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
		crew: myCrew,
		page: 'home'
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
		crew: myCrew,
		page: 'crewList'
	});
});

router.get('/crew/:crewId', function(req, res){
	var myPhotos = [];
	var myCrew = [];

	appdata.crew.forEach(function(item){

		if(item.shortname == req.params.crewId ){
		myCrew.push(item);
		myPhotos = myPhotos.concat(item.photos);			
		}

	});
	res.render('crew', {
		title: 'Crew',
		photos: myPhotos,
		crew: myCrew,
		page: 'crewDetails' 
	});
});

router.get('/contact', function(req, res){

	

	res.render('contact', {
		title: 'contact us',
		page:'contact'
	})
})

router.post('/contactForm', function(req,res){
	var firstname = req.body.firstname
	console.log("The firstname is: " + firstname)	

	res.render('/contactForm.ejs', {
		title: 'Success',
		page: 'contactForm'
	});

})




module.exports = router; 