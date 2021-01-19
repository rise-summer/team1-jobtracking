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
            {applications === undefined ? (
              <div>Nothing to see here folks</div>
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
            {/* {applications.map((application) => (
              <Application
                id={application.id}
                companyName={application.company.value}
                position={application.role.value}
                stage={application.stage}
                link={application.link}
                deadline={application.deadline.value}
                description={application.description.value}
                location={application.location.value}
              />
            ))} */}
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
