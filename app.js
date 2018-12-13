const express = require('express')
const express_app = express()
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

// mongodb connection
mongoose.connect("mongodb://localhost:27017/magworm");
var db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

//use sessions for tracking logins
express_app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
}));

// make user ID available in templates
express_app.use(function (req, res, next) {
  res.locals.currentUser = req.session.userId;
  next();
});

// parse incoming requests
express_app.use(bodyParser.json());
express_app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from template
express_app.use(express.static(__dirname + '/public'));

// view engine setup
express_app.set('view engine', 'pug');
express_app.set('views', __dirname + '/views');

// include routes
var routes = require('./routes/router');
express_app.use('/', routes);

// catch 404 and forward to error handler
express_app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
express_app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// listen on port 3000
express_app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});

//module.exports = express_app;
