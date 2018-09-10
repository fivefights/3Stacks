// dependencies
var express = require('express');
var router = express.Router();

// import stacks.js model for db functions
var stack = require('../models/stacks.js');

// begin routes
router.get('/', function(req, res) {
  stack.selectAll(function(data) {
    var hbsObject = {
      stacks: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/stacks', function(req, res) {
  stack.insertOne([
    'stacks_name'
  ], [
    req.body.stacks_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/stacks/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  stack.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// export routes for server.js
module.exports = router;