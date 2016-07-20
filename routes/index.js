var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* Get Home Page */
router.get('/', function(req, res){
	var myPhotos = [];
	appdata.crew.forEach(function(item){
		myPhotos = myPhotos.concat(item.photos);
	})
	res.render('index', {
		title: 'Home',
		photos: myPhotos

	});
});



module.exports = router; 