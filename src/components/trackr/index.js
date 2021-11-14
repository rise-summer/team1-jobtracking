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
import { auth, firestore } from "../../firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Trackr(props) {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);
  const applicationRef = firestore.collection(`jobs`);
  const [applications] = useCollectionData(applicationRef);
  // const [applications, setApplications] = useState([]);

  const deleteApplication = (jobId) => {
    let index = applications.findIndex((application) => {
      return application.job_id === jobId;
    });
    applications.splice(index, 1);
    //setApplications([...applications.reverse()]);
    console.log(applications);
  };

  function sortApplications(e) {
    switch (e.target.value) {
      case "DEADLINE":
        console.log("sort by deadline");
        applications.sort((a, b) => {
          let aDate = new Date(a.deadline);
          let bDate = new Date(b.deadline);
          console.log(`aDate ${aDate.getTime()} bDate ${bDate.getTime()}`);
          return bDate.getTime() - aDate.getTime();
        });
       // setApplications([...applications]);
        break;
      case "STATUS":
        console.log("sort by status");
        applications.sort((a, b) => {
          return a.app_status - b.app_status;
        });
       // setApplications([...applications]);
        break;
      //return dispatch({ type: "SORT_BY_STATUS" });
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
            {applications && applications.length === 0 ? (
              <EmptyApplication></EmptyApplication>
            ) : ( 
             applications && applications.map((application) => <Application key={application.id} {...application}/>))
            }
          </ContentDiv>
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
}
