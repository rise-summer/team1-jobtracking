require('dotenv').config();
const dbname = process.env.MYSQL_DATABASE,
  dbpwd = process.env.MYSQL_ROOT_PASSWORD,
  dbport = process.env.MYSQL_PORT;

const connectionConfig = {
  host: 'localhost',
  user: 'root',
  password: dbpwd,
  database: dbname,
  port: dbport
};
