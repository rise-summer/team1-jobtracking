import React, { Component } from "react";
import {auth} from "../../firebaseSetup";
import {login} from "../apiFunctions"
import {
  MainBody,
  LogoDiv,
  Logo,
  Item,
  Button,
  ContentDiv,
  BackgroundDiv,
  Email,
  Pwd,
  SignUpButton,
} from "./style";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }
  submit = (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");
    if(this.state.email===""||this.state.password===""){
      // this.setState({error:"Missing fields"})
      // alert('Missing fields.')
      console.log('missing fields')
      return
    }
    else{
      login(this.state.email,this.state.password).then(res=>{
        console.log(res)
        // redirect to home feed
        console.log(auth.currentUser)
      })
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
              <Item className="title">Welcome Back</Item>
              <Email
                className="email"
                type="text"
                name="email"
                value={this.state.email} 
                onChange={this.handleChange}
              ></Email>
              <Pwd className="pwd" 
                type="password" 
                name="password"
                value={this.state.password} 
                onChange={this.handleChange}
              ></Pwd>
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
