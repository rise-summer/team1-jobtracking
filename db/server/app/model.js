let sql = require('./db');
const uuid = require('uuid');

// user object construction
let User = (user) => {
  this.id = uuid();
  this.username = user.username;
  this.email = user.email;
};

User.createUser = (newUser) => {
  sql.query('INSERT INTO users SET ?', newUser, (err, res) => {
    if (err) {
      console.log('error: ', err);
      return sql.rollback(() => {
        throw err;
      });
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
  sql.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log('error: ', err);
      return sql.rollback(() => {
        throw err;
      });
    }
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
