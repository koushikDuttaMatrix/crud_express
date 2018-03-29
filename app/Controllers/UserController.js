global.User = require('../Models/User');
// Display list of all Authors.
exports.user_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};

// Display detail page for a specific Author.
exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Author create form on GET.
exports.user_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
exports.user_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET.
exports.user_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.user_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.user_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.user_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};

// global.app.get('/api/users', function(req, res) {
//   new User().fetchAll()
//     .then(function(articles) {
//       res.send(articles.toJSON());
//     }).catch(function(error) {
//       console.log(error);
//       res.send('An error occured');
//     });
// });