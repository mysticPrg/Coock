/**
 * Created by mysticprg on 15. 2. 6.
 */

var mysql = require('mysql');
var config = {
	host: 'localhost',
	user: 'root',
	database: 'coock'
};
var conn = mysql.createConnection(config);

conn.connect();

conn.on('error', function(err) {
	switch (err.code) {
		case 'PROTOCOL_CONNECTION_LOST':
			conn = mysql.createConnection(config);
			conn.connect();
			break;
	}
});

module.exports = conn;