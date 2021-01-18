import React, { Fragment } from "react";
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
  ProfileDiv,
  Name,
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
import { shallowEqual, useSelector } from "react-redux";
import { Application } from "./Application";

export default function Trackr(props) {
  const applications = useSelector(
    (state) => state.applicationReducer.applications,
    shallowEqual
  );
  console.log(applications);

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <Headding>
              <Title>Your Applications</Title>
              <NewAppBtnDiv>
                <NewAppBtn onClick={() => props.history.push("/trackr/track1")}>
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

            {applications.map((application) => (
              <Application
                companyName={application.company.value}
                position={application.role.value}
                stage={application.stage}
                link={application.link}
                deadline={application.deadline.value}
                description={application.description.value}
                location={application.location.value}
              />
            ))}
            {/* {applications.map(application => application.company.value)} */}

            <ApplicationFeed />
          </ContentDiv>
          <ProfileDiv>
            <BtnDiv>
              <EditBtn>Edit</EditBtn>
              <ExitBtn>x</ExitBtn>
            </BtnDiv>
            <Name>Riley Zhou</Name>
            <Info>Software Engineer Intern</Info>
            <Info>Majoring in Computer Science</Info>
            <Info>Attending Stony Brook University</Info>
            <HashTagDiv>
              <HashTag>#SWE</HashTag>
              <HashTag>#CSE</HashTag>
              <HashTag>#FullStack</HashTag>
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
