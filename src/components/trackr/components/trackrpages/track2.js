import React, { Fragment } from "react";
import Navigation from "../../../navigation";
import backarrow from "../../../../images/backarrow.svg";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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
import { auth } from "../../../../firebaseSetup";
import axios from "axios";

export default function Track2(props) {
  const application = JSON.parse(props.location.state);
  console.log(application);
  const link = useFormInput(application.link);
  const role = useFormInput(application.title);
  const company = useFormInput(application.company);
  const deadline = useFormInput("");
  const location = useFormInput(application.place);
  const description = useFormInput(application.desc);
  const [slider, setSlider] = useState("0");
  const [stage, setStage] = useState("Interested");
  const dispatch = useDispatch();
  const date = new Date().getTime();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(stage);
    dispatch({
      type: "ADD_APPLICATION",
      payload: {
        id: date,
        link: link.value,
        role: role.value,
        company: company.value,
        deadline: deadline.value,
        location: location.value,
        description: description.value,
        stage: slider,
      },
    });
    try {
      const token = await auth.currentUser.getIdToken();
      console.log(token);
      const res = await axios.post(
        "/api/job/create",
        {
          job_title: role.value,
          company: company.value,
          app_process: slider,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log("Error response:");
      console.log(err.request);
      console.log(err.response);
    }
    props.history.push("/trackr/track3");
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
                defaultValue={useSelector((state) => state.link)}
                {...link}
              />
              <Input2 placeholder="Software Engineering Intern" {...role} />
              <Input2 placeholder="Facebook" {...company} />
              <Input2
                placeholder="Deadline: 12/01/20"
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
