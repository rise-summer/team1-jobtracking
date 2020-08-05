module.exports = function(app) {
    var userController = require('./controller/userController');
  
    // user routes
    app.route('/users')
      .get(userController.list_all_users)
      .post(userController.create_a_user);
}