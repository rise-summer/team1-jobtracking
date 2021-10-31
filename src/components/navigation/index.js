import React, { Fragment, useContext } from "react";
import {
  NavBarDiv,
  LeftNavBarDiv,
  // SearchBar,
  RightNavBarDiv,
} from "./style.js";
import { useHistory, withRouter } from "react-router-dom";

import { Link } from "react-router-dom";
import styled from "styled-components";

import { AuthenticationContext } from "../../AuthenticationContext";

import { logout } from "../apiFunctions";

function Navigation(props) {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);
  console.log(JSON.stringify(authentication));
  console.log(authentication['uid']);
  let history = useHistory();

  const signout = () => {
    if (authentication['uid'] == null) {
      console.log(props)
      history.push('/login')
    }
    else {
      setAuthentication({});
      logout();
      history.push('/')
    }
  };

  // let NavBar;
  // if (props.isLoggedIn) {
  //   NavBar = (
  //     <React.Fragment>
  //       <NavLink to="/login">log out</NavLink>
  //     </React.Fragment>
  //   );
  // } else {
  //   NavBar = (
  //     <React.Fragment>
  //       <NavLink to="/signup">Sign Up</NavLink>
  //       <NavLink to="/login">Log In</NavLink>
  //     </React.Fragment>
  //   );
  // }

  return (
    <Fragment>
      <NavBarDiv>
        <LeftNavBarDiv>
          <HomeLink to="/mainfeed">Pipeline</HomeLink>
          {/* <SearchBar /> */}
        </LeftNavBarDiv>
        <RightNavBarDiv>
          {/* <NavLink>{authentication.displayName}</NavLink> */}
          <NavLink to="/trackr">Tracker</NavLink>
          <React.Fragment>
            <NavLink onClick={signout}>
              {authentication['uid'] == null ? "Log In" : "Log Out"}
            </NavLink>
          </React.Fragment>
        </RightNavBarDiv>
      </NavBarDiv>
    </Fragment>
  );
}

export default withRouter(Navigation)

const HomeLink = styled(Link)`
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  padding: 0px 20px 0px 0px;
  /* identical to box height */
  letter-spacing: 0.3px;
  color: #175596;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

const NavLink = styled(Link)`
  font-style: normal;
  font-weight: bold;
  font-weight: 800;
  font-size: 25px;
  text-decoration: none;
  min-width: 70px;
  margin: 6px 0vw 0px 2vw;
  color: #175596;
  cursor: pointer;
  &:hover {
    color: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
