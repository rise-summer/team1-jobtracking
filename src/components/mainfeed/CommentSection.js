import React, { useState } from "react";
import styled from "styled-components";
import AddComment from "./AddComment";
import Comment from "./Comment";
import moment from "moment";

const CommentSection = ({ id }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Lauren",
      date: "01/04/21",
      message: "Thanks! I will let Joe know.",
    },
  ]);
  
  return (
    <Container>
      {comments
        .filter((comment) => comment.id === id)
        .map((comment) => (
          <Comment
            name={comment.name}
            message={comment.message}
            date={comment.date}
          />
        ))}

      <AddComment id={id} setComments={setComments} />
    </Container>
  );
};

export default CommentSection;

const Container = styled.div`
  background-color: lightgray;
  padding: 5px;
  border-radius: 0px 0px 10px 10px;
  
`;
