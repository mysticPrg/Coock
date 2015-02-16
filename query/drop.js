/**
 * Created by mysticprg on 15. 2. 6.
 */

var async = require('async');

var query = {
	Schema: 'DROP SCHEMA IF EXISTS `coock`',
	Role: 'DROP TABLE IF EXISTS `coock`.`Role`',
	Users: 'DROP TABLE IF EXISTS `coock`.`User`',
	AdminCode: 'DROP TABLE IF EXISTS `coock`.`AdminCode`'
};

module.exports = function(db, callback) {

	async.waterfall([
		function (next) {
			db.query(query.AdminCode, next);
		},
		function (result, fields, next) {
			db.query(query.Users, next);
		},
		function (result, fields, next) {
			db.query(query.Role, next);
		},
		function (result, fields, next) {
			db.query(query.Schema, next);
		}
	], callback);

};