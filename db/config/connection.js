var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'maxwell1',
    database: 'burgers_db'
});

module.exports = con;
