import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import backarrow from "../../images/backarrow.svg";

import styled from "styled-components";

import { connect } from "react-redux";

import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../ApplicationContext";

import { auth } from "../../firebaseSetup";
import axios from "axios";

const Track2 = (props) => {
  const [applications, setApplications] = useContext(ApplicationContext);

  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [stage, setStage] = useState("Interested");
  const [stageNum, setStageNum] = useState("0");

  const handleSlider = (e) => {
    var rangeValues = {
      0: "Interested",
      1: "Applied",
      2: "Interview",
      3: "Offer",
    };
    console.log(e.target.value);

    setStage(rangeValues[e.target.value]);

    setStageNum(e.target.value);
  };

  const handleSubmit = async (e) => {
    // this.props.dispatch({
    //   type: "ADD_APPLICATION",
    //   payload: {
    //     url: this.state.url,
    //     role: this.state.role,
    //     company: this.state.company,
    //     deadline: this.state.deadline,
    //     location: this.state.location,
    //     description: this.state.description,
    //     stage: this.state.stage,
    //   },
    // });

    e.preventDefault();
    setApplications((prevApplications) => [{ position }, ...prevApplications]);

    try {
      const token = await auth.currentUser.getIdToken();
      const res = await axios.post(
        "/api/job/create",
        {
          job_title: position,
          company: company,
          app_process: stageNum,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    props.history.push("/trackr/track3");
  };

  const updatePosition = (e) => {
    setPosition(e.target.value);
    console.log(position);
  };

  const updateCompany = (e) => {
    setCompany(e.target.value);
    console.log(company);
  };

  const handleChange = (event, key) => {
    switch (key) {
      case "URL":
        return props.dispatch({
          type: "ADD_URL",
          payload: { url: event.target.value },
        });
      case "ROLE":
        setPosition(event.target.value);

        return props.dispatch({
          type: "ADD_ROLE",
          payload: { role: event.target.value },
        });
      case "COMPANY":
        return props.dispatch({
          type: "ADD_COMPANY",
          payload: { company: event.target.value },
        });
      case "DEADLINE":
        return props.dispatch({
          type: "ADD_DEADLINE",
          payload: { deadline: event.target.value },
        });
      case "LOCATION":
        return props.dispatch({
          type: "ADD_LOCATION",
          payload: { location: event.target.value },
        });
      case "DESCRIPTION":
        return props.dispatch({
          type: "ADD_DESCRIPTION",
          payload: { description: event.target.value },
        });
      case "STAGE":
        return props.dispatch({
          type: "ADD_STAGE",
          payload: { stage: event.target.value },
        });
    }
  };

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
                value={props.url}
                id="link"
                placeholder="https://link_to_your_application_here.com"
                onChange={(e) => handleChange(e, "URL")}
              />
              <Input2
                value={position}
                placeholder="Software Engineering Intern"
                id="role"
                onChange={updatePosition}
              />
              <Input2
                value={company}
                placeholder="Facebook"
                id="company"
                onChange={updateCompany}
              />
              <Input2
                value={props.deadline}
                placeholder="Deadline: 12/01/20"
                id="deadline"
                onChange={(e) => handleChange(e, "DEADLINE")}
                type="date"
              />
              <Input2
                value={props.location}
                placeholder="Menlo Park, California"
                id="location"
                onChange={(e) => handleChange(e, "LOCATION")}
              />
              <TextAreaDiv>
                <Textarea
                  value={props.description}
                  placeholder="As an intern, you'll become an expert on the Facebook Terminal and gain a deeper understanding of technology and finance. In addition to your projects, you'll participate in coding challenges, attend tech talks and network with other interns."
                  id="description"
                  onChange={(e) => handleChange(e, "DESCRIPTION")}
                />
              </TextAreaDiv>
              <Subtitle>What stage are you in applying?</Subtitle>
              <SliderDiv>
                <Label>{stage}</Label>
                <Slider
                  type="range"
                  min="0"
                  max="3"
                  onChange={(e) => {
                    handleSlider(e);
                  }}
                  defaultValue="0"
                />
              </SliderDiv>
              <SubmitBtn>Complete</SubmitBtn>
            </form>
            {/* <Link to="/trackr">Link</Link> */}
          </Heading>
        </ContentDiv>
      </BackgroundDiv>
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    url: state.applicationReducer.url,
    role: state.applicationReducer.role,
    company: state.applicationReducer.company,
    deadline: state.applicationReducer.deadline,
    location: state.applicationReducer.location,
    description: state.applicationReducer.description,
  };
}

export default connect(mapStateToProps)(Track2);

const BackgroundDiv = styled.div`
  font-family: "Open Sans", sans-serif;
  padding: 10vh;
  background: #ebebeb;
  height: 100%;
`;

const ContentDiv = styled.div`
  background: #f5f5f5;
  border-radius: 15px;
  padding: 10px;
  width: 800px;
  margin: 50px auto;
`;

const Heading = styled.div`
  justify-content: center;
  text-align: center;
`;

const BackBtn = styled.button`
  //font-weight: bold;
  //font-size: 29px;
  text-decoration: none;
  background: none;
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  //color: #5c5c5c;
  margin: 20px auto auto 20px;
  cursor: pointer;
  &:hover {
    color: #c0c0c0;
  }
`;

const BackSvg = styled.img`
  width: 25px;
  height: 25px;
  &:active {
    transform: scale(0.8);
    transition: 0.1s;
    filter: opacity(30%);
  }
  filter: opacity(50%);
  text-decoration: none;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  margin: 0px;
`;

const Subtitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;

const Input = styled.input`
  background: #ffffff;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  width: 650px;
  height: 50px;
  border: none;
  font-size: 20px;
  border: none;
  outline: none;
  margin: 10px auto;
  padding: 0px 20px 0px 20px;
  &::placeholder {
    font-style: italic;
    font-size: 20px;
    color: #6f6f6f;
  }
`;

const Input2 = styled.input`
  background: #ffffff;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  width: 300px;
  height: 50px;
  border: none;
  font-size: 20px;
  border: none;
  outline: none;
  margin: 10px 10px 10px 10px;
  padding: 0px 20px 0px 20px;
  &::placeholder {
    font-style: italic;
    font-size: 20px;
    color: #6f6f6f;
  }
`;

const SubmitBtn = styled.button`
  background: #175596;
  border-radius: 8px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  color: #f2f0f0;
  margin: 30px auto;
  display: block;
  width: 140px;
  height: 49px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

const TextAreaDiv = styled.div`
  margin: 10px auto;
`;

const Textarea = styled.textarea`
  font-family: "Open Sans", sans-serif;
  background: #ffffff;
  border: none;
  outline: none;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  width: 650px;
  height: 150px;
  font-size: 19px;
  resize: none;
  min-height: 5em;
  overflow: auto;
  /* RISE for greyed out text */
  padding: 15px 15px 15px 15px;
  &::placeholder {
    color: #888888;
    //padding: 15px 15px 15px 15px;
  }
  margin: 0px auto;
`;

const Slider = styled.input`
  /* margin: 20px auto;
  cursor: pointer;
  width: 500px; */
  /* -webkit-appearance: none; */
  &::-ms-track {
    width: 300px;
    height: 5px;

    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;

    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: 6px 0;

    /*remove default tick marks*/
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #175596;
    border-radius: 10px;
  }
  &::-ms-fill-upper {
    background: #ddd;
    border-radius: 10px;
  }
  &::-ms-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #175596;
  }
  &::-ms-fill-lower {
    background: #175596;
  }
  &::-ms-fill-upper {
    background: #ccc;
  }
  /* &::-webkit-slider-runnable-track {
    background: #cfcece;
    height: 5px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 40px;
    width: 40px;
    background: #175596;
    margin: -18px 0px 0px 0px;
    border-radius: 50%;
  } */
  /* &:focus {
    -webkit-appearance: none;
    outline: none;
  } */
`;

const SliderDiv = styled.div`
  background: #ffffff;
  width: 600px;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  padding: 10px;
  margin: 0px auto;
`;

const Label = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: #5c5c5c;
  /* display: table; */
  margin: 0px auto;
`;

const Subtitle2 = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 800;
  font-size: 29px;
  line-height: 39px;
  text-align: center;
  border: none;
  color: #5c5c5c;
  &:hover {
    color: #2071c7;
  }
`;
