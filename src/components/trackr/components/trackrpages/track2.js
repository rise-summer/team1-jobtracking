import React, { Fragment, useContext } from "react";
import Navigation from "../../../navigation";
import backarrow from "../../../../images/backarrow.svg";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ButtonDropDown from "../applicationfeed/ButtonDropDown";
import { ApplicationButton } from "../../../../styles/shared";
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
  ApplicationButtonContainer,
  Textarea,
} from "./style";
import { SubmitButton } from "../../../../styles/shared";
import useAppzi from "../../../../hooks/useAppzi";
import firebase, { auth, firestore } from "../../../../firebaseSetup";
import { AuthenticationContext } from "../../../../AuthenticationContext";

export default function Track2(props) {
  useAppzi("rddQu");
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );
  const buttonSvg1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <g transform="translate(24 0) scale(-1 1)">
        <path
          fill="white"
          d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"
        />
        <path
          fill="white"
          d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"
        />
      </g>
    </svg>
  );
  const buttonSvg2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m4 12l6 6L20 6"
      />
    </svg>
  );
  const buttonSvg3 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="white" stroke-width="2">
        <circle cx="12" cy="7" r="5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"
        />
      </g>
    </svg>
  );
  const statusConverter = [
    "Interested",
    "Applied",
    "Interviewed",
    "Offered",
    "Accepted",
    "Rejected",
    "Declined",
  ];
  const colors = [
    "#6175A9",
    "#61A5A9",
    "#A21660",
    "#9FA216",
    "#61A975",
    "#A99161",
    "#A96199",
  ];
  const svgOrder = [
    buttonSvg1,
    buttonSvg2,
    buttonSvg3,
    buttonSvg2,
    buttonSvg1,
    buttonSvg1,
    buttonSvg1,
  ];

  const [slider, setSlider] = useState();
  const [stage, setStage] = useState();
  const history = useHistory();
  const state = props.location.state;
  let error = state && state.error ? state.error : "";
  const link = useFormInput(state ? state.link : "");
  const role = useFormInput(state ? state.title : "");
  const company = useFormInput(state ? state.company : "");
  const deadline = useFormInput("");
  const location = useFormInput(state ? state.place : "");
  const description = useFormInput(state ? state.description : "");
  const [drop, setDrop] = useState(false);
  let jobsRef;
  const downArrowSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="black"
        d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"
      />
    </svg>
  );

  if (JSON.stringify(props) === "{}") {
    return <Redirect to="/trackr" />;
  } else {
    jobsRef = firestore.collection(`jobs/${authentication["uid"]}/jobs`);
    console.log(state);
    console.log(description);
    async function handleSubmit(e) {
      e.preventDefault();
      console.log(stage);
      console.log(deadline);
      console.log(auth.currentUser.uid, authentication["uid"]);
      jobsRef.add({
        uid: auth.currentUser.uid,
        position: role.value ? role.value : "",
        company: company.value ? company.value : "",
        app_status: slider ? slider : "0",
        link: link.value ? link.value : "",
        deadline: deadline.value
          ? firebase.firestore.Timestamp.fromDate(new Date(deadline.value))
          : firebase.firestore.Timestamp.fromDate(new Date(0)),
        location: location.value ? location.value : "",
        description: description.value ? description.value : "",
        notes: "",
        date_updated: firebase.firestore.Timestamp.now(),
      });

      history.push({
        pathname: "/trackr/track3",
        state: JSON.stringify({
          company: company.value,
          position: role.value,
          app_status: slider ? slider : "0",
        }),
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
          <BackgroundDiv drop={drop}>
            <ContentDiv style={{ marginTop: "20px" }}>
              <BackBtn>
                <BackSvg
                  src={backarrow}
                  alt="backarrow error"
                  onClick={() => history.push("/trackr/track1")}
                />
              </BackBtn>
              <Heading>
                <Title>Great!</Title>
                <Subtitle style={{ color: `${error ? "#EB5757" : "black"} ` }}>
                  {error ? error : "Click to edit any of the parameters"}
                </Subtitle>
                <form onSubmit={handleSubmit}>
                  <Input
                    placeholder="https://link_to_your_application_here.com"
                    // defaultValue={useSelector((state) => state.link)}
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
                  <ApplicationButtonContainer
                    drop={drop}
                    onClick={() => setDrop(!drop)}
                  >
                    {slider ? (
                      <ApplicationButton color={colors[slider]}>
                        {svgOrder[slider]}
                        {statusConverter[slider]}
                      </ApplicationButton>
                    ) : (
                      <>
                        <div>Select Your Status</div>
                        <div
                          style={{
                            display: "flex",
                            transform: `${drop ? "rotate(-180deg)" : ""}`,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "3px",
                            marginLeft: "5px",
                          }}
                        >
                          {downArrowSvg}
                        </div>
                      </>
                    )}

                    {drop && (
                      <ButtonDropDown
                        setButtonDrop={setDrop}
                        setUpdatedStatus={setSlider}
                      ></ButtonDropDown>
                    )}
                  </ApplicationButtonContainer>
                  <SubmitButton
                    primary
                    value="Finish adding application"
                    style={{ margin: "30px auto" }}
                  ></SubmitButton>
                </form>
              </Heading>
            </ContentDiv>
          </BackgroundDiv>
        </div>
      </Fragment>
    );
  }
}
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  console.log(value);
  return { value, onChange: handleChange };
}
