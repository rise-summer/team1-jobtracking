module.exports = function (app) {
  var userController = require('./controller/userController');
  var checkAuth=require('./authenticateToken')

  //middleware for authentication
  app.route('/api/*').all(checkAuth)
  // user routes
  // app.route('/signup').post(userController.create_a_user);
  app.route('/api/users').get(userController.list_all_users);
  // app.route('/signin').post(userController.log_in_user);
  app.get('/yo',function(req,res){
    res.send('yo')
  })
};
