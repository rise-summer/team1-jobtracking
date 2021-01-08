import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import Card from "./components/card";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
//import Comments from "./components/comments/comments";

import { useContext } from "react";
import { TestContext } from "../../TestContext";

import { useState } from "react";
import AddPost from "./AddPost";
import Post from './Post'

const MainFeed = () => {
  const [movies, setMovies] = useContext(TestContext);

  const [posts, setPosts] = useState([{
    description: 'This will be the best thing you read today!'
  }]);

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          <AddPost setPosts={setPosts} />
          <div>{movies}</div>
          <Heading>
            <Text> Most Recent Posts </Text>
            <NewPostButton>Create New Post</NewPostButton>
          </Heading>
          {posts.map((post) => (
            <Post description={post.description} />
          ))}
          <Card />
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};
export default MainFeed;
