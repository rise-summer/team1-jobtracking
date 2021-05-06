import React, { Fragment, useContext } from "react";
import Navigation from "../navigation";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
import { useState, useEffect } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import { auth } from "../../firebaseSetup";
import axios from 'axios';

import { Redirect } from "react-router-dom";

import { AuthenticationContext } from "../../AuthenticationContext";

const MainFeed = () => {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);

  const [showPost, setShowPost] = useState(false);
  const [numPosts, setNumPosts] = useState(1);
  const [posts, setPosts] = useState([]);
  useEffect(() => { 
    async function fetchPosts() {
      const token = auth.currentUser ? await auth.currentUser.getIdToken() : '';
      const result = await axios.get(`http://localhost:5000/api/post/fetchPosts`,{
        headers: {
          Authorization: `Bearer ${token}`,
          offset: 0
        }});
      setPosts(result.data.body);
    }
    fetchPosts();
  }, []);

  const toggleShowPost = () => {
    if (showPost) {
      setShowPost(false)
    }
    else {
      setShowPost(true)
    }
  }

  if (!authentication.displayName) {
    return (<Redirect to="/login" />);
  }

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
        {showPost ? <AddPost numPosts={numPosts} setNumPosts={setNumPosts} setPosts={setPosts} toggleShowPost={toggleShowPost} /> : ''}
          <Heading>
            <Text> Most Recent Posts </Text>
            {showPost ? '' : <NewPostButton onClick={toggleShowPost}>Create New Post</NewPostButton>}
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
