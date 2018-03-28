global.express = require('express');
global.app = express();
global.myModule = require('./database/connection.js');
global.myRoute = require('./app/routes.js');
global.myController = require('./app/controllers/controller.js');
global.app.use(express.static('public'));
global.app.set('view engine', 'ejs');

// This responds with "Hello World" on the homepage
var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
