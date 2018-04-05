global.express = require('express');
global.app = express();
global.bodyParser = require('body-parser');
global.env = require('dotenv/config');
global.Promise = require("bluebird");
global.myDb = require('./database/connection.js');
global.app.use(express.static('public'));
global.app.set('view engine', 'ejs');
global. _ = require('lodash');
global.multer = require('multer');
global.path = require('path');
//var flash = require('connect-flash');
global.cookieParser = require('cookie-parser')
global.session = require('express-session');
global.MySQLStore = require('express-mysql-session')(session);
global.passport = require('passport');
global.myDb = require('./config/config.js');
global.formidable = require('formidable'),
//For password hash
global.bcrypt = require('bcrypt');
global.app.use( global.bodyParser.json({limit: '50mb'}) ); // to support JSON-encoded bodies
global.urlencodedParser = global.bodyParser.urlencoded({ extended: true,parameterLimit: 1000000,limit: '50mb' });
//express session setup
global.app.use(session({
  secret: 'dfnmbfwertfhewtrfhwkhrw',
  resave: false,
  saveUninitialized: false,
  //cookie: { secure: true }
}));
global.app.use(passport.initialize());
global.app.use(passport.session());

// global.app.use(global.bodyParser.urlencoded({ extended: true,
//    parameterLimit: 1000000,
// limit: '50mb'}));
// global.ModelPath = require("path").join(__dirname, "app/model");
// require("fs").readdirSync(ModelPath).forEach(function(file) {
//   require("./app/model/" + file);
// });

// global.ModelPath = require("path").join(__dirname, "app/controllers");
// require("fs").readdirSync(ModelPath).forEach(function(file) {
//   require("./app/controllers/" + file);
// });

// This responds with "Hello World" on the homepage
app.use(require('./app/routes.js'));
var port = process.env.PORT || 8080;
var server = app.listen(port, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
//socket setup
var socket = require('socket.io');
var io = socket(server);

io.on('connection',function(socket){
	console.log("Made socket connection",socket.id);

	    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chatCatch', data);
    });

		// Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

})
