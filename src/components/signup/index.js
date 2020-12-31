import React, { Component } from "react";
import { signupFirebase,registerDB } from "../apiFunctions";

import {
  MainBody,
  LogoDiv,
  Logo,
  Item,
  Button,
  BackgroundDiv,
  ContentDiv,
  Email,
  Pwd,
  SignUpButton,
  UserName,
  ConfirmPwd,
} from "./style.js";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      cnfmpwd: "",
      error: null,
    };
  }

  submit = (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");
    if(this.state.username===""||this.state.email===""||this.state.password===""||this.state.cnfmpwd===""){
      // Not sure which one to use for error management
      // this.setState({error:"Missing fields"})
      // alert('Missing fields.')
      console.log('missing fields')
      return
    }
    else if(this.state.password===this.state.cnfmpwd){
      // this.setState({ error: null });
      const newUser = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
    };
      signupFirebase(newUser).then(res=>{
        registerDB(newUser).then(result=>{
          console.log(result)

          // if(!result.error){
          //   redirect to home feed
          // }
        }).catch(err=>{
          console.log(err)
        })
      }).catch(err=>{
        console.log(err)
      })
      
    }
    else{
      // this.setState({ error: 'Passwords do not match.' });
      // alert('Passwords do not match.')
    }
  };

  handleChange = (e) => {
    const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
    console.log(e.target.value);
    console.log(this.state);
};

  render() {
    return (
      <MainBody>
        <BackgroundDiv>
          <LogoDiv>
            <Logo href="/">Hive</Logo>
          </LogoDiv>
          <ContentDiv>
            <form onSubmit={this.submit}>
              <Item className="title">Welcome</Item>
              <UserName
                className="username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              ></UserName>
              <Email 
                className="email" 
                type="text" 
                name="email" 
                value={this.state.email} 
                onChange={this.handleChange}
              ></Email>
              <Pwd 
                className="pwd" 
                type="password" 
                name="password" 
                value={this.state.password} 
                onChange={this.handleChange}
              ></Pwd>
              <ConfirmPwd
                className="cnfmpwd"
                type="password"
                name="cnfmpwd"
                value={this.state.cnfmpwd}
                onChange={this.handleChange}
              ></ConfirmPwd>
              <Button type="submit">Sign Up</Button>
              <SignUpButton href="/LogIn">
                Have an account? Log in here.{" "}
              </SignUpButton>
            </form>
          </ContentDiv>
        </BackgroundDiv>
      </MainBody>
    );
  }
}
export default Login;
