// This is a home controller
var User = require('../Models/User');
const url = require('url');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const HomeController = {
	home : function(req, res) {
    res.render('pages/index',{
    	page_name : 'home'
    });
	},
	// Display detail page for a specific Author.
	about : function(req, res) {
	    res.render('pages/about',{
	    	page_name : 'about'
	    });
	},
	getChat : function(req, res) {
	    res.render('pages/chat',{
	    	page_name : 'chat'
	    });
	},
	//==========================================================================
	getRegister : function(req, res ){
		//console.log(global.Category);
			res.render('pages/auth/register',{
	    	page_name : 'register',
				'query': req.query,
	    });
	},
	//===========================================================================
	postRegisterOne : function(req, res ){
		console.log(req.body);
		bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.pass, salt, function(err, hash) {
        // Store hash in your password DB.
						User.forge({
						f_name: req.body.f_name,
						l_name: req.body.l_name,
						username: req.body.username,
						email: req.body.email,
						password: hash,
						//product_image : (req.file!=undefined) ? req.file.filename : null,
						status: 'ACTIVE',
					})
				.save()
				.then(function (userVal) {

					res.redirect(url.format({
					 pathname:"/register",
					 query: {
							error: false,
							successMsg: "Register Sucessfully.",
						}
					}));
					//console.log(productVal.toJSON);
					//response.cat = collection.categories;
				//	console.log(collection.related('categories'));
				//  res.json({error: false, data: collection.toJSON()});
				})
				.otherwise(function (err) {
					res.status(500).json({error: true, data: {message: err.message}});
				});
    });
});
	},
	//==========================================================================
}
module.exports = HomeController;
