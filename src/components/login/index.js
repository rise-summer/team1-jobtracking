import React, { Component } from "react";
import { auth } from "../../firebaseSetup";
import { login } from "../apiFunctions";
import {logout} from "../apiFunctions";
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

import { useState } from "react";

import {useContext} from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");
    if (email === "" || password === "") {
      // this.setState({error:"Missing fields"})
      // alert('Missing fields.')
      console.log("missing fields");
      return;
    } else {
      login(email, password).then((res) => {
        console.log(res);
        console.log("redirect to home feed");
        // redirect to home feed
        //console.log(auth.currentUser);
        //console.log(auth.currentUser.displayName);
      })
    }
  };

  const signout = () => {
    logout();
  }

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (e.target.name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }

    //this.setState({ [e.target.name]: value });
    console.log(e.target.value);
    //console.log(this.state);
  };

  return (
    <MainBody>
      <BackgroundDiv>
        <LogoDiv>
          <Logo href="/">Hive</Logo>
        </LogoDiv>
        <ContentDiv>
          <form onSubmit={submit}>
            <Item className="title">Welcome Back</Item>
            <Email
              className="email"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            ></Email>
            <Pwd
              className="pwd"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            ></Pwd>
            <Button type="submit">Log In</Button>
            <SignUpButton href="/SignUp">
              Don’t have an account? Sign up here.
            </SignUpButton>
          </form>
          <button onClick={signout}>LOG OUT</button>
        </ContentDiv>
      </BackgroundDiv>
    </MainBody>
  );
};

export default Login;
