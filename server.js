// grab the packages/variables you need
var express = require('express');
var app     = express();
var ig      = require('instagram-node').instagram();

// configure the app
// ===============================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// Set the routes
// ===============================================
// home page route - popular images
app.get('/', function(req, res) {

  // use the instagram package to get popular media
  // render the home page and pass in the popular images
  res.render('pages/index')

});

// Start the server
// ===============================================
app.listen(8080);
console.log('App started! Go to http://localhost:8080');
