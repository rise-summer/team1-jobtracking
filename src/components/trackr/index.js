import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import {
  MainBody,
  BackgroundDiv,
  Headding,
  Title,
  NewAppBtnDiv,
  NewAppBtn,
  Sort,
  ContentDiv,
  Option,
  Content,
  ProfileDiv,
} from "./style";

class Trackr extends Component {
  constructor() {
    super();
    this.state = { no_apps: true };
  }

  getContent() {
    if (this.state.no_apps) {
      return <Content>Log a new application here</Content>;
    }
  }

  render() {
    return (
      <Fragment>
        <MainBody>
          <Navigation />
          <BackgroundDiv>
            <ContentDiv>
              <Headding>
                <Title>Your Applications</Title>
                <NewAppBtnDiv>
                  <NewAppBtn href="/trackr/track1">New App</NewAppBtn>
                </NewAppBtnDiv>
                <Sort class="dropdown">
                  <Option value="" selected disabled hidden>
                    Sort by
                  </Option>
                  <Option>Deadline</Option>
                  <Option>Status</Option>
                </Sort>
              </Headding>
              {this.getContent()}
            </ContentDiv>
            <ProfileDiv></ProfileDiv>
          </BackgroundDiv>
        </MainBody>
      </Fragment>
    );
  }
}

export default Trackr;
