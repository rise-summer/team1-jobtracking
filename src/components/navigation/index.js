import React, { Fragment, useContext, Router } from "react";
import {
  NavBarDiv,
  LeftNavBarDiv,
  // SearchBar,
  RightNavBarDiv,
  HomeLink,
  NavLink,
} from "./style.js";
import { useHistory, withRouter } from "react-router-dom";

import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import { AuthenticationContext } from "../../AuthenticationContext";

import { logout } from "../apiFunctions";

export default function Navigation() {
  const { authentication, setAuthentication, isLoggedIn, setIsLoggedIn } =
    useContext(AuthenticationContext);
  console.log(JSON.stringify(authentication));
  console.log(authentication["uid"]);
  let history = useHistory();

  const signout = () => {
    if (authentication["uid"] == null) {
      history.push("/login");
    } else {
      setAuthentication({});
      logout().then(() => {
        history.push("/");
        localStorage.setItem("loggedIn", JSON.stringify(false));
        setIsLoggedIn(false);
      });
    }
  };

  const routeMainfeed = (e) => {
    history.push(e.target.id);
  };

  return (
    <Fragment>
      {/* <Router> */}
      <NavBarDiv>
        <LeftNavBarDiv>
          <HomeLink id="/mainfeed" onClick={routeMainfeed}>
            Pipeline
          </HomeLink>
          {/* <SearchBar /> */}
        </LeftNavBarDiv>
        <RightNavBarDiv>
          {/* <NavLink>{authentication.displayName}</NavLink> */}
          <NavLink id="/trackr" onClick={routeMainfeed}>
            Tracker
          </NavLink>
          <React.Fragment>
            <NavLink onClick={signout}>
              {!isLoggedIn ? "Log In" : "Log Out"}
            </NavLink>
          </React.Fragment>
        </RightNavBarDiv>
      </NavBarDiv>
      {/* </Router> */}
    </Fragment>
  );
}

// export default withRouter(Navigation);
