import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseSetup";
import { findAllByTestId } from "@testing-library/react";
export const AuthenticationContext = createContext();

export const AuthenticationProvider = (props) => {
  const [authentication, setAuthentication] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn"))
  );
  console.log(isLoggedIn);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setAuthentication(currentuser);
        localStorage.setItem("loggedIn", JSON.stringify(true));
        setIsLoggedIn(true);
      } else {
        setAuthentication(null);
        localStorage.setItem("loggedIn", JSON.stringify(false));
        setIsLoggedIn(false);
      }
    });
    return unsubscribe();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ authentication, setAuthentication, isLoggedIn, setIsLoggedIn }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};
