/**
 * Created by mysticprg on 15. 2. 6.
 */

var async = require('async');
var drop = require('./drop');

var query = {
	Schema: 'CREATE SCHEMA IF NOT EXISTS `coock` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci',

	Role: 'CREATE TABLE IF NOT EXISTS `coock`.`Role` (' +
	'`r_id` INT NOT NULL AUTO_INCREMENT, ' +
	'`title` VARCHAR(45) NULL, ' +
	'PRIMARY KEY (`r_id`)) ' +
	'ENGINE = InnoDB',

	Users: 'CREATE TABLE IF NOT EXISTS `coock`.`User` (' +
	'`u_id` INT NOT NULL AUTO_INCREMENT, ' +
	'`id` VARCHAR(45) NOT NULL, ' +
	'`name` VARCHAR(45) NOT NULL, ' +
	'`password` VARCHAR(45) NOT NULL, ' +
	'`carNumber` VARCHAR(10) NULL, ' +
	'`carMaxFloor` INT NULL, ' +
	'`address1` VARCHAR(100) NULL, ' +
	'`address2` VARCHAR(100) NULL, ' +
	'`companyAddress1` VARCHAR(100) NULL, ' +
	'`companyAddress2` VARCHAR(100) NULL, ' +
	'`admin_id` INT NULL DEFAULT NULL, ' +
	'`point` INT NOT NULL DEFAULT 0, ' +
	'`isAllow` TINYINT(1) NOT NULL DEFAULT 0, ' +
	'`datetime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, ' +
	'`expireDate` DATE NULL, ' +
	'`role` INT NULL, ' +
	'`isDelete` TINYINT(1) NOT NULL DEFAULT 0, ' +
	'PRIMARY KEY (`u_id`), ' +
	'UNIQUE INDEX `username_UNIQUE` (`id` ASC), ' +
	'INDEX `fk_r_id_idx` (`role` ASC), ' +
	'CONSTRAINT `fk_r_id` ' +
	'FOREIGN KEY (`role`) ' +
	'REFERENCES `coock`.`Role` (`r_id`) ' +
	'ON DELETE NO ACTION ' +
	'ON UPDATE NO ACTION) ' +
	'ENGINE = InnoDB',

	AdminCode: 'CREATE TABLE IF NOT EXISTS `coock`.`AdminCode` (' +
	'`ac_id` INT NOT NULL AUTO_INCREMENT, ' +
	'`u_id` INT NOT NULL, ' +
	'`code` VARCHAR(45) NOT NULL, ' +
	'PRIMARY KEY (`ac_id`), ' +
	'UNIQUE INDEX `u_id_UNIQUE` (`u_id` ASC), ' +
	'UNIQUE INDEX `code_UNIQUE` (`code` ASC), ' +
	'CONSTRAINT `fk_u_id` ' +
	'FOREIGN KEY (`u_id`) ' +
	'REFERENCES `coock`.`User` (`u_id`) ' +
	'ON DELETE NO ACTION ' +
	'ON UPDATE NO ACTION) ' +
	'ENGINE = InnoDB'
};

module.exports = {
	dropAndCreate: function (db, callback) {

		async.waterfall([
			function (next) {
				drop(db, next);
			},
			function (result, fields, next) {
				db.query(query.Schema, next);
			},
			function (result, fields, next) {
				db.query(query.Role, next);
			},
			function (result, fields, next) {
				db.query(query.Users, next);
			},
			function (result, fields, next) {
				db.query(query.AdminCode, next);
			}
		], callback);
	},

	Schema: function (db, callback) {
		db.query(query.Schema, callback);
	},

	Role: function (db, callback) {
		db.query(query.Role, callback);
	},

	Users: function (db, callback) {
		db.query(query.Users, callback);
	},

	AdminCode: function (db, callback) {
		db.query(query.AdminCode, callback);
	}
};