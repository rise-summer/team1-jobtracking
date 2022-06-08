import React, { Fragment, useContext, useState, useEffect } from "react";
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
import EmptyApplication from "./components/applicationfeed/emptyapplication";
import { AuthenticationContext } from "../../AuthenticationContext";
import { auth, firestore } from "../../firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Trackr(props) {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);
  const applicationRef = firestore
    .collection(`jobs/${auth.currentUser.uid}/jobs`)
    .orderBy("date_updated", "desc");
  const [applicationsInitialValue] = useCollectionData(applicationRef, {
    idField: "id",
  });
  const [applications, setApplications] = useState();
  useEffect(() => {
    setApplications(applicationsInitialValue);
  }, [applicationsInitialValue]);

  function sortApplications(sortButton) {
    let updatedApplications = [...applications];
    switch (sortButton.target.value) {
      case "DEADLINE":
        console.log("sort by deadline from furthest to closest");
        updatedApplications.sort((a, b) => {
          let aDate = a.deadline.toDate();
          let bDate = b.deadline.toDate();
          return bDate - aDate;
        });
        setApplications(updatedApplications);
        break;
      case "STATUS":
        console.log("sort by status (interested => offer)");
        updatedApplications.sort((a, b) => {
          return a.app_status - b.app_status;
        });
        setApplications(updatedApplications);
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
                <Sort
                  className="dropdown"
                  onChange={(e) => sortApplications(e)}
                >
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
              applications &&
              applications.map((application) => (
                <Application key={application.id} {...application} />
              ))
            )}
          </ContentDiv>
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
}
