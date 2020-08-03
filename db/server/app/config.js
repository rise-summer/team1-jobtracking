const db = process.env.MYSQL_DATABASE,
    dbpwd = process.env.MYSQL_ROOT_PASSWORD;
const connection = {
    host: 'localhost',
    user: 'root',
    password: dbpwd,
    database: db,
    port: 3306,
    insecureAuth : true
};

module.exports = connection;
