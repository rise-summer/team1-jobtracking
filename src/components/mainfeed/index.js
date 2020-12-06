import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import Card from "../card";
import {
  Headding,
  TextDiv,
  PostBtnDiv,
  Text,
  PostButton,
  BackgroundDiv,
  //SpaceHolder,
} from "./style";
import Comments from "./components/comments";

class MainFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <Headding>
            <Text> Most Recent Posts </Text>
            {/* <SpaceHolder> Search </SpaceHolder> */}
            <PostButton>Create new post</PostButton>
          </Headding>
          <Card />
        </BackgroundDiv>
      </Fragment>
    );
  }
}
export default MainFeed;
