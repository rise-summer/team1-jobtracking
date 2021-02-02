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
  HeadingContent,
  SearchTitle,
  InfoPrompt,
  InfoDiv,
} from "./style";
import Application from "./components/applicationfeed/Application";
import { useState, useEffect } from "react";
import EmptyApplication from "./components/applicationfeed/emptyapplication";
import { auth } from "../../firebaseSetup";
import axios from "axios";

export default function Trackr(props) {
  const profile = useSelector((state) => state.profileReducer.profile);
  console.log("profile", profile);
  const name = useProfileInput(profile.name);
  const job = useProfileInput(profile.job);
  const major = useProfileInput(profile.major);
  const education = useProfileInput(profile.education);
  const dispatch = useDispatch();

  const [applications, setApplications] = useState([])
  

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

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await auth.currentUser.getIdToken();
        const res = await axios.get("/api/jobs", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log("Routes work again!")
        console.log(res.data.data);
        setApplications(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const deleteApp = async () => {
    try {
      const token = await auth.currentUser.getIdToken();
      applications.map(async (application) => {
        const res = await axios.delete(
          `/api/job/delete/${application.job_id}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
      });

      // setApplications(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <Headding>
              <HeadingContent>
                <Title>Your Applications</Title>
                <NewAppBtnDiv>
                  <NewAppBtn
                    onClick={() => props.history.push("/trackr/track1")}
                  >
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
              </HeadingContent>
            </Headding>
            {applications.length === 0 ? (
              <EmptyApplication></EmptyApplication>
            ) : (
              applications.map((application) => (
                <Application
                  id={application.id}
                  companyName={application.company}
                  position={application.job_title}
                  stage={application.app_process}
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
            <InfoDiv>
              <InfoPrompt>Currently a</InfoPrompt>
              <Info {...job} placeholder="Software Engineer Intern" />
            </InfoDiv>
            <InfoDiv>
              <InfoPrompt>Majoring in</InfoPrompt>
              <Info {...major} placeholder="Computer Science" />
            </InfoDiv>
            <InfoDiv>
              <InfoPrompt>Attending</InfoPrompt>
              <Info
                {...education}
                placeholder="Attending Stony Brook University"
              />
            </InfoDiv>
            <HashTagDiv>
              <HashTag>#SWE</HashTag>
              <HashTag>#CSE</HashTag>
              <HashTag>#FullStack</HashTag>
            </HashTagDiv>
            <SearchTitle>Recent Searches:</SearchTitle>
            <SearchDiv>
              <Searches>#Backend</Searches>
              <Searches>#SoftwareDev</Searches>
              <Searches>#Tech</Searches>
            </SearchDiv>
            <ViewPostBtnDiv>
              <ViewPostBtn onClick={() => props.history.push("/yourposts")}>View Your Posts</ViewPostBtn>
            </ViewPostBtnDiv>
          </ProfileDiv>
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
}
