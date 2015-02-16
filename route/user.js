/**
 * Created by mysticprg on 15. 2. 6.
 */


var table = 'test';
var query = {
	join: 'INSERT INTO ' + table + ' SET ?',
	modify: 'UPDATE ' + table + ' SET ? WHERE id = ?'
};


module.exports = function (app, passport, db) {

	app.get('/', function (req, res) {
		res.status(200).json({hello: 'world'}).end();
	});

	app.get('/join', function (req, res) {

		db.query(query.join, {name: 'test'}, function (err, result) {

			if (err) {
				console.log(err);
				res.status(500).end();
			} else {
				res.status(200).json(result).end();
			}

		});
	});

	app.post('/user', function (req, res) {

		db.query(query.modify, [
			req.body,
			5
		], function (err, result) {

			if (err) {
				console.log(err);
				res.status(500).end();
			} else {
				res.status(200).json(result).end();
			}

		});
	});

};