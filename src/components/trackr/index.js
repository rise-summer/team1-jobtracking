import React, { Fragment, useContext, useState, useEffect } from "react";
import Navigation from "../navigation";
import { useHistory } from "react-router-dom";
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
import { firestore } from "../../firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Trackr(props) {
  let history = useHistory();
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );
  const applicationRef = firestore
    .collection(`jobs/${authentication["uid"]}/jobs`)
    .orderBy("date_updated", "asc");
  let [applicationsInitialValue] = useCollectionData(applicationRef, {
    idField: "id",
  });
  const [applications, setApplications] = useState();
  const [order, setOrder] = useState("ASC");
  const [sort, setSort] = useState("UPDATED");
  useEffect(() => {
    //setApplications(sortApplications(order, sort, applicationsInitialValue));
    if (applicationsInitialValue) {
      sortApplications(order, sort, applicationsInitialValue);
    }
  }, [applicationsInitialValue]);
  useEffect(() => {
    if (applications) sortApplications(order, sort, applications);
  }, [order, sort]);
  function sortApplications(order, sort, applications) {
    console.log("called");
    let updatedApplications = [...applications];
    switch (sort) {
      case "DEADLINE":
        console.log("sort by deadline from furthest to closest");
        updatedApplications.sort((a, b) => {
          let aDate = a.deadline.toDate();
          let bDate = b.deadline.toDate();
          if (aDate.getTime() === new Date(0).getTime()) return bDate;
          if (aDate.getTime() === new Date(0).getTime()) return aDate;
          return order === "ASC" ? aDate - bDate : bDate - aDate;
        });
        setApplications(updatedApplications);
        break;
      case "STATUS":
        console.log("sort by status (interested => offer)");
        updatedApplications.sort((a, b) => {
          return order === "ASC"
            ? a.app_status - b.app_status
            : b.app_status - a.app_status;
        });
        setApplications(updatedApplications);
        break;
      case "UPDATED":
        updatedApplications.sort((a, b) => {
          let aDate = a.date_updated.toDate();
          let bDate = b.date_updated.toDate();
          return order === "ASC" ? aDate - bDate : bDate - aDate;
        });
        setApplications(updatedApplications);
        break;
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
                    onClick={() => {
                      console.log("push");
                      history.push("/trackr/track1");
                    }}
                  >
                    New App
                  </NewAppBtn>
                </NewAppBtnDiv>
                <Sort
                  className="dropdown"
                  onChange={(e) => setSort(e.target.value)}
                >
                  <Option value="">Sort by</Option>
                  <Option value="UPDATED">Updated </Option>
                  <Option value="DEADLINE"> Deadline</Option>
                  <Option value="STATUS"> Status</Option>
                </Sort>
                <Sort
                  className="dropdown"
                  onChange={(e) => setOrder(e.target.value)}
                >
                  <Option value="ASC">Asc</Option>
                  <Option value="DESC">Desc</Option>
                </Sort>
              </HeadingContent>
            </Headding>
            {applications && applications.length === 0 ? (
              <EmptyApplication></EmptyApplication>
            ) : (
              applications &&
              applications.map((application) => (
                <Application
                  key={application.id}
                  {...application}
                  sortApplications={sortApplications}
                />
              ))
            )}
          </ContentDiv>
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
}
