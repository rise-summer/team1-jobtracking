import React, { Fragment, useContext } from "react";
import Navigation from "../navigation";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
import { useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import axios from 'axios';

import { Redirect } from 'react-router-dom';

import { AuthenticationContext } from "../../AuthenticationContext";

const MainFeed = () => {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);

  const [numPosts, setNumPosts] = useState(1);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John',
      title: 'Hive Summer 2021 Internship Positions Now Available!',
      date: '01/03/21',
      description: "They have positions for electrical engineering, business, and computer science majors. The deadline to apply is 1/17/21.",
    },
  ]);
  // let posts = [];
  // useEffect(async () => {
  //   const result = await axios.get(`/post/getPosts`);
  //   setPosts([...result.posts]);
  // });

  if (!authentication.displayName) {
    return (<Redirect to="/login" />);
  }

  const addPost = async() => {

  }

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          <AddPost numPosts={numPosts} setNumPosts={setNumPosts} setPosts={setPosts} />
          <Heading>
            <Text> Most Recent Posts </Text>
            {/* <NewPostButton>Create New Post</NewPostButton> */}
          </Heading>
          {posts.map((post) => (
            <Post id={post.id} author={post.author} title={post.title} date={post.date} description={post.description} />
          ))}
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};

export default MainFeed;
