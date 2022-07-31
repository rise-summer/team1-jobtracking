import React, { Fragment, useContext, useEffect } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import Navigation from "../navigation";
import EmptyPost from "./EmptyPost";
import {
  Heading,
  SearchText,
  Text,
  LoaderContainer,
  NewPostButton,
  BackgroundDiv,
  MainBody,
} from "./style";
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
/* 
todo would be content loader so that page loads at once.
*/
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (props.location.state) {
      setSearchValue(props.location.state.searchValue);
      setApplication(JSON.parse(props.location.state.application));
    }
  }, [props.location.state]);
  useEffect(() => {
    if (posts) {
      setLoading(false);
    }
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
          {!searchValue ? (
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
            <Heading searchValue={searchValue}>
              <Text>Search Results for:</Text>
              <SearchText>{searchValue}</SearchText>
              <Text>
                {posts.length} post{posts.length == 1 ? "" : "s"} about this
                topic
              </Text>
            </Heading>
          )}

          {posts ? (
            posts.map((post) => (
              <Post key={post.id} {...post} toBold={searchValue} />
            ))
          ) : (
            <LoaderContainer>
              <Loader type="ThreeDots" color="#175596" />
            </LoaderContainer>
          )}
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};

export default MainFeed;
