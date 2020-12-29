require('dotenv').config();
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 5000,
  { connectionConfig } = require('./app/config');

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection(connectionConfig);

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

const routes = require('./app/routes'); //importing route
routes(app); //register the route
