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
router.post('/contactForm', urlEncodedParser, function(req, res, next){
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var email = req.body.email;
	var comment = req.body.comments; 
	var body = "";
	var body = firstname + '\n' + lastname + '\n' + email + '\n' + comment + '\n';
	var user = "";

	
	if( empty(req.body.email)){
		console.log(req.body);
		next('route');	

	}else{
	counter++;	
 	user += "User: " + counter + '\n' + body;
	console.log("The body var contains: \n" + user + "The body var is : " + body);	
	fs.appendFileSync('public/data.txt', user, encoding="utf-8");
	console.log(req.body);
		res.render('contactForm', {
			title: 'Post Reply',
			page: 'formReply'
		}); 
	}
});

router.post('/contactForm', urlEncodedParser, function(req, res, next){
	console.log("Form Data is empty");

	res.render('noData', {
		title:"No Data",
		page: 'noData'
	})
	
});

module.exports = router; 

//Function for testing if post data is empty

function empty(data)
{
  if(typeof(data) == 'number' || typeof(data) == 'boolean')
  { 
    return false; 
  }
  if(typeof(data) == 'undefined' || data === null)
  {
    return true; 
  }
  if(typeof(data.length) != 'undefined')
  {
    return data.length == 0;
  }

if(typeof(data.length) != 'undefined')
{
  if(/^[\s]*$/.test(data.toString()))
  {
    return true;
  }
  return data.length == 0;
}

  var count = 0;
  for(var i in data)
  {
    if(data.hasOwnProperty(i))
    {
      count ++;
    }
  }
  return count == 0;
}