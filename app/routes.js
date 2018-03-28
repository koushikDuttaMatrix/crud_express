// index page 
global.app.get('/', function(req, res) {
    res.render('pages/index',{
    	page_name : 'home'
    });
});
// about page 
global.app.get('/about', function(req, res) {
    res.render('pages/about',{
    	page_name : 'about'
    });
});
// register page 
global.app.get('/student-register', function(req, res) {
    res.render('pages/register',{
    	page_name : 'student-register'
    });
});
global.app.get('/post-register', function(req, res) {
	console.log("here");	
    //res.render('pages/register');
});