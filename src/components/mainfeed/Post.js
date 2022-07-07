import React, { useState, useRef, useEffect, useContext } from "react";
import { AuthenticationContext } from "../../AuthenticationContext";
import styled from "styled-components";
import CommentSection from "./CommentSection";
import dots from "../../images/three_vertical_dots.svg";
import editfig from "../../images/edit_icon.svg";
import trashfig from "../../images/trash.svg";
import { firestore } from "../../firebaseSetup";
import firebase from "../../firebaseSetup";
import { slice } from "cheerio/lib/api/traversing";
import parse from "html-react-parser";
const Post = ({
  id,
  author,
  displayName,
  title,
  time,
  description,
  toBold,
}) => {
  const [drop, setDrop] = useState(false);
  const [edit, setEdit] = useState(false);
  const ref = useRef();
  const contentRef = useRef();
  const postRef = firestore.collection(`posts`);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [error, setError] = useState({ title: "", description: "" });
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );

  console.log(id);
  console.log(author, displayName, title, time, description);
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

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        edit &&
        contentRef.current &&
        !contentRef.current.contains(e.target)
      ) {
        setEdit(false);
        setError({ title: "", description: "" });
        setEditedDescription(description);
        setEditedTitle(title);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [edit]);
  useEffect(() => {
    console.log(editedDescription);
  }, [editedDescription]);
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (editedDescription && editedTitle) {
        setEdit(!edit);
        postRef.doc(id).update({
          description: editedDescription,
          title: editedTitle,
          time: firebase.firestore.Timestamp.now(),
        });
      } else {
        setError({
          title: editedTitle ? "" : "Title cannot be empty",
          description: editedDescription ? "" : "Description cannot be empty",
        });
      }
    }
    setDrop(false);
  }

  const boldDescription = () => {
    if (!toBold) return description;
    let copy = (" " + description).slice(1);
    const substrings = toBold
      .replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "")
      .split(" ")
      .filter((word) => word !== "");
    console.log(substrings);
    for (let i = 0; i < substrings.length; i++) {
      console.log(substrings[i]);
      let reg = RegExp(`\\b${substrings[i]}\\b`, "gmi");
      console.log(reg);
      copy = copy.replace(reg, `<b>${substrings[i]}</b>`);
      console.log(copy);
    }
    console.log(copy, toBold);
    return copy;
  };
  return edit ? (
    <Feed>
      <Content ref={contentRef}>
        <EditTitle
          onChange={(e) => setEditedTitle(e.target.value)}
          onKeyPress={(e) => handleKeyDown(e)}
          rows="1"
        >
          {title}
        </EditTitle>
        {error.title && <p style={{ color: "red" }}>{error.title}</p>}
        <Date>
          {displayName} {time.toDate().toLocaleString()}
        </Date>
        <EditArea
          onChange={(e) => setEditedDescription(e.target.value)}
          onKeyPress={(e) => handleKeyDown(e)}
        >
          {description}
        </EditArea>
        {error.description && (
          <p style={{ color: "red" }}>{error.description}</p>
        )}
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
                <Link onClick={() => postRef.doc(id).delete()}>
                  {" "}
                  <img src={trashfig} alt="trash"></img>
                </Link>
              </DropDownContent>
            ) : (
              ""
            )}
          </Options>
        )}
        <Date>
          {displayName} {time.toDate().toLocaleString()}
        </Date>
        <Description>{parse(boldDescription())}</Description>
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
  : "Open Sans", sans-serif;
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
  min-width: 16px;
  background-color: #ffffff !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  z-index: 1;
`;

const Link = styled.button`
  color: black;
  padding: 10px 16px;
  display: block;
  border: none;
  background-color: inherit;
  border-radius: 10px;
  &:active {
    transform: scale(0.8);
    transition: 0.1s;
    filter: opacity(30%);
  }
  cursor: pointer;
  font-weight: 800;
`;

const EditArea = styled.textarea`
  border: none;
  resize: none;
  width: 70%;
  font-family: "Open Sans", sans-serif;
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
  font-family: "Open Sans", sans-serif;
`;
