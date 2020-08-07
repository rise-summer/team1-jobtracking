let User = require('../model/userModel');
exports.list_all_users = (req, res) => {
  User.getAllUsers();
}

exports.create_a_user = (req, res) => {
  console.log("Create a new user");
  let newUser = new User(req.body);
  console.log("newUser:" + newUser);
  if (!newUser.username || !newUser.email){
    res.status(400).send({ error:true, message: 'Please provide username/email' });
  } else{
    User.createUser(newUser);
    res.json(newUser);
  }
}

exports.delete_a_user = (req, res) => {
  User.remove( req.params.userId);
};