let User = require('../model/userModel');
const { firebaseConfig } = require('../config');
const firebase = require('firebase/app');
require('firebase/auth');

const fbapp = firebase.initializeApp(firebaseConfig);

exports.list_all_users = (req, res) => {
  User.getAllUsers();
};

exports.create_a_user = async (req, res) => {
  let newUser = new User(req.body);

  if (!newUser.username || !newUser.email) {
    res.status(400).send({ error: true, message: 'Please provide username/email' });
    return;
  }

  try {
    await fbapp.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode == 'auth/email-already-in-use') {
      res.status(422);
    } else if (errorCode == 'auth/invalid-email' || errorCode == 'auth/weak-password') {
      res.status(400);
    }
    res.send({ error: true, message: errorMessage });
    return;
  }

  User.createUser(newUser, (err, user) => {
    if (err != null && err.code == 'ER_DUP_ENTRY') {
      res.status(409).send('User exists');
    } else {
      res.status(200).json(user);
    }
  });
};

exports.log_in_user = (req, res) => {
  let user = new User(req.body);

  try {
    await fbapp.auth().signInWithEmailAndPassword(user.email, user.password);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode == 'auth/wrong-password' || errorCode == 'auth/invalid-email') {
      res.status(422);
    } else if (errorCode == 'auth/user-not-found') {
      res.status(400);
    }
    res.send({ error: true, message: errorMessage });
    return;
  }
};

exports.delete_a_user = (req, res) => {
  User.remove(req.params.userId);
};
