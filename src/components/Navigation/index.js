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
  SearchTag

} from './style.js'

import {useSelector} from 'react-redux'


class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      tag: ''
    }
  }

  // const counter = useSelector(state => state.isLogged)

  render() {
    return (
      <Fragment>
        <OuterDiv>
          <InnerDiv>
            <SearchDiv>
              <LogoDiv>
                <div><LogoButton href="/userMain"><div>Logo</div></LogoButton></div>
              </LogoDiv>
              <NavDiv>
                <div><NavSearch></NavSearch></div>
              </NavDiv>
            </SearchDiv>
            <AdditionDiv>
              <AdditionWrapper>
                <div><AdditionButton href="/signup">sign up</AdditionButton></div>
              </AdditionWrapper>
              <AdditionWrapper>
                <div><AdditionButton href="/login"><div>log in</div></AdditionButton></div>
              </AdditionWrapper>
              <AdditionWrapper>
                <div><AdditionButton href="/trackr"><div>trackr</div></AdditionButton></div>
              </AdditionWrapper>
            </AdditionDiv>
          </InnerDiv>
        </OuterDiv>
        <SearchTag>{this.state.tag}</SearchTag>
      </Fragment>
    );
  }

  getSearchTag() {
    if (this.state.inputValue != '') {
      this.setState({
        tag: "#" + this.state.inputValue,
        inputValue: ''
      })
    } else {
      this.setState({
        tag: ''
      })
    }
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }
}

export default Navigation;