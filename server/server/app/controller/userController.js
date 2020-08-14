let User = require('../model/userModel');
const { firebaseConfig } = require('../config');
const firebase = require('firebase/app');
require('firebase/auth');

const fbapp = firebase.initializeApp(firebaseConfig);

exports.list_all_users = (req, res) => {
  User.getAllUsers();
};

exports.create_a_user = (req, res) => {
  let newUser = new User(req.body);
  if (!newUser.username || !newUser.email) {
    res.status(400).send({ error: true, message: 'Please provide username/email' });
  } else {
    User.createUser(newUser);
    fbapp
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(400).sned({ error: true, message: errorCode + ' ' + errorMessage });
      });
    res.json(newUser);
  }
};

exports.delete_a_user = (req, res) => {
  User.remove(req.params.userId);
};
