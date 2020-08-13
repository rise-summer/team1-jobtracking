const mysql = require('mysql');
const { connectionConfig } = require('./config');

const connection = mysql.createConnection(connectionConfig);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
