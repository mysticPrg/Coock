/**
 * Created by mysticprg on 15. 2. 6.
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;


var passport = require('passport');
var db = require('./config/database');

require('./config/passport')(passport, db);
require('./config/server')(app, passport);

require('./route/user')(app, passport, db);
require('./route/init')(app, passport, db);

app.listen(port, function() {
	console.log('Coock server start at ' + port);
});