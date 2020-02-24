const mysql = require('mysql');

// 배포용
// var connection = mysql.createConnection({
//   socketPath      :  `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
//   user      : process.env.DB_USER,
//   password  : process.env.DB_PASS,
//   database  : process.env.DB_NAME
// });

var connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '111111',
  database  : 'API'
});
module.exports = connection;