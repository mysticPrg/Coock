/**
 * Created by mysticprg on 15. 2. 6.
 */

var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport, db) {

	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (user, done) {
		done(null, user);
	});

	passport.use('local-join', new LocalStrategy({
		usernameField: 'userid',
		passwordField: 'userpw',
		passReqToCallback: true
	}, function (req, id, pw, done) {

		if (id === 'mysticPrg') {
			return done(null, false, {
				msg: 'duplicated id',
				status: 409
			});
		}

		var newUser = {
			id: id
		};

		return done(null, newUser);

	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'userid',
		passwordField: 'userpw',
		passReqToCallback: true
	}, function (req, id, pw, done) {

		if (id === 'mysticPrg' && pw === '1234') {

			var user = {
				id: id
			};

			return done(null, user);
		}

		return done(null, false, req.flash('message', 'invalid user'));
	}));
};