var express = require('express');
var router = express.Router();

router.get('/domestic', function(req, res){
	res.send("<h3>Dogs, Cats, Ferrets</h3>");
});

router.get('/wild', function(req, res){
	res.send('<h3>Fox, Deer, Bear</h3>');
});

module.exports = router; 