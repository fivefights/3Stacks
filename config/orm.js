// dependencies
var connection = require ('./connection.js');

// helper function for mysql syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// convert object key/value pairs to sql syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}

// create orm object for sql queries
var orm = {
	// function for returning all table data
	selectAll: function(tableInput, cb) {
		// query to get all rows from table
		var queryString = "SELECT * FROM " + tableInput + ";";

		// run db query
		connection.query(queryString, function(err, result) {
			if (err) {
				console.log(err);
			}
			// return result
			cb(result);
		});
	},

	// insert single data row
	insertOne: function(table, cols, vals, cb) {
        // query string for inserting data row
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		// run query
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			// return result
			cb(result);
		});
	},

	// update single data row
	updateOne: function(table, objColVals, condition, cb) {
		// query string for updating single data row
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		// run db query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			// return result
			cb(result);
		});
	}
};

// export orm object
module.exports = orm;