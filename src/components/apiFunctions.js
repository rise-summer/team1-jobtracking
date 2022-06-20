import axios from "axios";
import { auth } from "../firebaseSetup";

export const signupFirebase = async (user) => {
  await auth.createUserWithEmailAndPassword(user["email"], user["password"]);
  await auth.currentUser.updateProfile({
    displayName: user["username"],
  });
};

export const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logout = async () => {
  await auth.signOut();
};
