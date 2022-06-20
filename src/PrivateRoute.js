import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import { useContext } from "react";
export default function PrivateRoute({ children, ...rest }) {
  const { authentication, setAuthentication, isLoggedIn } = useContext(
    AuthenticationContext
  );
  return (
    <Route
      exact
      {...rest}
      render={({ location }) => {
        return authentication ? (
          React.cloneElement(children, { location: location })
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    ></Route>
  );
}
