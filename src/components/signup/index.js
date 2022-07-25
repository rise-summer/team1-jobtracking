import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signupFirebase, registerDB } from "../apiFunctions";
import { auth } from "../../firebaseSetup";
import { useState, useEffect } from "react";
import firebase from "../../firebaseSetup";
import {firestore} from "../../firebaseSetup";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
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
  ContainerDiv,
} from "./style.js";

export default function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfmpwd, setCnfmpwd] = useState("");
  const [error, setError] = useState({
    header: "",
    username: "",
    email: "",
    password: "",
    cnfmpwd: "",
  });
  const usersRef = firestore.collection(`users`)
  const [users] = useCollectionData(usersRef, {idField: 'id'})
  console.log(users)
  const usernames = (users || []).map(e => e.username)
  console.log(usernames)
  const emails = (users || []).map(e => e.email)
  console.log(emails)

  const submit = async (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");
    
    if (username === "" || email === "" || password === "" || cnfmpwd === "") {
      setError({
        header: "",
        username: `${!username ? "Please enter a username" : ""}`,
        email: `${!email ? "Please enter an email address" : ""}`,
        password: `${!password ? "Please enter a password" : ""}`,
        cnfmpwd: `${!cnfmpwd ? "Please enter a password" : ""}`,
      });
    } else if (usernames.includes(username)) {
      console.log("error")
      setError({
        header: "Username in use, please choose another",
        username: "",
        email: "",
        password: "",
        cnfmpwd: "",
      });

    }else if (emails.includes(email)) {
      console.log("error")
      setError({
        header: "Username in use, please choose another",
        username: "",
        email: "",
        password: "",
        cnfmpwd: "",
      });

    }
    else if (password === cnfmpwd) {
      const newUser = {
        username: username,
        email: email,
        password: password,
      };
      try {
        await signupFirebase(newUser);
      } catch (err) {
        setError({
          header: err.message,
          username: "",
          email: "",
          password: "",
          cnfmpwd: "",
        });
        return;
      }
      const db = firebase.firestore();
      const userRef = db
        .collection("users")
        .add({ email: email, uid: auth.currentUser.uid, username: username });
      props.history.push("/login");
    } else {
      // this.setState({ error: 'Passwords do not match.' });
      setError({
        header: "",
        username: "",
        password: "",
        cnfmpwd: "Passwords do not match",
      });
    }
  };

  return (
    <MainBody>
      <BackgroundDiv>
        <LogoDiv>
          <HomeLink to="/">Pipeline</HomeLink>
        </LogoDiv>
        <ContainerDiv>
          <ContentDiv>
            {error.header && <HeaderError>{error.header}</HeaderError>}
            <form onSubmit={submit}>
              <Item className="title">Welcome</Item>
              <UserName
                className="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></UserName>
              {error.username && <InlineError>{error.username}</InlineError>}
              <Email
                className="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Email>
              {error.email && <InlineError>{error.email}</InlineError>}
              <Pwd
                className="pwd"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Pwd>
              {error.password && <InlineError>{error.password}</InlineError>}
              <ConfirmPwd
                className="cnfmpwd"
                type="password"
                name="cnfmpwd"
                value={cnfmpwd}
                onChange={(e) => setCnfmpwd(e.target.value)}
              ></ConfirmPwd>
              {error.cnfmpwd && <InlineError>{error.cnfmpwd}</InlineError>}
              <Button type="submit">Sign Up</Button>
              <SignUpButton href="/LogIn">
                Have an account? Log in here.{" "}
              </SignUpButton>
            </form>
          </ContentDiv>
        </ContainerDiv>
      </BackgroundDiv>
    </MainBody>
  );
}

const HomeLink = styled(Link)`
  font-family: "Open Sans", Sans-Serif;
  color: #175596;
  text-decoration: none;
  font-weight: bold;
  font-size: 35px;
  cursor: pointer;
  &:hover {
    color: #175596;
  }
`;

const HeaderError = styled.div`
  color: red;
  background-color: pink;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  margin-bottom: 5px;
`;
const InlineError = styled.div`
  font-size: 20px;
  padding-top: 5px;
  color: red;
`;
