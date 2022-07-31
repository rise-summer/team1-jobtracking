import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signupFirebase, registerDB } from "../apiFunctions";
import { auth } from "../../firebaseSetup";
import { useState, useEffect } from "react";
import firebase from "../../firebaseSetup";
import { firestore } from "../../firebaseSetup";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { SubmitButton } from "../../styles/shared";
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
  ContainerDiv,
} from "./style.js";

export default function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(
    props.location.state ? props.location.state.email : ""
  );
  const [password, setPassword] = useState("");
  const [cnfmpwd, setCnfmpwd] = useState("");
  const [error, setError] = useState();
  const usersRef = firestore.collection(`users`);
  const [users] = useCollectionData(usersRef, { idField: "id" });
  console.log(users);
  const usernames = (users || []).map((e) => e.username);
  console.log(usernames);
  const emails = (users || []).map((e) => e.email);
  console.log(emails);

  const submit = async (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");

    if (username === "" || email === "" || password === "" || cnfmpwd === "") {
      setError("All fields are required");
    } else if (usernames.includes(username)) {
      console.log("error");
      setError("Username in use, please choose another");
    } else if (emails.includes(email)) {
      console.log("error");
      setError("Email in use, please choose another");
    } else if (password === cnfmpwd) {
      const newUser = {
        username: username,
        email: email,
        password: password,
      };
      try {
        await signupFirebase(newUser);
      } catch (err) {
        setError(err.message);
        return;
      }
      const db = firebase.firestore();
      const userRef = db
        .collection("users")
        .add({ email: email, uid: auth.currentUser.uid, username: username });
      props.history.push("/login");
    } else {
      // this.setState({ error: 'Passwords do not match.' });
      setError("Password fields must match");
    }
  };

  // swap username and email
  // make sure if its responsiveness
  // caching, limit writes
  //
  return (
    <MainBody>
      <LogoDiv>
        <Logo href="/">Pipeline</Logo>
      </LogoDiv>
      <ContainerDiv>
        <ContentDiv>
          <form onSubmit={submit}>
            <Item className="title">Welcome</Item>
            <UserName
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></UserName>
            <Email
              className="email"
              type="email"
              id="email"
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
            {error && <Error>{error}</Error>}
            <SubmitButton
              primary
              value="Sign Up"
              style={{ margin: "15px 20px 15px 0" }}
            ></SubmitButton>
            <SignUpButton href="/LogIn">
              Have an account? Log in here.{" "}
            </SignUpButton>
          </form>
        </ContentDiv>
      </ContainerDiv>
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

const Error = styled.div`
  font-size: 16px;
  margin: 20px 0 10px 0;
  color: #eb5757;
`;
