// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = process.env.PORT || 8080;

var app = express();

// serve static content from public folder
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// set view engine to handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// import routes and give server access
var routes = require('./controllers/stacks-controller.js');

app.use('/', routes);

app.listen(PORT, function() {
    console.log('server listening on http://localhost:' + PORT);
});