import React, { Fragment, useContext } from "react";
import Navigation from "../navigation";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
import { useState} from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import firebase from "../../firebaseSetup";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../../firebaseSetup";

const MainFeed = () => {
  const [showPost, setShowPost] = useState(false);
  const [numPosts, setNumPosts] = useState(1);
  const postRef = firestore.collection(`posts`);
  const [posts] = useCollectionData(postRef, {idField: "id"});
  console.log(posts)

  const toggleShowPost = () => {
    if (showPost) {
      setShowPost(false);
    } else {
      setShowPost(true);
    }
  };

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          {showPost ? (
            <AddPost
              numPosts={numPosts}
              setNumPosts={setNumPosts}
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
          {posts && console.log(posts.map((post) => post))}
          {posts && posts.map((post) => <Post key={post.id} {...post}/>)}
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};

export default MainFeed;

// <Post
//   id={post.id}
//   author={post.author}
//   title={post.title}
//   date={post.date}
//   description={post.content}
// >
