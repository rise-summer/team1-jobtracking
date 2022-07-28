import React, {
  Fragment,
  useContext,
  useState,
  Router,
  useEffect,
} from "react";
import {
  NavBarDiv,
  LeftNavBarDiv,
  RightNavBarDiv,
  HomeLink,
  NavLink,
} from "../style.js";
import { Button } from "../../../styles/shared.js";
import { SignUpLink } from "./style.js";
import { useHistory, withRouter } from "react-router-dom";
import { AuthenticationContext } from "../../../AuthenticationContext";
import { logout } from "../../apiFunctions";
export default function LandingPageNavigation() {
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
      {/* <Router> */}
      <NavBarDiv style={{ alignItems: "center" }}>
        <LeftNavBarDiv>
          <HomeLink
            id={`${isLoggedIn ? "/mainfeed" : "/"}`}
            onClick={routeMainfeed}
          >
            Pipeline
          </HomeLink>
          {/* <SearchBar /> */}
        </LeftNavBarDiv>
        <RightNavBarDiv>
          {/* <NavLink>{authentication.displayName}</NavLink> 
          <NavLink id="/about" onClick={routeMainfeed}>
            about
          </NavLink>
          */}

          <React.Fragment>
            <NavLink style={{ alignSelf: "center" }} onClick={signout}>
              {!isLoggedIn ? "log in" : "log out"}
            </NavLink>
          </React.Fragment>
          {!isLoggedIn && (
            <React.Fragment>
              <Button primary id="/signup" onClick={routeMainfeed}>
                sign up
              </Button>
            </React.Fragment>
          )}
        </RightNavBarDiv>
      </NavBarDiv>
    </Fragment>
  );
}
