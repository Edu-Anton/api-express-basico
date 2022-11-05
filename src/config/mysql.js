const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

mysqlConnection.connect(function(err) {
  if(err) {
    console.log('error connecting: ' + err.stack);
    return
  }

  console.log('connected as id' +  mysqlConnection.threadId);
});

module.exports = mysqlConnection;