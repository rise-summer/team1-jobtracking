import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import ResetModal from "./resetModal";
import { auth } from "../../firebaseSetup";
import { login } from "../apiFunctions";
import { resetPasswordEmail, signInWithGoogle } from "../apiFunctions";
import { GoogleLogin } from "@react-oauth/google";
import { SubmitButton } from "../../styles/shared";
import {
  MainBody,
  LogoDiv,
  Item,
  Button,
  ContainerDiv,
  ContentDiv,
  Logo,
  HomeLink,
  Email,
  Pwd,
  SignUpButton,
  InlineError,
  HeaderError,
} from "./style";

import { AuthenticationContext } from "../../AuthenticationContext";
import { useLocation } from "react-router-dom";

export default function Login(props) {
  const { authentication, setAuthentication, setIsLoggedIn } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  const [passwordModal, setPasswordModal] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const location = useLocation();
  const { state } = location;
  useEffect(() => {
    if (state && state.from) {
      setError("Please login.");
    }
  }, []);
  const submit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("All fields are required");
      return;
    } else {
      login(email, password)
        .then(() => {
          setAuthentication(auth.currentUser);
          localStorage.setItem("loggedIn", JSON.stringify(true));
          setIsLoggedIn(true);
          props.history.push(state && state.from ? state.from : "/mainfeed");
        })
        .catch((err) => setError(err.message));
      //
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
  const handlePasswordModal = () => {
    console.log(passwordModal);
    setPasswordModal(true);
  };
  const handleReset = (e) => {
    resetPasswordEmail(e)
      .then(() => {
        setResetPassword(true);
      })
      .catch((err) => {
        setError(err.message);
        setPasswordModal(false);
      });
  };
  return (
    <MainBody>
      {passwordModal && (
        <ResetModal
          isModal={passwordModal}
          setPasswordModal={setPasswordModal}
          resetPassword={handleReset}
        />
      )}
      <div>
        <LogoDiv>
          <Logo href="/">Pipeline</Logo>
        </LogoDiv>
        <ContainerDiv>
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
              {error ? <Error>{error}</Error> : <br />}
              <SubmitButton
                primary
                value="Log In"
                style={{ margin: "15px 20px 15px 0" }}
              ></SubmitButton>
              <SignUpButton href="/SignUp">
                Don’t have an account? Sign up here.
              </SignUpButton>
              <br />
              <SignUpButton
                style={{ cursor: "pointer" }}
                onClick={handlePasswordModal}
              >
                {resetPassword
                  ? "Password has been reset"
                  : "Click here to send a password reset email."}
              </SignUpButton>
            </form>
          </ContentDiv>
        </ContainerDiv>
      </div>
    </MainBody>
  );
}
const Error = styled.div`
  font-size: 16px;
  margin: 20px 0 10px 0;
  color: #eb5757;
`;
