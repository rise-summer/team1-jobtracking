import React, { Fragment, useContext, Router } from "react";
import {
  NavBarDiv,
  LeftNavBarDiv,
  RightNavBarDiv,
  HomeLink,
  NavLink,
} from "../style.js";
import { SignUpLink } from "./style.js";
import { useHistory, withRouter } from "react-router-dom";
import { AuthenticationContext } from "../../../AuthenticationContext";
import { logout } from "../../apiFunctions";
export default function LandingPageNavigation() {
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
          <HomeLink id="/" onClick={routeMainfeed}>
            Pipeline
          </HomeLink>
          {/* <SearchBar /> */}
        </LeftNavBarDiv>
        <RightNavBarDiv>
          {/* <NavLink>{authentication.displayName}</NavLink> */}
          <NavLink>About</NavLink>
          <React.Fragment>
            <NavLink onClick={signout}>
              {authentication["uid"] == null ? "Log In" : "Log Out"}
            </NavLink>
          </React.Fragment>
          {authentication["uid"] == null && (
            <React.Fragment>
              <SignUpLink id="/signup" onClick={routeMainfeed}>
                Sign Up
              </SignUpLink>
            </React.Fragment>
          )}
        </RightNavBarDiv>
      </NavBarDiv>
      {/* </Router> */}
    </Fragment>
  );
}

// export default withRouter(Navigation);
