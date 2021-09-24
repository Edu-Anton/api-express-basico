const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api-express-basico'
});

mysqlConnection.connect(function(err) {
  if(err) {
    console.log('error connecting: ' + err.stack);
    return
  }

  console.log('connected as id' +  mysqlConnection.threadId);
});

module.exports = mysqlConnection;