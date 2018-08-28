// declaring dependencies
var express = require('express');
var bodyParser = require('body-parser');

// creating instance of express
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// declaring express-handlebars dependency
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

// creating connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "quotes_db"
});

// establishing connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

// routes
app.get("/", function(req, res) {
    connection.query("SELECT * FROM quotes;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
      res.render("index", { quotes: data });
    });
});

// starting server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});