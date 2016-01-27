var express = require('express');
var router = express.Router();

router.get('/brands', function(req, res){
	res.send('Audi, Mercedes, BMW');
});

router.get('/models', function(req, res){
	res.send('Audio 400, BMW XS, Mercedes Sport');
})

module.exports = router; 