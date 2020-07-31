const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000,
  db = process.env.MYSQL_DATABASE,
  dbpwd = process.env.MYSQL_ROOT_PASSWORD;

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: db,
  insecureAuth : true
});

// connect to database
mc.connect((err) => {
  console.log('error: ' + err.message);
});

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes'); //importing route
routes(app); //register the route
