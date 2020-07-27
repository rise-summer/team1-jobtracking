let User = require('./model');
exports.list_all_users = (req, res) => {
  User.getAllUsers();
}

exports.create_a_user = (req, res) => {
  let newUser = new User(req.body);
  if (!newUser.username || !newUser.email){
    res.status(400).send({ error:true, message: 'Please provide username/email' });
  } else{
    User.createUser(newUser);
  }
}

exports.delete_a_user = (req, res) => {
  User.remove( req.params.userId);
};