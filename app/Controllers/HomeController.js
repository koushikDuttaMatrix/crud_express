// This is a home controller
var User = require('../Models/User');
const url = require('url');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var bodyParser = require("body-parser");
app.use(bodyParser());
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
	postRegister : function(req, res ){
		bcrypt.hash(req.body.pass, saltRounds, function(err, hash) {
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
	},
	//==========================================================================
	getLogin : function(req, res ){
			console.log(req.user);
			console.log(req.isAuthenticated());
			res.render('pages/auth/login',{
	    	page_name : 'login',
				'query': req.query,
	    });
	},
//=============================================================================
	postLogin : function(req, res ){
		global.User
		.forge()
		.query(function(qb) {
			qb.where('users.email','=',req.body.email);
			//.where('email','=',req.body.email)
			//qb.debug(true);
		})
		.fetch()
		.then(function (collection) {
				if(collection!=null)
				{
					var hash = collection.attributes.password;
					bcrypt.compare(req.body.pass_confirmation, hash, function(err, response) {
					// res == true
					if(response==true)
					{
						const user = collection.attributes;
						console.log(user);
						req.login(user,function(err){
							res.redirect(url.format({
							 pathname:"/login",
							 query: {
									error: false,
									successMsg: "Login successfully done.",
								}
								}));
						});

					}
					else {
						res.redirect(url.format({
						 pathname:"/login",
						 query: {
								error: false,
								errorMsg: "Wrong Email/Password.",
							}
						}));
					}

					});
				}
				else {
					res.redirect(url.format({
					 pathname:"/login",
					 query: {
							error: false,
							errorMsg: "Wrong Email/Password.",
						}
					}));
				}

		})
		.otherwise(function (err) {
			res.status(500).json({error: true, data: {message: err.message}});
		});
	},
	//===========================================================================
}

//============================================================================
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});
module.exports = HomeController;
