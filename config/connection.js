// dependencies
var mysql = require('mysql');

// create connection
var connection;

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "stacks_db",
        socketPath: "/var/run/mysqld/mysqld.sock"
    });
// }
  
  // establish connection
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // export connection for orm
  module.exports = connection;