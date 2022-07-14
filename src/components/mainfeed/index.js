import React, { Fragment, useContext, useEffect } from "react";
import Navigation from "../navigation";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
import { useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import firebase from "../../firebaseSetup";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../../firebaseSetup";
import Search from "../navigation/search";
const MainFeed = (props) => {
  const [searchValue, setSearchValue] = useState(
    props.location.state ? props.location.state.searchValue : ""
  );
  const [showPost, setShowPost] = useState(false);
  const [numPosts, setNumPosts] = useState(1);
  const postRef = firestore.collection(`posts`).orderBy("time", "desc");
  const [initialPosts] = useCollectionData(postRef, { idField: "id" });
  const [posts, setPosts] = useState();
  useEffect(() => {
    if (props.location.state) {
      setSearchValue(props.location.state.searchValue);
    }
  }, [props.location.state]);
  useEffect(() => {
    setPosts(
      initialPosts
        ? initialPosts.filter((p) => {
            if (searchValue) {
              let title = p.title.toLowerCase();
              let description = p.description.toLowerCase();
              let search = searchValue.toLowerCase();
              if (title.includes(search) || description.includes(search))
                return p;
            } else {
              return p;
            }
          })
        : initialPosts
    );
  }, [initialPosts]);
  useEffect(() => {
    let newPosts;
    if (initialPosts) {
      if (searchValue) {
        newPosts = initialPosts.filter((p) => {
          let title = p.title.toLowerCase();
          let description = p.description.toLowerCase();
          let search = searchValue
            .toLowerCase()
            .replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "")
            .split(" ")
            .filter((word) => word !== "");
          console.log(title, description, search);
          if (
            search.every((word) => {
              return title.indexOf(word) >= 0 || description.indexOf(word) >= 0;
            })
          )
            return p;
        });
      } else {
        newPosts = initialPosts;
      }
      setPosts(newPosts);
    }
  }, [searchValue]);
  // const toggleShowPost = () => {
  //   if (showPost) {
  //     setShowPost(false);
  //   } else {
  //     setShowPost(true);
  //   }

  return (
    <Fragment>
      <MainBody>
        <Navigation>
          <Search
            focus={props.location.state}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </Navigation>
        <BackgroundDiv>
          {showPost ? (
            <AddPost
              numPosts={numPosts}
              setNumPosts={setNumPosts}
              toggleShowPost={setShowPost}
            />
          ) : (
            ""
          )}
          <Heading>
            <Text>
              {searchValue
                ? `Posts containing: "${searchValue}"`
                : "Most Recent Posts"}{" "}
            </Text>
            {showPost ? (
              ""
            ) : (
              <NewPostButton onClick={() => setShowPost(!showPost)}>
                Create New Post
              </NewPostButton>
            )}
          </Heading>
          {console.log("hello")}
          {posts && console.log(posts.map((post) => post))}
          {posts &&
            posts.map((post) => (
              <Post key={post.id} {...post} toBold={searchValue} />
            ))}
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
