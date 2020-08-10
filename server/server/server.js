require('dotenv').config();
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000,
  { connection } = require('./app/config');

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection(connection);

// connect to database
mc.connect((err) => {
  if (err != null) {
    console.log('error: ' + err);
  }
});

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes'); //importing route
routes(app); //register the route
