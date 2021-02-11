import React, { Fragment, useContext } from "react";
import Navigation from "../navigation";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
import { useState, useEffect } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import axios from 'axios';

import { Redirect } from 'react-router-dom';

import { AuthenticationContext } from "../../AuthenticationContext";

const MainFeed = () => {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);

  const [numPosts, setNumPosts] = useState(1);
  const [posts, setPosts] = useState([]);
  useEffect(() => { 
    async function fetchPosts() {
      const result = await axios.get(`http://localhost:5000/api/post/fetchPosts`);
      console.log(result.request);
      setPosts(result.data.body);
    }
    fetchPosts();
  }, []);

  if (!authentication.displayName) {
    return (<Redirect to="/login" />);
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
            <Post id={post.id} author={post.author} title={post.title} date={post.date} description={post.content} />
          ))}
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};

export default MainFeed;
