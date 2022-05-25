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

//---VIEWS---//

//---MIDDLEWARES---//

app.listen(port, () => console.log('Listening on port ${port} 4200'));
