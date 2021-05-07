import React, { Fragment, useContext } from "react";
import Navigation from "../navigation";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
import { useState, useEffect } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import { auth } from "../../firebaseSetup";
import axios from "axios";
import {useSelector} from "react-redux"

import { Redirect } from "react-router-dom";

import { AuthenticationContext } from "../../AuthenticationContext";

const MainFeed = () => {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);

  const [showPost, setShowPost] = useState(false);
  const [numPosts, setNumPosts] = useState(1);
  const [posts, setPosts] = useState([]);

  const log_in = useSelector((state) => state.isLogged.logged_in)
  console.log(log_in)
  const token = useSelector((state) => state.isLogged.token)
  console.log(token)


  useEffect(() => {
    async function fetchPosts() {
      const tokn = token == null ? "" : token.h;
      const result = await axios.get(
        `http://13.59.54.177:5000/api/post/fetchPosts`,
        {
          headers: {
            Authorization: `Bearer ${tokn}`,
            offset: 0,
          },
        }
      );
      setPosts(result.data.body);
    }
    fetchPosts();
  }, [token]);

  const toggleShowPost = () => {
    if (showPost) {
      setShowPost(false);
    } else {
      setShowPost(true);
    }
  };

  if (!log_in) {
    alert("Pleae sign in");
    return <Redirect to="/landingpage" />;
  }

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          {showPost ? (
            <AddPost
              numPosts={numPosts}
              setNumPosts={setNumPosts}
              setPosts={setPosts}
              toggleShowPost={toggleShowPost}
            />
          ) : (
            ""
          )}
          <Heading>
            <Text> Most Recent Posts </Text>
            {showPost ? (
              ""
            ) : (
              <NewPostButton onClick={toggleShowPost}>
                Create New Post
              </NewPostButton>
            )}
          </Heading>
          {posts.map((post) => (
            <Post
              id={post.id}
              author={post.author}
              title={post.title}
              date={post.date}
              description={post.content}
            />
          ))}
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};

export default MainFeed;
