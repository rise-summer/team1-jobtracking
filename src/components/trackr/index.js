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

import { useContext, useEffect, useState } from "react";
//import { ApplicationContext } from "../../ApplicationContext";

import Application from "./Application";

import { auth } from "../../firebaseSetup";
import axios from "axios";

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

  //const [applications, setApplications] = useContext(ApplicationContext);
  const [applications, setApplications] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await auth.currentUser.getIdToken();
        const res = await axios.get("/api/jobs", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(res.data.data);
        setApplications(res.data.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

  const deleteApp = async () => {
    try {
      const token = await auth.currentUser.getIdToken();
      applications.map(async application => {
        const res = await axios.delete(`/api/job/delete/${application.job_id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(res)
      })

      // setApplications(res.data.data)
    } catch (err) {
      console.log(err);
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
              <Sort className="dropdown">
                <Option value="" selected disabled hidden>
                  Sort by
                </Option>
                <Option>Deadline</Option>
                <Option>Status</Option>
              </Sort>
              <button onClick={deleteApp}>DELETE APP</button>
            </Headding>
            {/* {this.getContent()} */}

            {applications.map((application) => (
              <Application
                companyName={application.company}
                position={application.position}
                status={application.app_status}
                link={application.link}
                date={application.date_updated}
                deadline={application.deadline}
                location={application.location}
                description={application.description}
                notes={application.notes}
              />
            ))}
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
};

export default Trackr;
