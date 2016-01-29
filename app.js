var express = require('express');
var path = require('path');
var debug = require('debug');
var routes = require('./routes/index');

var app = express();

app.locals.appdata = require('./data.json');

// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.locals.appdata = require('./data.json');

app.use('/', routes);
app.use('/cars', require('./routes/cars'));
app.use('/animals', require('./routes/animals'));

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function(){
	debug('Express server listening on port ' +
		server.address().port);
	console.log("Listening on port " + server.address().port);
});