import React from "react";
import { useState } from "react";
import { ContainerDiv, ContentDiv, Item, Email, Button } from "../style";
export default function ResetModal(props) {
  const [modal, setModal] = useState(props.isModal);
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e);
  };
  const handleOverlayClick = (e) => {
    console.log(e.currentTarget, e.target);
    if (e.target.id === "overlay") {
      props.setPasswordModal(false);
    }
  };
  const resetPassword = () => {
    props.resetPassword(email);
    props.setPasswordModal(false);
  };
  if (modal) {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 5,
        }}
        onClick={(e) => handleOverlayClick(e)}
      >
        <ContainerDiv
          id="overlay"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ContentDiv>
            <Item style={{ padding: 0 }} className="title">
              Password Reset
            </Item>
            <p style={{ fontSize: "20px" }}>
              Please enter the email address used to register your account.
            </p>
            <Email
              style={{ margin: "0 0 20px 0" }}
              className="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => handleChange(e.target.value)}
            ></Email>
            <Button style={{ margin: "10px 0 0 0" }} onClick={resetPassword}>
              Reset Password
            </Button>
          </ContentDiv>
        </ContainerDiv>
      </div>
    );
  } else {
    return null;
  }
}
