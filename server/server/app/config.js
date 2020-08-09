require('dotenv').config();
const dbname = process.env.MYSQL_DATABASE,
  dbpwd = process.env.MYSQL_ROOT_PASSWORD,
  dbport = process.env.MYSQL_PORT;

const connection = {
  host: 'localhost',
  user: 'root',
  password: dbpwd,
  database: dbname,
  port: dbport
};

const firebaseConfig = {
  apiKey: 'AIzaSyBXHiG2OLne7miagpCizFwNpLvq-RYTxsc',
  authDomain: 'jobtracking001.firebaseapp.com',
  databaseURL: 'https://jobtracking001.firebaseio.com',
  projectId: 'jobtracking001',
  storageBucket: 'jobtracking001.appspot.com',
  messagingSenderId: '201224764748',
  appId: '1:201224764748:web:03dfd879104d6c509063e9'
};

module.exports = {
  connection,
  firebaseConfig
};
