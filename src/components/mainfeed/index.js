import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import Card from "./components/card";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
//import Comments from "./components/comments/comments";

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
        <MainBody>
          <Navigation />
          <BackgroundDiv>
            <Heading>
              <Text> Most Recent Posts </Text>
              <NewPostButton>Create New Post</NewPostButton>
            </Heading>
            <Card />
          </BackgroundDiv>
        </MainBody>
      </Fragment>
    );
  }
}
export default MainFeed;
