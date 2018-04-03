// This is a home controller
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
}
module.exports = HomeController;
