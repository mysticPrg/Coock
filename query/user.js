/**
 * Created by mysticprg on 15. 2. 6.
 */

var async = require('async');

var table = 'coock.User';
var query = {
	join: 'INSERT INTO ?? SET ?',
	modify: '',
	unjoin: '',
	get: 'SELECT id, name, carNumber, carMaxFloor, address1, address2, companyAddress1, companyAddress2, adminCode, point, isAllow, role, expireDate WHERE id = ?',
	getList: ''
};

module.exports = {
	init: function (db, callback) {

		async.waterfall([
			function (next) { // insert master
				db.query(query.join, [table, {
					title: 'master'
				}], next);
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

	},

	join: function (db, data, callback) {

	},

	modify: function (db, data, callback) {

	},

	unjoin: function (db, id, callback) {

	},

	get: function (db, id, callback) {

	},

	getList: function (db, adminId, callback) {

	}
};