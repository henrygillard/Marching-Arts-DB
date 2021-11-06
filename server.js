const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

// Connect to the database
require('./config/database');
require('./config/passport');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(require('./config/checkToken'));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use('/static', express.static(path.join(__dirname, 'client/build')));


// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

app.use('/api/groups', require('./routes/api/group'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
