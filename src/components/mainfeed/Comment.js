import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { firestore } from "../../firebaseSetup";
import dots from "../../images/three_vertical_dots.svg";
import editfig from "../../images/edit_icon.svg";
import trashfig from "../../images/trash.svg";
import { AuthenticationContext } from "../../AuthenticationContext";

const Comment = ({ id, date, message, displayName, postid, author }) => {
  const [drop, setDrop] = useState(false);
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );
  const commentRef = firestore.collection(`posts/${postid}/comments`);
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(message);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (drop && ref.current && !ref.current.contains(e.target)) {
        setDrop(false);
      }
    };
    console.log(drop);
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [drop]);
  // function deleteComment(){
  //   commentRef.doc(id).delete()
  // }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setEdit(!edit);
      commentRef.doc(id).update({ message: editedText });
    }
    setDrop(false);
  }

  console.log(id);
  return edit ? (
    <Container>
      <Side>
        <Title>{displayName}</Title>
        <Subtitle>{date.toDate().toLocaleString()}</Subtitle>
      </Side>
      <EditArea
        autoFocus
        onChange={(e) => setEditedText(e.target.value)}
        onKeyPress={(e) => handleKeyDown(e)}
      >
        {message}
      </EditArea>
    </Container>
  ) : (
    <Container>
      <Side>
        <Title>{displayName}</Title>
        <Subtitle>{date.toDate().toLocaleString()}</Subtitle>
      </Side>
      <Message>{message}</Message>
      {authentication["email"] === author && (
        <Options ref={ref}>
          <Dots
            src={dots}
            alt="options"
            onClick={() => setDrop(!drop)}
            onBlur={() => setDrop(false)}
          ></Dots>
          {drop ? (
            <DropDownContent>
              <Link onClick={() => setEdit(true)}>
                <img src={editfig} alt="edit"></img>
              </Link>
              <Link onClick={() => commentRef.doc(id).delete()}>
                {" "}
                <img src={trashfig} alt="trash"></img>
              </Link>
            </DropDownContent>
          ) : (
            ""
          )}
        </Options>
      )}
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  background: #f7f7f7;
  border-radius: 16px;
`;

const Side = styled.div`
  display: inline-block;
  width: 20%;
  font-size: 16px;
  margin: auto 0;
`;

const Message = styled.div`
  display: inline-block;
  width: 70%;
  font-size: 14px;
`;

const Dots = styled.img`
  width: 25px;
  height: 25px;
  &:active {
    transform: scale(0.8);
    transition: 0.1s;
    filter: opacity(30%);
  }
  filter: opacity(50%);
  text-decoration: none;
`;

const Options = styled.div`
  position: relative;
  display: inline-block;
`;

const DropDownContent = styled.div`
  position: absolute;
  background-color: #f1f1f1;
  min-width: 16px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  z-index: 1;
`;

const Link = styled.button`
  color: black;
  padding: 12px 16px;
  display: block;
  border: none;
  &:active {
    transform: scale(0.8);
    transition: 0.1s;
    filter: opacity(30%);
  }
  cursor: pointer;
`;

const EditArea = styled.textarea`
  background: #f7f7f7;
  border: none;
  resize: none;
  width: 70%;
  :sans-serif ;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;
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
