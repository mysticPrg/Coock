/**
 * Created by mysticprg on 15. 2. 6.
 */

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');

//===============================================================

module.exports = function (app, passport) {
	app.use(morgan('dev'));
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(session({
		secret: 'mykey',
		resave: true,
		saveUninitialized: false
	}));

	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());
};