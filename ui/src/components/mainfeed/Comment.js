import React from "react";
import styled from "styled-components";

const Comment = (props) => {
  return (
    <Container>
      <Side>
        <div>
          <b>{props.name}</b>
        </div>
        <div>{props.date}</div>
      </Side>
      <Message>{props.message}</Message>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
`;

const Side = styled.div`
  display: inline-block;
  margin-right: 50px;
  width: 20%;
`;

const Message = styled.div`
  display: inline-block;
  width: 70%;
`;
