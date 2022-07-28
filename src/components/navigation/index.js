import React, { Fragment, useContext, Router } from "react";
import Search from "./search/index";
import {
  NavBarDiv,
  LeftNavBarDiv,
  RightNavBarDiv,
  HomeLink,
  NavLink,
} from "./style.js";
import { useHistory, withRouter } from "react-router-dom";

import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import { AuthenticationContext } from "../../AuthenticationContext";

import { logout } from "../apiFunctions";

export default function Navigation(props) {
  const { authentication, setAuthentication, isLoggedIn, setIsLoggedIn } =
    useContext(AuthenticationContext);

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
          {props.children}
        </LeftNavBarDiv>
        <RightNavBarDiv>
          {/* <NavLink>{authentication.displayName}</NavLink> */}
          <NavLink id="/trackr" onClick={routeMainfeed}>
            Tracker
          </NavLink>
          <NavLink id="/yourposts" onClick={routeMainfeed}>
            Your posts
          </NavLink>
          <NavLink onClick={signout}>
            {!isLoggedIn ? "Log in" : "Log out"}
          </NavLink>
          {/*<NavLink id="/settings" onClick={routeMainfeed}>
            Settings
  </NavLink>*/}
        </RightNavBarDiv>
      </NavBarDiv>
      {/* </Router> */}
    </Fragment>
  );
}

// export default withRouter(Navigation);
