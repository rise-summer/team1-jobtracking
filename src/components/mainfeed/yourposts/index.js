import React, { Fragment, useContext } from "react";
import Navigation from "../../navigation";
import styled from "styled-components";
import {
  Heading,
  Text,
  SearchText,
  BackgroundDiv,
  MainBody,
  NewPostButton,
  LoaderContainer,
} from "../style";
import Loader from "react-loader-spinner";
import { Title, BackSvg } from "./style";
import useAppzi from "../../../hooks/useAppzi";
import { useState, useEffect } from "react";
import AddPost from "../AddPost";
import Post from "../Post";
import Back from "../../../images/backarrow.svg";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/compat/firestore";
import { firestore, auth } from "../../../firebaseSetup";

import { AuthenticationContext } from "../../../AuthenticationContext";
import Search from "../../navigation/search";
import { useHistory } from "react-router-dom";

export default function YourPosts(props) {
  useAppzi("rddQu");
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");
  const postRef = firestore.collection(`posts`).orderBy("time", "desc");
  const [initialPosts] = useCollectionData(postRef, { idField: "id" });
  const [posts, setPosts] = useState();
  const [isNewPostBtnClicked, setisNewPostBtnClicked] = useState(false);
  const [numPosts, setNumPosts] = useState(1);

  useEffect(() => {
    if (initialPosts) {
      setPosts(
        initialPosts
          ? initialPosts.filter((p) => {
              if (p.author === authentication["email"] && searchValue) {
                let title = p.title.toLowerCase();
                let description = p.description.toLowerCase();
                let search = searchValue.toLowerCase();
                if (title.includes(search) || description.includes(search))
                  return p;
              } else {
                return p.author === authentication["email"];
              }
            })
          : initialPosts.filter((p) => p.author === authentication["email"])
      );
    }
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
            .split(" ");
          console.log(search);
          if (
            p.author === authentication["email"] &&
            search.every((word) => {
              return title.indexOf(word) >= 0 || description.indexOf(word) >= 0;
            })
          )
            return p;
        });
      } else {
        newPosts = initialPosts.filter(
          (p) => p.author === authentication["email"]
        );
      }
      setPosts(newPosts);
    }
  }, [searchValue]);
  return (
    <Fragment>
      <MainBody>
        <Navigation>
          <Search setSearchValue={setSearchValue} />
        </Navigation>
        <BackgroundDiv>
          {!searchValue ? (
            <HeaderTitle>Your posts</HeaderTitle>
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
            posts.map((post) => {
              return <Post key={post.id} {...post} toBold={searchValue} />;
            })
          ) : (
            <LoaderContainer>
              <Loader type="ThreeDots" color="#175596" />
            </LoaderContainer>
          )}
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
}

const HeaderTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 30px;
  letter-spacing: 1pt;
  text-align: left;
  /* display: block; */
  margin: auto auto auto 15px;
  /* min-width: 270px; */
`;
