import React, { useContext, useState, useEffect } from "react";
import ResetModal from "./resetModal";
import { auth } from "../../firebaseSetup";
import { login } from "../apiFunctions";
import { resetPasswordEmail } from "../apiFunctions";
import {
  MainBody,
  LogoDiv,
  Item,
  Button,
  ContainerDiv,
  ContentDiv,
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
  // const log_in = useSelector((state) => state.isLogged);
  // console.log(log_in);
  // const dispatch = useDispatch();
  const { authentication, setAuthentication, setIsLoggedIn } = useContext(
    AuthenticationContext
  );
  console.log(authentication);

  const [email, setEmail] = useState("");
  const [passwordModal, setPasswordModal] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ header: "", email: "", password: "" });
  const location = useLocation();
  const { state } = location;
  useEffect(() => {
    console.log(state);
    if (state && state.from) {
      setError({ header: "Please log-in", email: "", password: "" });
    }
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");
    if (email === "" || password === "") {
      setError({
        header: "",
        email: `${email ? "" : "Please enter an email"}`,
        password: `${password ? "" : "Please enter a password"}`,
      });
      return;
    } else {
      login(email, password)
        .then(() => {
          setAuthentication(auth.currentUser);
          localStorage.setItem("loggedIn", JSON.stringify(true));
          setIsLoggedIn(true);
          props.history.push(state && state.from ? state.from : "/mainfeed");
        })
        .catch((err) =>
          setError({ header: err.message, email: "", password: "" })
        );
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
        setError({ header: err.message, email: "", password: "" });
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
          <HomeLink to="/">Pipeline</HomeLink>
        </LogoDiv>
        <ContainerDiv>
          <ContentDiv>
            <form onSubmit={submit}>
              {error.header && <HeaderError>{error.header}</HeaderError>}
              <Item className="title">Welcome Back</Item>
              <Email
                className="email"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
              ></Email>
              {error.email && <InlineError>{error.email}</InlineError>}
              <Pwd
                className="pwd"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              ></Pwd>
              {error.password && <InlineError>{error.password}</InlineError>}
              <Button type="submit">Log In</Button>
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
