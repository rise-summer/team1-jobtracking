import React, { useState } from "react";
import styled from "styled-components";

const AddPost = ({ setPosts }) => {
  const [description, setDescription] = useState("");

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const submitPost = (e) => {
    e.preventDefault();
    setPosts((prevPosts) => [{ description }, ...prevPosts]);
  };

  return (
    <Container>
      <form onSubmit={submitPost}>
        <Title type="text" placeholder="Title of Post" />
        <hr />
        <Description
          placeholder="Write a description here."
          onChange={updateDescription}
        ></Description>
        <input type="text" placeholder="Position" />
        <input type="text" placeholder="Industry" />
        <input type="text" placeholder="Status" />
        <Submit>Post</Submit>
      </form>
    </Container>
  );
};

export default AddPost;

const Container = styled.div`
  background-color: white;
  border-radius: 1em;
  padding: 1em;
  *:focus {
    outline: none;
  }
`;

const Title = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const Description = styled.textarea`
  border: none;
  display: block;
  font-size: 2vh;
  margin-left: auto;
  margin-right: auto;
  min-height: 7vh;
  resize: none;
  width: 100%;
`;

// Modified NewPostButton from ./style.js
const Submit = styled.button`
  background: #175596;
  border-radius: 100px;
  min-height: 30px;
  min-width: 70px;
  margin-left: auto;
  font-family: "", "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
