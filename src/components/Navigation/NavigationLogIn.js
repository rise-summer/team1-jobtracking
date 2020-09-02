import React, { Fragment } from "react";
import {
  NavWrapper,
  SearchWrapper,
  NavSearch,
  LogOut,
  Pic,
  SearchTag,
  Tracker
} from './style'

class NavigationLogIn extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        inputValue:'',
        intro:'',
        tag:''
      }
    }

    render() {
        return (
          <Fragment>
          <NavWrapper>
            <SearchWrapper>
              <a href="/userMain"><span>Logo</span></a><NavSearch value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></NavSearch><button onClick={this.getSearchTag.bind(this)}>Search</button>
            </SearchWrapper>
             <a href="/NavLogOut"><LogOut>Log Out</LogOut></a>
             <a href="/userProfile"><Tracker>tracker</Tracker></a>
          </NavWrapper>
          <SearchTag>
            {this.state.tag}
            <div>{this.state.intro}</div>
          </SearchTag>
          </Fragment>
    );
  }

  getSearchTag(){
    if(this.state.inputValue != ''){
      this.setState({
        intro:'40 posts about the topic',
        tag: "#" + this.state.inputValue,
        inputValue:''
      })
    }else{
      this.setState({
        intro:'',
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
  
  export default NavigationLogIn;