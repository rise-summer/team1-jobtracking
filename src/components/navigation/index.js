import React, { Fragment, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NavBarDiv,
  LeftNavBarDiv,
  SearchBar,
  RightNavBarDiv,
} from "./style.js";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import styled from "styled-components";

import { AuthenticationContext } from "../../AuthenticationContext";

import { logout } from "../apiFunctions";

export default function Navigation(props) {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);
  const log_in = useSelector((state) => state.isLogged.logged_in);
  const dispatch = useDispatch();

  const signout = () => {
    setAuthentication({});
    logout();
    dispatch({ type: "SIGN_OUT" });
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
          <HomeLink to="/">Pipeline</HomeLink>
          {/* <SearchBar /> */}
        </LeftNavBarDiv>
        <RightNavBarDiv>
          {/* <NavLink>{authentication.displayName}</NavLink> */}
          <NavLink to="/trackr">Tracker</NavLink>
          <React.Fragment>
            <NavLink to="/login" onClick={signout}>
              {!log_in ? "Log In" : "Log Out"}
            </NavLink>
          </React.Fragment>
        </RightNavBarDiv>
      </NavBarDiv>
    </Fragment>
  );
}

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
  font-size: 18px;
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
