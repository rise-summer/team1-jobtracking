import React, { Component } from "react";
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
  submit = (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");
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
              ></UserName>
              <Email className="email" type="text" name="email"></Email>
              <Pwd className="pwd" type="password" name="pwd"></Pwd>
              <ConfirmPwd
                className="cnfmpwd"
                type="password"
                name="cnfmpwd"
              ></ConfirmPwd>
              <Button type="submit">Sign Up</Button>
              <SignUpButton href="/LogIn">
                have an account? sign in here.{" "}
              </SignUpButton>
            </form>
          </ContentDiv>
        </BackgroundDiv>
      </MainBody>
    );
  }
}
export default Login;
