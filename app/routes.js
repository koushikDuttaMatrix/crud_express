global.router = express.Router();
var homeController = require('../app/Controllers/HomeController');
var userController = require('../app/Controllers/UserController');
var studentController = require('../app/Controllers/StudentController');

router.get('/', homeController.home);
router.get('/about', homeController.about);
router.get('/user-list', userController.user_list);
router.get('/student-register', studentController.studentRegister);
router.post('/student-register-post', studentController.studentRegisterPost);

module.exports = router;