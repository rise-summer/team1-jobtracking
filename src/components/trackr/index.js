import React, { Fragment } from "react";
import Navigation from "../navigation";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
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
import Application from "./components/applicationfeed/Application";
import { useState } from "react";
import EmptyApplication from "./components/applicationfeed/emptyapplication";

export default function Trackr(props) {
  const profile = useSelector((state) => state.profileReducer.profile);
  console.log("profile", profile);
  const name = useProfileInput(profile.name);
  const job = useProfileInput(profile.job);
  const major = useProfileInput(profile.major);
  const education = useProfileInput(profile.education);
  const dispatch = useDispatch();

  const applications = useSelector(
    (state) => state.applicationReducer.applications,
    shallowEqual
  );
  console.log(applications);

  function useProfileInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange(e) {
      setValue(e.target.value);
    }
    function handleDoubleClick(e) {
      e.target.readOnly = false;
    }

    function handleBlur(e) {
      e.target.readOnly = true;
      console.log(name);
      dispatch({
        type: "UPDATE_PROFILE",
        payload: {
          name: name.value,
          job: job.value,
          major: major.value,
          education: education.value,
        },
      });
    }
    return {
      value,
      onChange: handleChange,
      onDoubleClick: handleDoubleClick,
      onBlur: handleBlur,
      readOnly: true,
    };
  }

  function sortApplications(e) {
    switch (e.target.value) {
      case "DEADLINE":
        return dispatch({ type: "SORT_BY_DEADLINE" });
      case "STATUS":
        return dispatch({ type: "SORT_BY_STATUS" });
      default:
        return undefined;
    }
  }

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
              <Sort className="dropdown" onChange={sortApplications}>
                <Option value="" selected disabled hidden>
                  Sort by
                </Option>
                <Option value="DEADLINE"> Deadline</Option>
                <Option value="STATUS"> Status</Option>
              </Sort>
            </Headding>
            {applications.length == 0 ? (
              <EmptyApplication></EmptyApplication>
            ) : (
              applications.map((application) => (
                <Application
                  id={application.id}
                  companyName={application.company}
                  position={application.role}
                  stage={application.stage}
                  link={application.link}
                  deadline={application.deadline}
                  description={application.description}
                  location={application.location}
                />
              ))
            )}
          </ContentDiv>
          <ProfileDiv>
            <BtnDiv>
              <EditBtn>Edit</EditBtn>
              <ExitBtn>x</ExitBtn>
            </BtnDiv>
            <Name {...name} placeholder="Lauren Yoon"></Name>
            <Info {...job} placeholder="Software Engineer Intern" />
            <Info {...major} placeholder="Majoring in Computer Science" />
            <Info
              {...education}
              placeholder="Attending Stony Brook University"
            />
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
