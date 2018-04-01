var Category = require('../Models/Category');
var Product = require('../Models/Product');
var ProductCategory = require('../Models/ProductCategory');
global.User = require('../Models/User');
// Student Controller
const CategoryController = {
		getAdd : function(req, res ){
		res.render('pages/category/add',{
			page_name : 'category-add'
		});
	},
	categories : function(req, res ){
		global.ProductCategory.forge()
    .fetch({withRelated: ['Categories']})
    .then(function (collection) {
      res.json({error: false, data: collection.toJSON()});
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
	},
}
//https://github.com/qawemlilo
// GET /users - fetch all users
// POST /users - create a new user
// GET /users/:id - fetch a single user by id
// PUT /users/:id - update user
// DELETE /users/:id - delete user

module.exports = CategoryController;
