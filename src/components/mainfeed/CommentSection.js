import React, { useState } from "react";
import styled from "styled-components";
import AddComment from "./AddComment";
import Comment from "./Comment";
import moment from "moment";

const CommentSection = ({id}) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Lauren",
      message: "What???",
      date: "Sunday",
    },
  ]);

  const test = [
    {
      name: "Lauren",
      date: moment().format("dddd"),
      message: "hi",
    },
    {
      name: "ben",
      date: "tuesday",
      message: "ayyyyyyyyyyyyyyy",
    },
  ];

  return (
    <Container>
      {comments.filter(comment => comment.id === id).map((comment) => (
        <Comment
          name={comment.name}
          message={comment.message}
          date={comment.date}
        />
      ))}

      <AddComment id={id} setComments={setComments} name={"Myself"} />
    </Container>
  );
};

export default CommentSection;

const Container = styled.div`
  background-color: lightgray;
  padding: 10px;
`;
