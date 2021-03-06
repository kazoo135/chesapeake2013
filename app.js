var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var debug = require('debug');
var routes = require('./routes/index');



var app = express();

app.locals.appdata = require('./data.json');

// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

app.locals.appdata = require('./data.json');

app.use('/', routes);

// catch 404 and forwarding to error handler
app.use(function(req, res, next){
	var err = new Error("Not Found");
	   err.status = 404;
	   next(err);
})

//error handlers
// development error handler will print stacktrace
if( app.get('env') == 'development'){
	app.use(function(err, req, res, next){
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// Production error handler no stack trace leaked
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
	debug('Express server listening on port ' +
		server.address().port);
	console.log("Listening on port " + server.address().port);
	
	module.exports = app; 
});
