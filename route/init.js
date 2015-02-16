/**
 * Created by mysticprg on 15. 2. 6.
 */


var async = require('async');

var create = require('../query/create');
var role = require('../query/role');


module.exports = function (app, passport, db) {

	app.post('/init', function (req, res) {


		async.waterfall([
			function (next) {
				create.dropAndCreate(db, next);
			},
			function (result, fileds, next) {
				role.init(db, next);
			}
		], function(err, result) {
			if (err) {
				console.log(err);
				res.status(500).end();
			} else {
				res.status(200).json(result).end();
			}
		});

	});

};