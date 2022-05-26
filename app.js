//Initializing the Local Port
const port = process.env.PORT || 4200;

//Base Variables for Express
var path = require('path');
var express = require('express');
var flash = require('express-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

var conn = require('./lib/db');

//---ROUTES---//
var indexRoute = require('./routes/index');

//---VIEWS---//
//Setup View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
//--------------------------------------------

//---MIDDLEWARES---//
//Setup Session
app.use(cookieParser());
app.use(session({
    secret: '@cc@3147',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 120000}
}));
app.use(flash());
//Routing Middlewares
app.use('/' , indexRoute);
//----------------------------------------------

app.listen(port, () => console.log('Listening on port ${port}...'));
