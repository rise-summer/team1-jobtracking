import React, { Fragment, useContext, useEffect } from "react";
import Navigation from "../navigation";
import EmptyPost from "./EmptyPost";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
import { Button } from "../../styles/shared";
import { useState } from "react";
import useAppzi from "../../hooks/useAppzi";
import AddPost from "./AddPost";
import Post from "./Post";
import firebase from "../../firebaseSetup";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../../firebaseSetup";
import Search from "../navigation/search";
const MainFeed = (props) => {
  useAppzi("rddQu");
  const [searchValue, setSearchValue] = useState(
    props.location.state && props.location.state.searchValue
      ? props.location.state.searchValue
      : ""
  );

  const [application, setApplication] = useState(
    props.location.state && props.location.state.application
      ? JSON.parse(props.location.state.application)
      : ""
  );
  const [showPost, setShowPost] = useState(
    props.location.state && props.location.state.application ? true : false
  );
  const [numPosts, setNumPosts] = useState(1);
  const postRef = firestore.collection(`posts`).orderBy("time", "desc");
  const [initialPosts] = useCollectionData(postRef, { idField: "id" });
  const [posts, setPosts] = useState();
  useEffect(() => {
    if (props.location.state) {
      setSearchValue(props.location.state.searchValue);
      setApplication(JSON.parse(props.location.state.application));
    }
  }, [props.location.state]);
  useEffect(() => {
    console.log(posts);
  }, [posts]);
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

  return (
    <Fragment>
      <MainBody>
        <Navigation>
          <Search
            focus={props.location.state && props.location.state.searchValue}
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
              application={
                props.location.state && props.location.state.application
                  ? application
                  : ""
              }
            />
          ) : (
            ""
          )}
          <Heading searchValue={searchValue}>
            <Text>
              {searchValue
                ? `Posts containing: "${searchValue}"`
                : "Most Recent Posts"}{" "}
            </Text>
            {showPost ? (
              ""
            ) : (
              <Button
                primary
                bold
                style={{
                  fontSize: "15px",
                  marginLeft: "10vw",
                  minWidth: "135px",
                }}
                onClick={() => setShowPost(!showPost)}
              >
                Create New Post
              </Button>
            )}
          </Heading>
          {posts &&
            posts.map((post) => (
              <Post key={post.id} {...post} toBold={searchValue} />
            ))}
          {(!posts || posts.length === 0) && <EmptyPost />}
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
