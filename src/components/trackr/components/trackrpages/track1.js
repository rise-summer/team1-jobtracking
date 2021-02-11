import React, { Component, Fragment } from "react";
import Navigation from "../../../navigation";
import backarrow from "../../../../images/backarrow.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ContentDiv,
  Title,
  Heading,
  Subtitle,
  Input,
  SubmitBtn,
  BackgroundDiv,
  BackBtn,
  BackSvg,
} from "./style";
import { connect } from "react-redux";
import axios from "axios";
import { auth } from "../../../../firebaseSetup";

export default function Track1() {
  const [link, setLink] = useState("");
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const token = await auth.currentUser.getIdToken();
      let res = await axios.post(
        "/api/scrape",
        {
          link: link,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const parsed_res = JSON.parse(res.data.data)
      parsed_res.link = link;

      console.log(parsed_res);
      history.push({
        pathname: "/trackr/track2",
        state: JSON.stringify(parsed_res),
      });
    } catch (err) {
      console.log("Error response:");
      console.log(err.request);
      console.log(err.response);
    }
    // const data = await scraper(event.target.value);
    // console.log(data);
    // this.props.history.push("/trackr/track2");
  }

  function handleChange(event) {
    setLink(event.target.value);
  }

  function handleBack() {
    this.props.dispatch({
      type: "STORE_RESET",
    });
    this.props.history.push("/trackr");
  }

  return (
    <Fragment>
      <Navigation />
      <BackgroundDiv>
        <ContentDiv>
          <BackBtn>
            <a onClick={handleBack}>
              <BackSvg src={backarrow} alt="backarrow error"></BackSvg>
            </a>
          </BackBtn>
          <Heading>
            <Title>Add a new application </Title>
            <Subtitle>We’re excited to see where this takes you!</Subtitle>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="https://link_to_your_application_here.com"
                onChange={handleChange}
              />
              {/* <a> */}
              <SubmitBtn type="submit">Submit</SubmitBtn>
              {/* </a> */}
            </form>
          </Heading>
        </ContentDiv>
      </BackgroundDiv>
    </Fragment>
  );
}
