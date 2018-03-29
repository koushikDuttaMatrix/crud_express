global.Student = require('../Models/Student');
global.User = require('../Models/User');
// Student Controller
const StudentController = {
		studentRegister : function(req, res ){
		res.render('pages/register',{
			page_name : 'student-register'
		});
	},
	studentRegisterPost : function(req, res ){
		res.render('pages/register',{
			page_name : 'student-register'
		});
	}
}

module.exports = StudentController;