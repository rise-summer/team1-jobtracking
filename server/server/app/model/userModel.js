let sql = require('../db');
const uuid = require('uuid');


// user object construction
function User(user) {
  console.log('user: ' + JSON.stringify(user));
  this.username = user.username;
  this.email = user.email;
}

User.createUser = (newUser, result) => {
  console.log("create user");
  let stmt=`INSERT INTO users(username,email)
  VALUES(?,?)`;
  let info=[newUser.username,newUser.email]
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

User.getUserByEmail=(userEmail,result)=>{
  let stmt=`SELECT * FROM users WHERE email=?`;
  sql.query(stmt,userEmail,(err,res)=>{
    // console.log("====");
    console.log(userEmail);
    if(err){
      result(err,null)
    } 
    else {
      result(null,res)
    }
    
  });
}

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
