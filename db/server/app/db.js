let mysql = require('mysql');
let config = require('./config');

let connection = mysql.createConnection(config);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
