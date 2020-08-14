module.exports = function (app) {
  var userController = require('./controller/userController');

  // user routes
  app.route('/signup').post(userController.create_a_user);
  app.route('/users').get(userController.list_all_users);
};
