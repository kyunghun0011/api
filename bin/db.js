const mysql = require('mysql');

 var connection = mysql.createConnection({
   socketPath      :  `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
   user      : process.env.DB_USER,
   password  : process.env.DB_PASS,
   database  : process.env.DB_NAME
 });

module.exports = connection;
