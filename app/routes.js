global.router = express.Router();
var HomeController = require('../app/Controllers/HomeController');
var UserController = require('../app/Controllers/UserController');
var CategoryController = require('../app/Controllers/CategoryController');
var ProductController = require('../app/Controllers/ProductController');

router.get('/', HomeController.home);
router.get('/about', HomeController.about);
router.get('/chat', HomeController.getChat);
router.get('/register', HomeController.getRegister);
router.post('/register-post',urlencodedParser, HomeController.postRegister);
router.get('/login', HomeController.getLogin);
router.post('/auth-login', HomeController.postLogin);
//Category route
router.get('/categories', CategoryController.categories);
router.get('/category-status-update/:id', CategoryController.statusUpdate);
router.get('/category-add', CategoryController.getAdd);
router.post('/category-add-post', CategoryController.postAdd);
router.get('/category-edit/:id', CategoryController.getEdit);
router.post('/category-edit-post/:id', CategoryController.postEdit);
//Product route
router.get('/products', ProductController.products);
router.get('/product-status-update/:id', ProductController.statusUpdate);
router.get('/product-add', ProductController.getAdd);
router.post('/product-add-post', ProductController.postAdd);
router.get('/product-edit/:id', ProductController.getEdit);
router.post('/product-edit-post/:id', ProductController.postEdit);

module.exports = router;
