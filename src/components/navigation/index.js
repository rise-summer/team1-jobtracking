import React, { Fragment } from "react";
import {
  NavBarDiv,
  LeftNavBarDiv,
  LogoButton,
  SearchBar,
  RightNavBarDiv,
  AppTrackBtn,
} from "./style.js";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLogged };
};

class Navigation extends React.Component {
  render() {
    let NavBar;
    if (this.props.isLoggedIn) {
      NavBar = (
        <React.Fragment>
          <AppTrackBtn href="/login">log out</AppTrackBtn>
        </React.Fragment>
      );
    } else {
      NavBar = (
        <React.Fragment>
          <AppTrackBtn href="/signup">sign up</AppTrackBtn>
          <AppTrackBtn href="/login">log in</AppTrackBtn>
        </React.Fragment>
      );
    }
    return (
      <Fragment>
        <NavBarDiv>
          <LeftNavBarDiv>
            <LogoButton href="/">Hive</LogoButton>
            <SearchBar></SearchBar>
          </LeftNavBarDiv>
          <RightNavBarDiv>
            {NavBar}
            <AppTrackBtn href="/trackr">trackr</AppTrackBtn>
          </RightNavBarDiv>
        </NavBarDiv>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Navigation);
