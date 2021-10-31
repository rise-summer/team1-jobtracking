import React, { Fragment } from "react";
import Navigation from "../../../navigation";
import backarrow from "../../../../images/backarrow.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
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
  Outer,
} from "./style";
import axios from "axios";
import { auth } from "../../../../firebaseSetup";

import styled from "styled-components";

// const scrape = require("../../../../../server/server/apis/web_scraper")

export default function Track1() {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(undefined);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      fetch("/users", {
        method: "POST",
        body: {"link":link},
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.text())
        .then((res) => console.log(res));
      // let res = await scrape(link);
      // const parsed_res = JSON.parse(res.data.data);
      // parsed_res.link = link;
      // history.push({
      //   pathname: "/trackr/track2",
      //   state: link,
      // });
    } catch (err) {
      console.log("Error response:");
      console.log(err.request);
      console.log(err.response);
    }
  }

  function handleChange(event) {
    setLink(event.target.value);
  }

  return (
    <Fragment>
      <Outer>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <BackBtn>
              <div
                onClick={() => {
                  history.push("/trackr");
                }}
              >
                <BackSvg src={backarrow} alt="backarrow error"></BackSvg>
              </div>
            </BackBtn>
            <Heading>
              <Title>Add a new application </Title>
              <Subtitle>We’re excited to see where this takes you!</Subtitle>
              <form onSubmit={handleSubmit}>
                <Input
                  placeholder="https://link_to_your_application_here.com"
                  onChange={handleChange}
                />
                {loading ? (
                  <Loader type="ThreeDots" color="#175596" />
                ) : (
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                )}
              </form>
            </Heading>
          </ContentDiv>
        </BackgroundDiv>
      </Outer>
    </Fragment>
  );
}
