import React from "react";
import styled from "styled-components";
import  {auth} from "../../firebaseSetup"

const Comment = ({id, date, message}) => {
  console.log(id)
  return (
    <Container>
      <Side>
        <div>
          <b>{auth.currentUser.displayName}</b>
        </div>
        <div>{date.toDate().toDateString()}</div>
      </Side>
      <Message>{message}</Message>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
`;

const Side = styled.div`
  display: inline-block;
  margin-right: 50px;
  width: 20%;
  font-size: 16px;
`;

const Message = styled.div`
  display: inline-block;
  width: 70%;
  font-size: 14px;
`;
