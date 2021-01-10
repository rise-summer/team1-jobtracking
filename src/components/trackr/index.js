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

import { useContext, useEffect } from "react";
import {ApplicationContext} from '../../ApplicationContext'

import Application from "./Application";

const Trackr = (props) => {
  // constructor() {
  //   super();
  //   this.state = { no_apps: true };
  // }

  // getContent() {
  //   if (this.state.no_apps) {
  //     return <Content>Log a new application here</Content>;
  //   }
  // }

  const [applications, setApplications] = useContext(ApplicationContext);

  useEffect(() => {
    console.log(applications);
  }, [applications]);

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <Headding>
              <Title>Your Applications</Title>
              <NewAppBtnDiv>
                <NewAppBtn onClick={() => props.history.push('/trackr/track1')}>New App</NewAppBtn>
              </NewAppBtnDiv>
              <Sort className="dropdown">
                <Option value="" selected disabled hidden>
                  Sort by
                </Option>
                <Option>Deadline</Option>
                <Option>Status</Option>
              </Sort>
            </Headding>
            {/* {this.getContent()} */}

            {applications.map((application) => (
              <Application
                companyName="Facebook"
                position={application.position}
                status="1"
                link="https://www.linkedin.com/jobs/view/2203322085/?refId=8215620981604709514680&trackingId=OxhduUV3E9J1gHPQXKUkcw%3D%3D"
                date="now"
                deadline="now"
                location="now"
                description="blah blah blah"
              />
            ))}

            <ApplicationFeed />
          </ContentDiv>
          <ProfileDiv>
            <BtnDiv>
              <EditBtn>Edit</EditBtn>
              <ExitBtn>x</ExitBtn>
            </BtnDiv>
            <JobTitle>UXStudent</JobTitle>
            <Info>Andrew Liang</Info>
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
};

export default Trackr;
