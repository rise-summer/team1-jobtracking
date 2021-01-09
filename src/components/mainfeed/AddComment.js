import React, { useState } from "react";
import styled from "styled-components";

const AddComment = ({ id, setComments, name }) => {
  const submitComment = (e) => {
    if (e.keyCode == 13) {
      // WATCH OUT FOR EVENT POOLING
			const message = e.target.value;
			e.target.value = ''
      setComments((prevComments) => [
        ...prevComments,
        { id, name, message, date: "Sunday" },
      ]);
    }
  };

  return (
    <Container>
      <Side>
        <b>{name}</b>
      </Side>
      <Input
        className="message"
        placeholder="Add a comment here."
        onKeyDown={submitComment}
      />
    </Container>
  );
};

export default AddComment;

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

const Input = styled.input`
	background: transparent;
  border: none;	
	display: inline-block;
	font-size: 20px;
	outline: none;
	width: 70%;
`;