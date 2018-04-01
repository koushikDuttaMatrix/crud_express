global.express = require('express');
global.app = express();
global.bodyParser = require('body-parser');
global.app.use(bodyParser.json());
global.app.use(bodyParser.urlencoded({ extended: false }));
global.env = require('dotenv/config');
global.Promise = require("bluebird");
global.myDb = require('./database/connection.js');

global.app.use(express.static('public'));
global.app.set('view engine', 'ejs');
global. _ = require('lodash');
global.multer = require('multer');
global.path = require('path');
//multer setting
global.productStorage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './public/uploads/products/images/')
	},
	filename: function(req, file, callback) {
		//console.log(file)
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})



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
