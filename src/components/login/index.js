import React, { Component } from "react";
import {
  MainBody,
  Item,
  Button,
  ContentDiv,
  BackgroundDiv,
  Email,
  Pwd,
  SignUpButton,
} from "./style";

class Login extends Component {
  submit = (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");
  };
  render() {
    return (
      <MainBody>
        <BackgroundDiv>
          <ContentDiv>
            <form onSubmit={this.submit}>
              <Item className="title">Welcome Back</Item>
              <Email
                className="email"
                type="text"
                name="email"
                onChange={this.handleChange}
              ></Email>
              <Pwd className="pwd" type="password" name="password"></Pwd>
              <Button type="submit">Log In</Button>
              <SignUpButton href="/SignUp">
                Don’t have an account? Sign up here.
              </SignUpButton>
            </form>
          </ContentDiv>
        </BackgroundDiv>
      </MainBody>
    );
  }
}
export default Login;
