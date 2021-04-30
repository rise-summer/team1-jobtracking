import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = (props) => {
  const [authentication, setAuthentication] = useState({});

  return (
    <AuthenticationContext.Provider value={[authentication, setAuthentication]}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
