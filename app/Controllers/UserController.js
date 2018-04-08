var User = require('../Models/User');
const url = require('url');
const UserController = {
//=============================================================================
  profile : function(req, res ){
    res.render('pages/user/view',{
      page_name : 'profile_page',
      'query': req.query,
      req : req,
      res : res
    });
  },
  //===========================================================================
  getEditProfile : function(req, res ){
    res.render('pages/user/edit',{
      page_name : 'profile_page',
      'query': req.query,
      req : req,
      res : res
    });
  },
}
module.exports = UserController;
