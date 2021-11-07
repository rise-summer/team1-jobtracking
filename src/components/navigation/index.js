import React, { Fragment, useContext, Router } from "react";
import {
  NavBarDiv,
  LeftNavBarDiv,
  // SearchBar,
  RightNavBarDiv,
} from "./style.js";
import { useHistory, withRouter } from "react-router-dom";

import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import { AuthenticationContext } from "../../AuthenticationContext";

import { logout } from "../apiFunctions";

export default function Navigation() {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);
  console.log(JSON.stringify(authentication));
  console.log(authentication["uid"]);
  let history = useHistory();

  const signout = () => {
    if (authentication["uid"] == null) {
      history.push("/login");
    } else {
      setAuthentication({});
      logout();
      history.push("/");
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
              {authentication["uid"] == null ? "Log In" : "Log Out"}
            </NavLink>
          </React.Fragment>
        </RightNavBarDiv>
      </NavBarDiv>
      {/* </Router> */}
    </Fragment>
  );
}

// export default withRouter(Navigation);

const HomeLink = styled.a`
  font-weight: 800;
  font-size: 25px;
  padding: 0px 20px 0px 0px;
  /* identical to box height */
  letter-spacing: 0.3px;
  color: #175596;
  text-decoration: none;
  &:hover {
    color: #2071c7;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

const NavLink = styled.a`
  font-weight: bold;
  font-weight: 800;
  font-size: 25px;
  text-decoration: none;
  min-width: 70px;
  margin: 6px 0vw 0px 2vw;
  color: #175596;
  &:hover {
    color: #2071c7;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
