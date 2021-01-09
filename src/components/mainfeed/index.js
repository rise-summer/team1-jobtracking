import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
import { useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";

const MainFeed = () => {
  const [numPosts, setNumPosts] = useState(1);
  const [posts, setPosts] = useState([
    {
      id: 1,
      description: "This will be the best thing you read today!",
    },
  ]);

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          <AddPost numPosts={numPosts} setNumPosts={setNumPosts} setPosts={setPosts} />
          <Heading>
            <Text> Most Recent Posts </Text>
            <NewPostButton>Create New Post</NewPostButton>
          </Heading>
          {posts.map((post) => (
            <Post id={post.id} description={post.description} />
          ))}
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};

export default MainFeed;
