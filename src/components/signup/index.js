import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signupFirebase, registerDB } from "../apiFunctions";
import { auth } from "../../firebaseSetup";
import { useState, useEffect } from "react";

import {
  MainBody,
  LogoDiv,
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

export default function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfmpwd, setCnfmpwd] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");
    if (username === "" || email === "" || password === "" || cnfmpwd === "") {
      // Not sure which one to use for error management
      // this.setState({error:"Missing fields"})
      // alert('Missing fields.')
      console.log("missing fields");
      return;
    } else if (password === cnfmpwd) {
      // this.setState({ error: null });
      const newUser = {
        username: username,
        email: email,
        password: password,
      };
      signupFirebase(newUser)
        .then((res) => {
          auth.currentUser.getIdToken().then((token) => {
            console.log(token);
            registerDB(newUser, token)
              .then((result) => {
                console.log(result);

                // if(!result.error){
                //   redirect to home feed
                // }
              })
              .catch((err) => {
                console.log(err);
              });
          });
        })
        .catch((err) => {
          console.log(err);
        });
        alert("Success!")
        props.history.push("/login")
    } else {
      // this.setState({ error: 'Passwords do not match.' });
      alert('Passwords do not match.')
    }
  };


  return (
    <MainBody>
      <BackgroundDiv>
        <LogoDiv>
          <HomeLink to="/">Hive</HomeLink>
        </LogoDiv>
        <ContentDiv>
          <form onSubmit={submit}>
            <Item className="title">Welcome</Item>
            <UserName
              className="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></UserName>
            <Email
              className="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Email>
            <Pwd
              className="pwd"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Pwd>
            <ConfirmPwd
              className="cnfmpwd"
              type="password"
              name="cnfmpwd"
              value={cnfmpwd}
              onChange={(e) => setCnfmpwd(e.target.value)}
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


const HomeLink = styled(Link)`
  font-family: Sans-Serif;
  color: #175596;
  text-decoration: none;
  font-weight: bold;
  font-size: 35px;
  cursor: pointer;
  &:hover {
    color: #175596;
  }
`;
