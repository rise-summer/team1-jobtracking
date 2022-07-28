import axios from "axios";
import moment from "moment";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SubmitButton, Button } from "../../styles/shared";
import { AuthenticationContext } from "../../AuthenticationContext";
import { auth, firestore } from "../../firebaseSetup";
import firebase from "../../firebaseSetup";
import "firebase/firestore";

const AddPost = ({ toggleShowPost, application }) => {
  console.log(application);
  const status = application ? application.app_status : "";
  const company = application ? application.company : "";
  const position = application ? application.position : "";
  const getVerb = (status) => {
    if (status === "0") {
      return "am interested in";
    }
    if (status === "1") {
      return "applied for";
    }
    if (status === "2") {
      return "am interviewing for";
    }
    if (status === "3") {
      return "got an offer for";
    }
    return "am interested in";
  };
  const [title, setTitle] = useState(
    application
      ? `I ${getVerb(status)} a ${
          position ? position : "new"
        } position at ${company}!`
      : ""
  );
  const [description, setDescription] = useState("");
  const currentUser = auth.currentUser;
  const postRef = firestore.collection(`posts`);
  const [error, setError] = useState({ title: "", description: "" });
  const handleCancel = () => {
    toggleShowPost(false);
  };
  const submitPost = async (e) => {
    e.preventDefault();
    if (title && description) {
      console.log(firebase.firestore.Timestamp.now());
      postRef.add({
        uid: currentUser.uid,
        author: currentUser.email,
        displayName: currentUser.displayName,
        title: title,
        description: description,
        time: firebase.firestore.Timestamp.now(),
        displayName: auth.currentUser.displayName,
      });
      toggleShowPost(false);
    } else {
      setError({
        title: title ? "" : "Please enter a title",
        description: description ? "" : "Please enter a description",
      });
    }
  };

  return (
    <Container>
      <form onSubmit={submitPost}>
        <Title
          value={title}
          type="text"
          placeholder="Title of Post"
          onChange={(e) => setTitle(e.target.value)}
        />
        {error.title && <p style={{ color: "red" }}>{error.title}</p>}
        <hr />
        <Description
          value={description}
          placeholder="Write a description here"
          onChange={(e) => setDescription(e.target.value)}
        ></Description>
        {error.description && (
          <p style={{ color: "red" }}>{error.description}</p>
        )}
        {/* <Input type="text" placeholder="Position" />
        <Input type="text" placeholder="Industry" />
        <Input type="text" placeholder="Status" /> */}
        <SubmitContainer>
          <Button secondary onClick={handleCancel}>
            Cancel
          </Button>
          <SubmitButton
            primary
            value="Post"
            style={{ marginLeft: "6px" }}
          ></SubmitButton>
        </SubmitContainer>
      </form>
    </Container>
  );
};

export default AddPost;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  *:focus {
    outline: none;
  }
`;

const Title = styled.input`
  border: none;
  display: inline-block;
  font-size: 2vh;
  margin-left: auto;
  margin-right: auto;
  width: 97%;
`;

const CloseButton = styled.button`
  display: inline-block;
`;

const Description = styled.textarea`
  border: none;
  display: block;
  font-size: 2vh;
  margin-left: auto;
  margin-right: auto;
  min-height: 7vh;
  resize: none;
  width: 100%;
  font-family: "Open Sans", sans-serif;
`;

const Input = styled.input`
  border: none;
  font-size: 20px;
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
// Modified NewPostButton from ./style.js
const Submit = styled.button`
  background: #175596;
  border-radius: 5px;
  min-height: 30px;
  width: 60px;
  text-align: center;
  margin-left: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
