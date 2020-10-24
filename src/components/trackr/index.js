import React, { Component, Fragment } from "react";
import Navigation from "../Navigation/NavigationLogOut";
import {
  BackgroundDiv,
  Headding,
  Title,
  NewAppBtn,
  Sort,
  Apps,
  ContentDiv,
  Option,
  Content,
  ProfileDiv,
  HDiv
} from "./style";

class Trackr extends Component {
  constructor() {
    super();
    this.state = { no_apps: true };
  }

  getContent() {
    if (this.state.no_apps) {
      return <Content>Log a new application here</Content>
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <HDiv>
              <Headding>
                <div>
                  <Title>YOUR APPLICATIONS</Title>
                </div>
                <div>
                  <a href="/trackr/track1"><NewAppBtn>Enter a new application</NewAppBtn></a>
                </div>
                <div>
                  <Sort class="dropdown">
                    <Option value="" selected disabled hidden>
                      Sort by
                    </Option>
                    <Option>deadline</Option>
                    <Option>status</Option>
                  </Sort>
                </div>
              </Headding>
              <div>{this.getContent()}</div>
            </HDiv>
            <ProfileDiv></ProfileDiv>
          </ContentDiv>
        </BackgroundDiv>
      </Fragment>
    );
  }
}

export default Trackr;
