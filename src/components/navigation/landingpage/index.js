import React, { Fragment, useContext } from "react";
import {
  NavBarDiv,
  LeftNavBarDiv,
  RightNavBarDiv,
  HomeLink,
  NavLink,
} from "../style.js";
import { LandingPageButton, heavyBoxShadow } from "../../../styles/shared.js";
import { SignUpLink } from "./style.js";
import { useHistory, withRouter } from "react-router-dom";
import { AuthenticationContext } from "../../../AuthenticationContext";
import { logout } from "../../apiFunctions";
export default function LandingPageNavigation() {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="25px"
      height="25px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18 6L6 18M8 6h10v10"
      />
    </svg>
  );

  const { authentication, setAuthentication, isLoggedIn, setIsLoggedIn } =
    useContext(AuthenticationContext);

  console.log(isLoggedIn, authentication);
  let history = useHistory();

  const signout = () => {
    if (!authentication || authentication["uid"] == null) {
      history.push("/login");
    } else {
      setAuthentication({});
      logout().then(() => {
        localStorage.setItem("loggedIn", JSON.stringify(false));
        setIsLoggedIn(false);
        history.push("/");
      });
    }
  };

  const routeMainfeed = (e) => {
    history.push(e.target.id);
  };
  return (
    <Fragment>
      <NavBarDiv style={{ alignItems: "center", padding: "20px 30px" }} shadow>
        <LeftNavBarDiv>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {svg}
            <HomeLink
              id={`${isLoggedIn ? "/mainfeed" : "/"}`}
              onClick={routeMainfeed}
              style={{ fontWeight: 600, marginLeft: "5px" }}
            >
              Pipeline
            </HomeLink>
          </div>
          {/* <SearchBar /> */}
        </LeftNavBarDiv>
        <RightNavBarDiv>
          {/* <NavLink>{authentication.displayName}</NavLink> 
          <NavLink id="/about" onClick={routeMainfeed}>
            about
          </NavLink>
          */}

          <React.Fragment>
            <NavLink
              style={{ alignSelf: "center", fontWeight: "bold" }}
              onClick={signout}
            >
              {!isLoggedIn ? "Log In" : "Log Out"}
            </NavLink>
          </React.Fragment>
          {!isLoggedIn && (
            <React.Fragment>
              <LandingPageButton
                style={{ fontWeight: "bold" }}
                primary
                id="/signup"
                onClick={routeMainfeed}
              >
                Sign Up
              </LandingPageButton>
            </React.Fragment>
          )}
        </RightNavBarDiv>
      </NavBarDiv>
    </Fragment>
  );
}
