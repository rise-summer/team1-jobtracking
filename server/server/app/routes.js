module.exports = function (app) {
  var userController = require('./controller/userController');
  var jobController=require('./controller/jobController');
  var postController = require('./controller/postController');
  var checkAuth=require('./authenticateToken')

  //middleware for authentication
  app.route('/api/*').all(checkAuth)
  // user routes
  app.route('api/register').post(userController.create_a_user);
  // app.route('/api/users').get(userController.list_all_users);
  app.route('/job/create').post(jobController.create_job_app);
  app.route('/api/jobs').get(jobController.get_jobs);
  app.route('/api/job/:jobId').get(jobController.get_job); // Access jobId via: req.params.jobId
  app.route('/api/job/delete/:jobId').delete(jobController.delete_job);
  app.route('/api/job/update/:jobId').put(jobController.update_job);
  app.route('/post/create').post(postController.create_new_post);
  app.route('/post/getUserPosts/:userId').get(postController.get_posts_of_user);
  app.route('/post/fetchPosts').get(postController.get_posts);
};
