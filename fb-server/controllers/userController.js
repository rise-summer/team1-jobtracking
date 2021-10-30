let User = require("../model/userModel");

exports.list_all_users = (req, res) => {
  User.getAllUsers((results) => {
    res.json(results);
  });

  return;
};

exports.create_a_user = async (req, res) => {
  const newUser = new User(req.body);
  if (!newUser.username || !newUser.email) {
    res
      .status(400)
      .send({ error: true, message: "Please provide username/email." });
    return;
  }

  User.createUser(newUser, (err, user) => {
    if (err == null) {
      res
        .status(200)
        .send({ error: false, message: "User successfully created." });
      return;
    } else {
      res
        .status(409)
        .send({ error: true, message: "Error while trying to create user." });
    }

    // const errCode = err.code;
    // const errMessage = err.message;
    // if (errCode == 'auth/email-already-in-use') {
    //   res.status(422);
    //   res.send({ error: true, message: errMessage });
    // } else if (errCode == 'auth/invalid-email' || errCode == 'auth/weak-password') {
    //   res.status(400);
    //   res.send({ error: true, message: errMessage });
    // }
    // else if (errCode == 'ER_DUP_ENTRY') {
    //   res.status(409).send('User exists');
    // }
  });
};

// exports.log_in_user = async (req, res) => {
//   let user = new User(req.body);

//   try {
//     await fbapp.auth().signInWithEmailAndPassword(user.email, user.password);
//   } catch (error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;

//     if (errorCode == 'auth/wrong-password' || errorCode == 'auth/invalid-email') {
//       res.status(422);
//     } else if (errorCode == 'auth/user-not-found') {
//       res.status(400);
//     }
//     res.send({ error: true, message: errorMessage });
//     return;
//   }
// };
