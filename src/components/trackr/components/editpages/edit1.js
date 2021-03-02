import React, { Fragment } from "react";
import Navigation from "../../../navigation";
import { useState } from "react";
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
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../../../../firebaseSetup";
import axios from "axios";

export default function Edit1(props) {
  const rangeValues = {
    0: "Interested",
    1: "Applied",
    2: "Interview",
    3: "Offer",
  };
  const application = JSON.parse(props.location.state);
  console.log(application);
  const link = useFormInput(application.link);
  const role = useFormInput(application.position);
  const company = useFormInput(application.companyName);
  const deadline = useFormInput(application.deadline);
  const location = useFormInput(application.location);
  const description = useFormInput(application.description);
  const [slider, setSlider] = useState(parseInt(application.stage));
  const [stage, setStage] = useState(rangeValues[application.stage]);
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  function handleSlider(e) {
    setStage(rangeValues[e.target.value]);
    setSlider(e.target.value);
  }

  function extend() {
    setClicked(!clicked);
  }

  const completeUpdate = async () => {
    try {
      const token = await auth.currentUser.getIdToken();
      await axios.put(
        `/api/job/update/${application.id}`,
        {
          position: role.value,
          company: company.value,
          app_status: slider,
          link: link.value,
          deadline: deadline.value,
          location: location.value,
          description: description.value,
          notes: "",
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    history.push("/trackr");
  };

  return (
    <Fragment>
      <Navigation />
      <BackgroundDiv>
        <ContentDiv>
          <Heading>
            <Title>What step are you at now?</Title>
            <Subtitle>Click to edit any paramerters.</Subtitle>
            <SliderDiv>
              <Label>{stage}</Label>
              <Slider
                type="range"
                min="0"
                max="3"
                onChange={handleSlider}
                defaultValue={slider}
              />
            </SliderDiv>
            <Subtitle>Add notes to your application log here:</Subtitle>
            <Textarea placeholder="I was really nervous about this, but I’m glad I was able to work on it and submit it. Hopefully, all goes well and I’m able to successfully submit it! " />
            {clicked ? (
              <div>
                <Subtitle>Edit position information:</Subtitle>
                <Input
                  placeholder="https://link_to_your_application_here.com"
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
                <Textarea {...description}></Textarea>
              </div>
            ) : (
              <div></div>
            )}
            <BottomDiv>
              <EditBtn onClick={extend}>Edit position information</EditBtn>
              <SubmitBtn style={{ fontSize: "17px" }} onClick={completeUpdate}>
                Complete Update
              </SubmitBtn>
            </BottomDiv>
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
