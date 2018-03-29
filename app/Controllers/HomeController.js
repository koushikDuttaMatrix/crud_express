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
	}
}
module.exports = HomeController;
