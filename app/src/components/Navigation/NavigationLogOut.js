import React, { Fragment } from "react";
import {
  NavWrapper,
  SearchWrapper,
  NavSearch,
  Button,
  Addition,
  Pic,
  SearchTag
} from './style'

class NavigationLogOut extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      tag:''
    }
  }

    render() {
        return (
          <Fragment>
          <NavWrapper>
            <SearchWrapper>
            <a href="/userMain"><span>Logo</span></a><NavSearch></NavSearch>
            </SearchWrapper>
            <Addition>
                <a href="/SignUp"> <Button>Sign Up</Button></a>
                <a href="/Login"><Button>Log In</Button></a>
            </Addition>
          </NavWrapper>
          <SearchTag>{this.state.tag}</SearchTag>
          </Fragment>
    );
  }

  getSearchTag(){
    if(this.state.inputValue != ''){
      this.setState({
        tag: "#" + this.state.inputValue,
        inputValue:''
      })
    }else{
      this.setState({
        tag:''
      })
    }
  }
  
  handleInputChange(event){
    this.setState({
      inputValue:event.target.value
    })
  }
}
  
  export default NavigationLogOut;