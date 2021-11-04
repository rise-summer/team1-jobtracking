import React, { useState } from "react";
import styled from "styled-components";
import AddComment from "./AddComment";
import Comment from "./Comment";
import moment from "moment";
import { auth, firestore } from "../../firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";

const CommentSection = ({ id }) => {
  // const [comments, setComments] = useState([
  //   {
  //     id: 1,
  //     name: "Lauren",
  //     date: "01/04/21",
  //     message: "Thanks! I will let Joe know.",
  //   },
  // ]);
  const commentRef = firestore.collection(`posts/${id}/comments`);
  const [comments] = useCollectionData(commentRef, { idField: "id" });
  console.log(comments);
  console.log(id);

  return (
    <Container>
      {comments && console.log(comments.map((comment) => comment))}
      {comments &&
        comments.map((comment) => <Comment key={comment.id} {...comment} />)}

      <AddComment id={id} />
    </Container>
  );
};

export default CommentSection;

const Container = styled.div`
  background-color: lightgray;
  padding: 5px;
  border-radius: 0px 0px 10px 10px;
`;
