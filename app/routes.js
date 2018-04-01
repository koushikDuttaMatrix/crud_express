global.router = express.Router();
var homeController = require('../app/Controllers/HomeController');
var userController = require('../app/Controllers/UserController');
var categoryController = require('../app/Controllers/CategoryController');
var ProductController = require('../app/Controllers/ProductController');


router.get('/', homeController.home);
router.get('/about', homeController.about);
router.get('/user-list', userController.user_list);
router.get('/category-add', categoryController.getAdd);
router.get('/categories', categoryController.categories);
router.get('/products', ProductController.products);
router.get('/product-status-update/:id', ProductController.statusUpdate);
router.get('/product-add', ProductController.getAdd);
router.post('/product-add-post', ProductController.postAdd);

module.exports = router;
