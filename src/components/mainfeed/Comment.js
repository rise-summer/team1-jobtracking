import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import DropDownContainer from "./DropDownContainer";
import { firestore } from "../../firebaseSetup";

import { AuthenticationContext } from "../../AuthenticationContext";

const Comment = ({ id, date, message, displayName, postid, author }) => {
  const [drop, setDrop] = useState(false);
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );
  const commentRef = firestore.collection(`posts/${postid}/comments`);
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(message);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      console.log(editedText);
      setEdit(!edit);
      commentRef.doc(id).update({ message: editedText });
    }
    setDrop(false);
  }
  const handleEdit = () => {
    setEdit(true);
  };
  const handleDelete = () => {
    commentRef.doc(id).delete();
  };
  const handleDrop = () => {
    setDrop(!drop);
  };

  const canEditComment = !edit && authentication["email"] === author;
  return (
    <Container edit={edit}>
      <Side>
        <Title>{displayName}</Title>
        <Subtitle>
          {date.toDate().toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "numeric",
          })}
          {", "}
          {date.toDate().toLocaleDateString(undefined, {
            weekday: "long",
          })}
        </Subtitle>
      </Side>
      {edit ? (
        <EditArea
          className="comment"
          autoFocus
          contentEditable
          onChange={(e) => setEditedText(e.target.value)}
          onKeyPress={(e) => handleKeyDown(e)}
        >
          {message}
        </EditArea>
      ) : (
        <Message>{message}</Message>
      )}
      {canEditComment && (
        <DropDownContainer
          drop={drop}
          handleDrop={handleDrop}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          type="comment"
        />
      )}
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${(props) => props.edit && "gap: 20px;"}
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  background: #f7f7f7;
  border-radius: 16px;
`;

const Side = styled.div`
  flex: 1;
  font-size: 16px;
  word-break: break-all;
`;

const Message = styled.div`
  flex: 2;
  display: inline-block;
  font-size: 14px;
`;

const EditArea = styled.textarea`
  background: #f7f7f7;
  border: none;
  width: 70%;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 1.1px;
  font-weight: bold;
`;

const Subtitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: #333333;
`;
