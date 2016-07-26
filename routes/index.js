var express = require('express');
var router = express.Router();
var appdata = require('../data.json');
var bodyParser = require('body-parser');
var fs = require('fs');

var urlEncodedParser = bodyParser.urlencoded({extended: true});

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
	var myPhotos = [];
	appdata.crew.forEach(function(item){
		myPhotos = myPhotos.concat(item.photos);
	})


	res.render('contact', {
		title: 'contact us',
		page:'contact',
		photos: myPhotos
	})
})

// counter used to track comments
var counter = 0; 
router.post('/contactForm', urlEncodedParser, function(req, res){
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var email = req.body.email;
	var comment = req.body.comments; 

	var body = firstname + '\n' + lastname + '\n' + email + '\n' + comment + '\n';

	if(body){
	counter++;
	var user = '';	
 	user += "User: " + counter + '\n' + body;
	console.log("The body var contains: \n" + user );	
	fs.appendFileSync('public/data.txt', user, encoding="utf-8");		
	}

	res.render('contactForm', {
		title: 'Post Reply',
		page: 'formReply',
		noComment: body
	})

});





module.exports = router; 