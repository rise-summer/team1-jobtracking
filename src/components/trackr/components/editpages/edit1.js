import React, { Fragment } from "react";
import Navigation from "../../../navigation";
import { useState, useEffect } from "react";
import {
  ContentDiv,
  BackgroundDiv,
  Title,
  Subtitle,
  SliderDiv,
  Label,
  Slider,
  Heading,
  Textarea,
  SubmitBtn,
  Input2,
  Input,
} from "../trackrpages/style";

import { BottomDiv, EditBtn } from "./style";
import { useHistory } from "react-router-dom";
import firebase, { auth, firestore } from "../../../../firebaseSetup";
import moment from "moment";

export default function Edit1(props) {
  console.log(props.location.state);
  const rangeValues = {
    "0": "Interested",
    "1": "Applied",
    "2": "Interview",
    "3": "Offer",
  };
  const id = props.location.state;
  async function getDoc(id) {
    const snapshot = await firestore
      .collection(`jobs/${auth.currentUser.uid}/jobs`)
      .doc(id)
      .get();
    const data = snapshot.data();
    setApplication({
      ...application,
      link: data.link,
      position: data.position,
      company: data.company,
      deadline: moment(data.deadline.toDate()).format("YYYY-MM-DD"),
      location: data.location,
      description: data.description,
      slider: data.app_status,
      stage: rangeValues[data.app_status],
      notes: data.notes
    });
  }
  const [application, setApplication] = useState({
    link: "",
    position: "",
    company: "",
    deadline: "",
    location: "",
    description: "",
    slider: "",
    stage: "",
    notes: "",
  });
  console.log(application);
  useEffect(() => {
    getDoc(id);
  },[]);

  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  function extend() {
    setClicked(!clicked);
  }

  function update() {
    firestore
      .collection(`jobs/${auth.currentUser.uid}/jobs`)
      .doc(id)
      .update({
        link: application.link,
        position: application.position,
        company: application.company,
        deadline: firebase.firestore.Timestamp.fromDate(
          new Date(application.deadline)
        ),
        location: application.location,
        description: application.description,
        app_status: application.slider.toString(),
        date_updated: firebase.firestore.Timestamp.now(),
        notes: application.notes
      });
      history.push('/trackr');
  }

  return (
    <Fragment>
      <Navigation />
      <BackgroundDiv>
        <ContentDiv>
          <Heading>
            <Title>What step are you at now?</Title>
            <Subtitle>Click to edit any paramerters.</Subtitle>
            <SliderDiv>
              <Label>{application.stage}</Label>
              <Slider
                type="range"
                min="0"
                max="3"
                value={application.slider}
                onChange={(e) => {
                  setApplication({ ...application, slider: e.target.value, stage: rangeValues[e.target.value]});
                  console.log(e.target.value)
                }}
                
              />
            </SliderDiv>
            <Subtitle>Add notes to your application log here:</Subtitle>
            <Textarea placeholder="I was really nervous about this, but I’m glad I was able to work on it and submit it. Hopefully, all goes well and I’m able to successfully submit it! " defaultValue={application.notes}  onChange={(e) => {
                    setApplication({ ...application, notes: e.target.value });
                  }}/>
            {clicked ? (
              <div>
                <Subtitle>Edit position information:</Subtitle>
                <Input
                  placeholder="https://link_to_your_application_here.com"
                  defaultValue={application.link}
                  onChange={(e) => {
                    setApplication({ ...application, link: e.target.value });
                  }}
                />
                <Input2
                  placeholder="Software Engineering Intern"
                  defaultValue={application.position}
                  onChange={(e) => {
                    setApplication({
                      ...application,
                      position: e.target.value,
                    });
                  }}
                />
                <Input2
                  placeholder="Facebook"
                  defaultValue={application.company}
                  onChange={(e) => {
                    setApplication({
                      ...application,
                      company: e.target.value,
                    });
                  }}
                />
                <Input2
                  type="date"
                  defaultValue={application.deadline}
                  onChange={(e) => {
                    setApplication({
                      ...application,
                      deadline: e.target.value,
                    });
                  }}
                />
                <Input2
                  placeholder="Menlo Park, California"
                  defaultValue={application.location}
                  onChange={(e) => {
                    setApplication({
                      ...application,
                      location: e.target.value,
                    });
                    console.log(application.location)
                  }}
                />
                <Textarea
                  defaultValue={application.description}
                  onChange={(e) => {
                    setApplication({
                      ...application,
                      description: e.target.value,
                    });
                  }}
                ></Textarea>
              </div>
            ) : (
              <div></div>
            )}
            <BottomDiv>
              <EditBtn onClick={extend}>Edit position information</EditBtn>
              <SubmitBtn style={{ fontSize: "17px" }} onClick={update}>
                Complete Update
              </SubmitBtn>
            </BottomDiv>
          </Heading>
        </ContentDiv>
      </BackgroundDiv>
    </Fragment>
  );
}
