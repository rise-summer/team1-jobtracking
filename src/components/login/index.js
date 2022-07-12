import React, { useContext, useState } from "react";
import { auth } from "../../firebaseSetup";
import { login } from "../apiFunctions";
import {
  MainBody,
  LogoDiv,
  Item,
  Button,
  ContentDiv,
  HomeLink,
  Email,
  Pwd,
  SignUpButton,
} from "./style";

import { useSelector, useDispatch } from "react-redux";

import { AuthenticationContext } from "../../AuthenticationContext";
import firebase from "../../firebaseSetup";

export default function Login(props) {
  // const log_in = useSelector((state) => state.isLogged);
  // console.log(log_in);
  // const dispatch = useDispatch();
  const [authentication, setAuthentication] = useContext(AuthenticationContext);
  console.log(authentication);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");
    if (email === "" || password === "") {
      // this.setState({error:"Missing fields"})
      console.log("missing fields");
      return;
    } else {
      firebase
        .auth()
        .setPersistence("session")
        .then(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
              console.log(res);
              console.log("redirect to home feed");

              setAuthentication(auth.currentUser);
              console.log(auth.currentUser.getIdToken());
              console.log(auth.currentUser);
              props.history.push("/mainfeed");
            });
        });
    }
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (e.target.name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <MainBody>
      <div>
        <LogoDiv>
          <HomeLink to="/">Pipeline</HomeLink>
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
        </ContentDiv>
      </div>
    </MainBody>
  );
}
