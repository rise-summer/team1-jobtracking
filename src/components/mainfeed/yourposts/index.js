import React, { Fragment, useContext } from "react";
import Navigation from "../../navigation";
import { Heading, BackgroundDiv, MainBody, NewPostButton } from "../style";
import { Title, BackSvg } from "./style";
import { useState } from "react";
import AddPost from "../AddPost";
import Post from "../Post";
import Back from "../../../images/backarrow.svg";

import { Redirect } from "react-router-dom";

import { AuthenticationContext } from "../../../AuthenticationContext";

export default function YourPosts(props) {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);
  const [isNewPostBtnClicked, setisNewPostBtnClicked] = useState(false);
  const [numPosts, setNumPosts] = useState(1);
  const [posts, setPosts] = useState([]);

  if (!authentication.displayName) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          <a onClick={() => props.history.push("/trackr")}>
            <BackSvg src={Back} alt="backarrow error" />
          </a>
          {isNewPostBtnClicked ? (
            <AddPost
              numPosts={numPosts}
              setNumPosts={setNumPosts}
              setPosts={setPosts}
            />
          ) : (
            <div></div>
          )}
          <Heading>
            <Title> Your Posts </Title>
            <NewPostButton
              onClick={() => setisNewPostBtnClicked(!isNewPostBtnClicked)}
            >
              create new post
            </NewPostButton>
          </Heading>
          {posts.map((post) => (
            <Post
              id={post.id}
              author={post.author}
              title={post.title}
              date={post.date}
              description={post.description}
            />
          ))}
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
}
