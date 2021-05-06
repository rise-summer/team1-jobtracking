import axios from "axios";
import { auth } from "../firebaseSetup";

export const signupFirebase = (user) => {
  return auth
    .createUserWithEmailAndPassword(user["email"], user["password"])
    .then((res) => {
      const createdUser = auth.currentUser;
      return createdUser.updateProfile({
        displayName: user["username"],
      });
      // .then(result=>{
      //     console.log(res)
      //     return res})
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};

export const registerDB = (user, token) => {
  return axios
    .post(
      ":5000/api/register",
      {
        username: user["username"],
        email: user["email"],
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = (email, password) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      // console.log(res)
      return res;
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};

export const logout = () => {
  return auth.signOut().then((res) => {
    console.log(res);
  });
};
