import React, { Fragment, useContextm, useEffect } from "react";
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
// import { AuthenticationContext } from "../../AuthenticationContext";
import { auth, firestore } from "../../firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "../../firebaseSetup";

export default function Trackr(props) {

  
  alert(firebase.auth().currentUser.uid)

  const applicationRef = firestore.collection(`jobs/${firebase.auth().currentUser.uid}/jobs`);
  const [applications] = useCollectionData(applicationRef, {idField: "id"});
  
  

  // const [authentication, setAuthentication] = useContext(AuthenticationContext);
  
  // const [applications, setApplications] = useState([]);


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
                <Sort className="dropdown" onChange={undefined}>
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
