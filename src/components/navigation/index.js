import React, { Fragment } from "react";
import {
  OuterDiv,
  InnerDiv,
  SearchDiv,
  LogoDiv,
  LogoButton,
  NavDiv,
  NavSearch,
  AdditionDiv,
  AdditionWrapper,
  AdditionButton,
  SearchTag,
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
          <AdditionWrapper>
            <div>
              <AdditionButton href="/login">
                <div>log out</div>
              </AdditionButton>
            </div>
          </AdditionWrapper>
        </React.Fragment>
      );
    } else {
      NavBar = (
        <React.Fragment>
          <AdditionWrapper>
            <div>
              <AdditionButton href="/signup">sign up</AdditionButton>
            </div>
          </AdditionWrapper>
          <AdditionWrapper>
            <div>
              <AdditionButton href="/login">
                <div>log in</div>
              </AdditionButton>
            </div>
          </AdditionWrapper>
        </React.Fragment>
      );
    }
    return (
      <Fragment>
        <OuterDiv>
          <InnerDiv>
            <SearchDiv>
              <LogoDiv>
                <div>
                  <LogoButton href="/">
                    <div>Logo</div>
                  </LogoButton>
                </div>
              </LogoDiv>
              <NavDiv>
                <div>
                  <NavSearch></NavSearch>
                </div>
              </NavDiv>
            </SearchDiv>
            <AdditionDiv>
              {NavBar}
              <AdditionWrapper>
                <div>
                  <AdditionButton href="/trackr">
                    <div>trackr</div>
                  </AdditionButton>
                </div>
              </AdditionWrapper>
            </AdditionDiv>
          </InnerDiv>
        </OuterDiv>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Navigation);
