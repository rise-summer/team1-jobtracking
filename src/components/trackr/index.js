import React, { Fragment, useContext } from "react";
import Navigation from "../navigation";
import { useSelector} from "react-redux";
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
  HeadingContent,
  // ProfileDiv,
  // Name,
  // EditBtn,
  // ExitBtn,
  // BtnDiv,
  // Info,
  // HashTagDiv,
  // HashTag,
  // SearchDiv,
  // Searches,
  // ViewPostBtnDiv,
  // ViewPostBtn,
  // SearchTitle,
  // InfoPrompt,
  // InfoDiv,
} from "./style";
import Application from "./components/applicationfeed/Application";
import { useState, useEffect } from "react";
import EmptyApplication from "./components/applicationfeed/emptyapplication";
import axios from "axios";

import { Redirect } from "react-router-dom";

import { AuthenticationContext } from "../../AuthenticationContext";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../../firebaseSetup";

export default function Trackr(props) {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);
  const jobsRef = firestore.collection(`jobs`);
  const [jobs] = useCollectionData(jobsRef, {idField: "id"});
  console.log(jobs)
  const [applications, setApplications] = useState([]);

  // const deleteApplication = (jobId) => {
  //   let index = applications.findIndex((application) => {
  //     return application.job_id === jobId;
  //   });
  //   applications.splice(index, 1);
  //   setApplications([...applications.reverse()]);
  //   console.log(applications);
  // };

  // function useProfileInput(initialValue) {
  //   const [value, setValue] = useState(initialValue);
  //   function handleChange(e) {
  //     setValue(e.target.value);
  //   }
  //   function handleDoubleClick(e) {
  //     e.target.readOnly = false;
  //   }

  //   function handleBlur(e) {
  //     e.target.readOnly = true;
  //     console.log(name);
  //     dispatch({
  //       type: "UPDATE_PROFILE",
  //       payload: {
  //         name: name.value,
  //         job: job.value,
  //         major: major.value,
  //         education: education.value,
  //       },
  //     });
  //   }
  //   return {
  //     value,
  //     onChange: handleChange,
  //     onDoubleClick: handleDoubleClick,
  //     onBlur: handleBlur,
  //     readOnly: true,
  //   };
  // }

  // function sortApplications(e) {
  //   switch (e.target.value) {
  //     case "DEADLINE":
  //       console.log("sort by deadline");
  //       applications.sort((a, b) => {
  //         let aDate = new Date(a.deadline);
  //         let bDate = new Date(b.deadline);
  //         console.log(`aDate ${aDate.getTime()} bDate ${bDate.getTime()}`);
  //         return bDate.getTime() - aDate.getTime();
  //       });
  //       setApplications([...applications]);
  //       break;
  //     case "STATUS":
  //       console.log("sort by status");
  //       applications.sort((a, b) => {
  //         return a.app_status - b.app_status;
  //       });
  //       setApplications([...applications]);
  //       break;
  //     //return dispatch({ type: "SORT_BY_STATUS" });
  //     default:
  //       return undefined;
  //   }
  // }

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       console.log(token.h)
  //       const res = await axios.get("/api/jobs", {
  //         headers: {
  //           Authorization: "Bearer " + token.h,
  //         },
  //       });
  //       console.log(res.data.data);
  //       setApplications(res.data.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, [token]);

  // if (!log_in) {
  //   alert("Pleae sign in");
  //   return <Redirect to="/landingpage" />;
  // }

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
                <Sort className="dropdown" onChange={undefined}>
                  <Option value="" selected disabled hidden>
                    Sort by
                  </Option>
                  <Option value="DEADLINE"> Deadline</Option>
                  <Option value="STATUS"> Status</Option>
                </Sort>
              </HeadingContent>
            </Headding>
            {jobs && jobs.length === 0 ? (
              <EmptyApplication></EmptyApplication>
            ) : (
              jobs && jobs.map((job) => <Application key={job.id} {...job}/>)
            )}
          </ContentDiv>
          {/* <ProfileDiv>
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
              <ViewPostBtn onClick={() => props.history.push("/yourposts")}>
                View Your Posts
              </ViewPostBtn>
            </ViewPostBtnDiv>
          </ProfileDiv> */}
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
}
