module.exports = function (app) {
  var userController = require('./controller/userController');
  var jobController=require('./controller/jobController');
  var checkAuth=require('./authenticateToken')

  //middleware for authentication
  app.route('/api/*').all(checkAuth)
  // user routes
  app.route('/api/register').post(userController.create_a_user);
  // app.route('/api/users').get(userController.list_all_users);
  app.route('/create_job').post(jobController.create_job_app);
  app.route('/get_jobs').get(jobController.get_jobs);
  app.route('/job/:jobId').get(jobController.get_job); // Access jobId via: req.params.jobId
};
