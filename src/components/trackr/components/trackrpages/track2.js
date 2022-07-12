import React, { Fragment } from "react";
import Navigation from "../../../navigation";
import backarrow from "../../../../images/backarrow.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  BackgroundDiv,
  ContentDiv,
  BackBtn,
  BackSvg,
  Heading,
  Title,
  Subtitle,
  Input,
  Input2,
  TextAreaDiv,
  Slider,
  SliderDiv,
  Label,
  SubmitBtn,
  Textarea,
} from "./style";
import firebase, { auth, firestore } from "../../../../firebaseSetup";

export default function Track2(props) {
  console.log(props)
  const state = props.location.state;
  console.log(state);
  const link = useFormInput(state.link);
  const role = useFormInput(state.title);
  const company = useFormInput(state.company);
  const deadline = useFormInput("");
  const location = useFormInput(state.place);
  const description = useFormInput(state.desc);
  const [slider, setSlider] = useState(0);
  const [stage, setStage] = useState("Interested");
  const history = useHistory();
  const jobsRef = firestore.collection(`jobs/${auth.currentUser.uid}/jobs`);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(stage);
      
    jobsRef.add({
      uid: auth.currentUser.uid,
      position: role.value ? role.value : "",
      company: company.value ? company.value : "",
      app_status: slider ? slider : 0,
      link: link.value ? link.value : "",
      deadline: deadline.value ? firebase.firestore.Timestamp.fromDate(new Date(deadline.value)) : firebase.firestore.Timestamp.now(),
      location: location.value ? location.value : "",
      description: description.value ? description.value : "",
      notes: "",
      date_updated: firebase.firestore.Timestamp.now()
    });

    history.push({
      pathname: "/trackr/track3",
      state: JSON.stringify({ company: company.value, position: role.value }),
    });
  }

  function handleSlider(e) {
    var rangeValues = {
      0: "Interested",
      1: "Applied",
      2: "Interview",
      3: "Offer",
    };
    setSlider(e.target.value);
    setStage(rangeValues[e.target.value]);
    console.log(slider);
    console.log(stage);
  }
  return (
    <Fragment>
      <div>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <BackBtn>
              <a href="/trackr/track1">
                <BackSvg src={backarrow} alt="backarrow error"></BackSvg>
              </a>
            </BackBtn>
            <Heading>
              <Title>Great!</Title>
              <Subtitle>Click to edit any of the parameters</Subtitle>
              <form onSubmit={handleSubmit}>
                <Input
                  placeholder="https://link_to_your_application_here.com"
                  // defaultValue={useSelector((state) => state.link)}
                  {...link}
                />
                <Input2 placeholder="Software Engineering Intern" {...role} />
                <Input2 placeholder="Facebook" {...company} />
                <Input2
                  defaultValue="2014-02-09"
                  type="date"
                  {...deadline}
                />
                <Input2 placeholder="Menlo Park, California" {...location} />
                <TextAreaDiv>
                  <Textarea
                    placeholder="As an intern, you'll become an expert on the Facebook Terminal and gain a deeper understanding of technology and finance. In addition to your projects, you'll participate in coding challenges, attend tech talks and network with other interns."
                    {...description}
                  />
                </TextAreaDiv>
                <Subtitle>What stage are you in applying?</Subtitle>
                <SliderDiv>
                  <Label>{stage}</Label>
                  <Slider
                    type="range"
                    min="0"
                    max="3"
                    value={slider}
                    onChange={handleSlider}
                  />
                </SliderDiv>
                <SubmitBtn>Complete</SubmitBtn>
              </form>
            </Heading>
          </ContentDiv>
        </BackgroundDiv>
      </div>
    </Fragment>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  console.log(value);
  return { value, onChange: handleChange };
}
