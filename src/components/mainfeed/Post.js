import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CommentSection from "./CommentSection";
import dots from "../../images/three_vertical_dots.svg";
import editfig from "../../images/edit_icon.svg";
import trashfig from "../../images/trash.svg";
import { firestore } from "../../firebaseSetup";

const Post = ({ id, author, title, time, description }) => {
  const [drop, setDrop] = useState(false);
  const [edit, setEdit] = useState(false);
  const ref = useRef();
  const postRef = firestore.collection(`posts`);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  console.log(id);
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

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setEdit(!edit);
      postRef
        .doc(id)
        .update({ description: editedDescription, title: editedTitle });
    }
    setDrop(false);
  }

  return edit ? (
    <Feed>
      <Content>
        <EditTitle
          onChange={(e) => setEditedTitle(e.target.value)}
          onKeyPress={(e) => handleKeyDown(e)}
          rows="1"
        >
          {title}
        </EditTitle>
        <Date>
          {author} {time.toDate().toLocaleString()}
        </Date>
        <EditArea
          onChange={(e) => setEditedDescription(e.target.value)}
          onKeyPress={(e) => handleKeyDown(e)}
        >
          {description}
        </EditArea>
        {/*<RoleInfo>
          <div>CompanyAndPosition</div>
          <div>Industry</div>
          <div>Status</div>
        </RoleInfo>*/}
        <hr />
      </Content>

      <CommentSection id={id} />
    </Feed>
  ) : (
    <Feed>
      <Content>
        <Title>{title}</Title>
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
              <Link onClick={() => postRef.doc(id).delete()}>
                {" "}
                <img src={trashfig} alt="trash"></img>
              </Link>
            </DropDownContent>
          ) : (
            ""
          )}
        </Options>
        <Date>
          {author} {time.toDate().toLocaleString()}
        </Date>
        <Description>{description}</Description>
        {/*<RoleInfo>
          <div>CompanyAndPosition</div>
          <div>Industry</div>
          <div>Status</div>
        </RoleInfo>*/}
        <hr />
      </Content>

      <CommentSection id={id} />
    </Feed>
  );
};

export default Post;

const Feed = styled.div`
  margin: 10px auto auto auto;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

const Content = styled.div`
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  padding: 15px;
  overflow: hidden;
  //min-width: 70vw;
  min-width: 400px;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  letter-spacing: 0.5px;

  color: #000000;
`;
const Title = styled.div`
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  letter-spacing: 0.5px;
  font-weight: bold;
  color: #000000;
  display: inline-block;
  width: 90%;
`;

const Date = styled.div`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  /* RISE for greyed out text */
  color: #888888;
`;

const Description = styled.div`
  font-size: 16px;
  padding-bottom: 10px;
  line-height: 22px;
  min-height: 80px;
  min-width: 400px;
  letter-spacing: 0.5px;
  color: #000000;
  font-size: 14px;
`;

const RoleInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #888888;
  font-size: 14px;
`;

const Comment = styled.div`
  background: #e8e5e5;
  box-shadow: 0px 4px 2px rgba(189, 189, 189, 0.25);
  border-radius: 10px;
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
  display: inline-block;
  margin-top: 10px;
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
  border: none;
  resize: none;
  width: 70%;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;
`;

const EditTitle = styled.textarea`
  border: none;
  resize: none;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  letter-spacing: 0.5px;
  font-weight: bold;
  color: #000000;
  display: inline-block;
  width: 90%;
  font-family: sans-serif;
`;
