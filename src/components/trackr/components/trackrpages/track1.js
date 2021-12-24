// import React, { Fragment } from "react";
import Navigation from "../../../navigation";
import backarrow from "../../../../images/backarrow.svg";
import React, { Fragment, useState, useEffect } from "react";
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
import { getFunctions, httpsCallable } from "firebase/functions";
import firebase from "../../../../firebaseSetup";
import styled from "styled-components";

export default function Track1() {
  const [link, setLink] = useState(undefined);
  const [res, setRes] = useState({});
  const [loading, setLoading] = useState(undefined);
  const history = useHistory();
  var sanitizedMessage = "";
  const scrape = firebase.functions().httpsCallable("scrape");

  async function handleSubmit(event) {
    var data = {}
    event.preventDefault();
    setLoading(true);
    await scrape({
      link: link,
    }).then((result) => {
      console.log(result.data.data);
      data = {...result.data.data}
      data.link = link;
      console.log(data)
      setLoading(false);
      history.push({
        pathname: "/trackr/track2",
        state: data,
      });
    });
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
                  onChange={e => setLink(e.target.value)}
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
