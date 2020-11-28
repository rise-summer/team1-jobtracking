import React, { Fragment } from "react";
import {
  OuterDiv,
  NavBarDiv,
  LeftNavBarDiv,
  LogoDiv,
  LogoButton,
  NavDiv,
  SearchBar,
  RightNavBarDiv,
  AdditionWrapper,
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
            <LogoButton href="/">
              <div>Hive</div>
            </LogoButton>
            <SearchBar></SearchBar>
          </LeftNavBarDiv>
          <RightNavBarDiv>
            {NavBar}
            <AppTrackBtn href="/trackr">
              <div>trackr</div>
            </AppTrackBtn>
          </RightNavBarDiv>
        </NavBarDiv>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Navigation);
