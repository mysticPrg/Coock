/**
 * Created by mysticprg on 15. 2. 6.
 */

var async = require('async');

var table = 'coock.Role';
var query = {
	insert: 'INSERT INTO ?? SET ?'
};

module.exports = {
	init: function (db, callback) {

		async.waterfall([
			function (next) { // insert master
				db.query(query.insert, [table, {title: 'master'}], next);
			},
			function (result, fields, next) { // insert admin
				db.query(query.insert, [table, {title: 'admin'}], next);
			},
			function (result, fields, next) { // insert normal
				db.query(query.insert, [table, {title: 'normal'}], next);
			},
			function (result, fields, next) { // insert prepare
				db.query(query.insert, [table, {title: 'prepare'}], next);
			}
		], callback);

	}
};