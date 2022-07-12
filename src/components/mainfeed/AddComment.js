import moment from "moment";
import React, { useContext } from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import { AuthenticationContext } from "../../AuthenticationContext";
import { auth, firestore } from "../../firebaseSetup";
import firebase from "../../firebaseSetup";

const AddComment = ({ id, setComments }) => {
  const commentRef = firestore.collection(`posts/${id}/comments`);

  const submitComment = (e) => {
    if (e.keyCode == 13) {
      // WATCH OUT FOR EVENT POOLING
      const message = e.target.value;
      e.target.value = "";
      commentRef.add({
        postid: id,
        message: message,
        date: firebase.firestore.Timestamp.now(),
        displayName: auth.currentUser.displayName,
        author: auth.currentUser.email,
      });
    }
  };

  return (
    <Container>
      <Side>
        <b>{auth.currentUser.displayName}</b>
      </Side>
      <Input
        className="message"
        placeholder="Add a comment here."
        onKeyDown={submitComment}
      />
    </Container>
  );
};

export default AddComment;

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

const Side = styled.div`
  display: inline-block;
  margin-right: 50px;
  width: 20%;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  display: inline-block;
  font-size: 14px;
  outline: none;
  width: 70%;
`;
