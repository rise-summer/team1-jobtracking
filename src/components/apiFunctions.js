import { auth, firestore } from "../firebaseSetup";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();
export const signInWithGoogle = async () => {
  return auth.signInWithPopup(auth, googleProvider);
};

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

export const resetPasswordEmail = (email) => {
  return auth.sendPasswordResetEmail(email);
};
