import React, { useState, useRef, useEffect, useContext } from "react";
import { AuthenticationContext } from "../../AuthenticationContext";
import styled from "styled-components";
import CommentSection from "./CommentSection";
import { standardBoxShadow } from "../../styles/shared";
import dots from "../../images/three_vertical_dots.svg";
import editfig from "../../images/edit_icon.svg";
import trashfig from "../../images/trash.svg";
import { firestore } from "../../firebaseSetup";
import firebase from "../../firebaseSetup";
import DropDownContainer from "./DropDownContainer";
import { slice } from "cheerio/lib/api/traversing";
import parse from "html-react-parser";
import { Dropdown } from "antd";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
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
  const [deleteState, setDeleteState] = useState(false);
  const ref = useRef();
  const contentRef = useRef();
  const postRef = firestore.collection(`posts`);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [error, setError] = useState({ title: "", description: "" });
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );
  const canEditPost = !edit && authentication["email"] === author;
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (drop && ref.current && !ref.current.contains(e.target)) {
        setDrop(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [drop]);

  const handlePostUpdate = (newTitle, newDescription) => {
    postRef.doc(id).update({
      description: newDescription,
      title: newTitle,
      time: firebase.firestore.Timestamp.now(),
    });
    setEdit(false);
    setDrop(false);
  };

  const boldDescription = () => {
    if (!toBold) return description;
    let copy = (" " + description).slice(1);
    const substrings = toBold
      .replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "")
      .split(" ")
      .filter((word) => word !== "");
    console.log(substrings);
    for (let i = 0; i < substrings.length; i++) {
      let reg = RegExp(`\\b${substrings[i]}\\b`, "gmi");
      copy = copy.replace(reg, `<b>${substrings[i]}</b>`);
    }
    console.log(copy, toBold);
    return copy;
  };
  const handleDrop = () => {
    setDrop(!drop);
  };
  const handleEdit = () => {
    setEdit(!edit);
    setDrop(false);
  };
  const handlePostDelete = () => {
    console.log("A");
    postRef.doc(id).delete();
    setDeleteState(false);
  };
  const handleDelete = () => {
    setDeleteState(!deleteState);
    setDrop(false);
  };
  return (
    <>
      {edit && (
        <EditPost
          handlePostUpdate={handlePostUpdate}
          title={title}
          description={description}
          handleEdit={handleEdit}
        />
      )}
      {deleteState && (
        <DeletePost
          handlePostDelete={handlePostDelete}
          handleDelete={handleDelete}
        />
      )}
      <Feed>
        <Content ref={contentRef}>
          <PostHeader>
            <Title>{title}</Title>

            {canEditPost && (
              <DropDownContainer
                drop={drop}
                handleDrop={handleDrop}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                type="post"
              />
            )}
          </PostHeader>
          <Date>
            {time.toDate().toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "numeric",
            })}
            {", "}
            {time.toDate().toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Date>

          <Description>{parse(boldDescription())}</Description>

          <hr />
        </Content>
        <CommentSection id={id} />
      </Feed>
    </>
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
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  ${standardBoxShadow}
  //margin-bottom:16px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.div`
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  padding: 15px;

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
  letter-spacing: 0.5px;
  font-weight: bold;
  color: #000000;
  display: inline-block;
  flex: 1;
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

const EditArea = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;
`;

const EditTitle = styled.textarea`
  border: none;
  flex: 1;
  resize: none;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: #000000;
  display: inline-block;
  width: 90%;
  font-family: "Open Sans", sans-serif;
`;
