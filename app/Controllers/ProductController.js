var Category = require('../Models/Category');
var Product = require('../Models/Product');
var ProductCategory = require('../Models/ProductCategory');
const url = require('url');
// Student Controllerconsole.log(req);
const ProductController = {
		getAdd : function(req, res ){
		res.render('pages/category/add',{
			page_name : 'category-add'
		});
	},
	products : function(req, res ){
		console.log(req.query);
		global.Product.collection()
    .fetch({withRelated: ['categories.categoryMaster']})
    .then(function (collection) {
			res.render('pages/product/list',{
	    	page_name : 'product_list',
				'list' : collection.toJSON(),
				'query': req.query,
	    });
			console.log(collection.toJSON);
			//response.cat = collection.categories;
		//	console.log(collection.related('categories'));
    //  res.json({error: false, data: collection.toJSON()});
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
	},
	//=============================================================================
	statusUpdate : function(req, res ){
		//console.log(res);
		global.Product.forge({id:req.params.id})
    .fetch({require: true})
    .then(function (collection) {
			var updateValue = {};
					if(collection.attributes.status=="ACTIVE")
							updateValue = {status: 'INACTIVE'};
					else if(collection.attributes.status=="INACTIVE")
							updateValue = {status: 'ACTIVE'};
				collection.save(updateValue)
				.then(function () {
					 res.redirect(url.format({
				       pathname:"/products",
				       query: {
				          error: false,
				          successMsg: "Status changed successfully.",
				        }
				     }));
	      })
	      .otherwise(function (err) {
	        res.status(500).json({error: true, data: {message: err.message}});
	      });
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
	},
//=============================================================================
getAdd : function(req, res ){
		global.Category.collection()
    .fetch()
    .then(function (collection) {
			res.render('pages/product/add',{
	    	page_name : 'product_list',
				'category_list' : collection.toJSON(),
				'query': req.query,
	    });
			console.log(collection.toJSON);
			//response.cat = collection.categories;
		//	console.log(collection.related('categories'));
    //  res.json({error: false, data: collection.toJSON()});
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
	},
	//===========================================================================
	postAdd : function(req, res ){
		var upload = multer({
		storage: global.productStorage,
		fileFilter: function(req, file, callback) {
			var ext = global.path.extname(file.originalname)
			if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
				return callback(res.end('Only images are allowed'), null)
			}
			callback(null, true)
			console.log(file);
		}
	}).single('product_image')
	upload(req, res, function(err) {
		res.end('File is uploaded')
		})
		//=========================================================================
		// console.log(req.body)
		// global.Product.forge({
	  //     name: req.body.name,
	  //     description: req.body.description,
		// 		status: 'ACTIVE',
	  //   })
    // .save()
    // .then(function (productVal) {
		// 				console.log(productVal.attributes.id);
		// 				global.ProductCategory.forge({
		// 	      category_id: req.body.category_id,
		// 	      product_id:  productVal.attributes.id,
		// 	    })
		//     .save()
		//     .then(function (collection) {
		// 			console.log(collection.toJSON);
		//     })
		//     .otherwise(function (err) {
		//       res.status(500).json({error: true, data: {message: err.message}});
		//     });
		// 	res.redirect(url.format({
		//    pathname:"/products",
		//    query: {
		//       error: false,
		//       successMsg: "Records saved sucessfully.",
		//     }
	 	// 	}));
		// 	//console.log(productVal.toJSON);
		// 	//response.cat = collection.categories;
		// //	console.log(collection.related('categories'));
    // //  res.json({error: false, data: collection.toJSON()});
    // })
    // .otherwise(function (err) {
    //   res.status(500).json({error: true, data: {message: err.message}});
    // });
	},
}
//https://evdokimovm.github.io/javascript/nodejs/expressjs/multer/2016/11/03/Upload-files-to-server-using-NodeJS-and-Multer-package-filter-upload-files-by-extension.html
//https://github.com/qawemlilo
// GET /users - fetch all users
// POST /users - create a new user
// GET /users/:id - fetch a single user by id
// PUT /users/:id - update user
// DELETE /users/:id - delete user

module.exports = ProductController;
