// dependencies
var mysql = require('mysql');

// create connection
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    mysql.createConnection({
        host: "nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "x2c6skqe6lvgv9c5",
        password: "ttjz77m59co4nh6x",
        database: "ava3ho5ldkyff1hl"
    });
}
  
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