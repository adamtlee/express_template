
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

// The port number that the server runs on
const port = (process.env.PORT || 3000);

// Add body parsing for Content-Type json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(port, () => {
    console.log(`player app running on ${port}`)
});

module.exports = app