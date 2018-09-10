// import orm for db functions
var orm = require('../config/orm.js');

// create stack object
var stack = {

  // select all stacks table entries
  selectAll: function(cb) {
    orm.selectAll('stacks', function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('stacks', cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('stacks', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// export db functions for stacks-controller.js
module.exports = stack;