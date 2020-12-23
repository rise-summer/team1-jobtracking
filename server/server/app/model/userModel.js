let sql = require('../db');
const uuid = require('uuid');

// const firebase = require('firebase/app');
// require('firebase/auth');

// const { firebaseConfig } = require('../config');

// const fbapp = firebase.initializeApp(firebaseConfig);

// user object construction
function User(user) {
  console.log('user: ' + JSON.stringify(user));
  this.id = uuid.v4();
  this.username = user.username;
  this.email = user.email;
  this.password=user.password;
}

User.createUser = (newUser, result) => {
  // fbapp
  //   .auth()
  //   .createUserWithEmailAndPassword(newUser.email, newUser.password)
  //   .catch((err) => {
  //     result(err, null);
  //     return;
  //   });
  
  let stmt=`INSERT INTO users(username,email,password)
  VALUES(?,?,?)`;
  let info=[newUser.username,newUser.email,newUser.password]
  sql.query(stmt, info, (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, newUser);
    }
  });
};

User.getUserById = (userId) => {
  sql.query('SELECT u FROM users WHERE id = ? ', userId, (err, res) => {
    if (err) {
      console.log('error: ', err);
      return sql.rollback(() => {
        throw err;
      });
    }
  });
};

User.getAllUsers = (result) => {
  let stmt=`SELECT * FROM users`;
  sql.query(stmt, (err, res) => {
    if (err) {
      console.log('error: ', err);
      return sql.rollback(() => {
        throw err;
      });
    }
    result(res);
    return res;
  });
};

User.remove = (userId) => {
  sql.query('DELETE FROM users WHERE id = ?', [userId], (err, res) => {
    if (err) {
      console.log('error: ', err);
      return sql.rollback(() => {
        throw err;
      });
    }
  });
};

module.exports = User;
