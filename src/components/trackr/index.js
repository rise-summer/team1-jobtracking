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
  JobTitle,
  EditBtn,
  ExitBtn,
  BtnDiv,
  Info,
  HashTagDiv,
  HashTag,
  SearchDiv,
  Searches,
  ViewPostBtnDiv,
  ViewPostBtn,
} from "./style";
import ApplicationFeed from "./components/applicationfeed/applicationfeed";
import { connect } from "react-redux";

class Trackr extends Component {
  constructor() {
    super();
    this.state = { no_apps: false };
    this.handleNewApplication = this.handleNewApplication.bind(this);
  }

  getContent() {
    if (this.state.no_apps) {
      return <Content>Log a new application here</Content>;
    }
  }

  handleNewApplication() {
    // this.props.dispatch({
    //   type: "STORE_RESET",
    //   payload: {},
    // });
    this.props.history.push("/trackr/track2");
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
                  <NewAppBtn onClick={this.handleNewApplication}>
                    New App
                  </NewAppBtn>
                </NewAppBtnDiv>
                <Sort className="dropdown">
                  <Option value="" selected disabled hidden>
                    Sort by
                  </Option>
                  <Option>Deadline</Option>
                  <Option>Status</Option>
                </Sort>
              </Headding>
              {this.state.no_apps ? this.getContent() : <ApplicationFeed />}
            </ContentDiv>
            <ProfileDiv>
              <BtnDiv>
                <EditBtn>Edit</EditBtn>
                <ExitBtn>x</ExitBtn>
              </BtnDiv>
              <JobTitle>UXStudent</JobTitle>
              <Info>Lauren Yoon</Info>
              <Info>Majoring in Computer Science</Info>
              <Info>Attending Stony Brook University</Info>
              <HashTagDiv>
                <HashTag>#SWE</HashTag>
                <HashTag>#CSE</HashTag>
                <HashTag>#FulLStack</HashTag>
              </HashTagDiv>
              <SearchDiv>
                <div>Recent Searches:</div>
                <Searches>#Backend</Searches>
                <Searches>#SoftwareDev</Searches>
                <Searches>#Tech</Searches>
              </SearchDiv>
              <ViewPostBtnDiv>
                <ViewPostBtn>View Your Posts</ViewPostBtn>
              </ViewPostBtnDiv>
            </ProfileDiv>
          </BackgroundDiv>
        </MainBody>
      </Fragment>
    );
  }
}

export default connect(null, null)(Trackr);
