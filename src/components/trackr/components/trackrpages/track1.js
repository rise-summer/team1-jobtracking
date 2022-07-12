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
import {
  getFunctions,
  connectFunctionsEmulator,
  httpsCallable,
} from "firebase/functions";
import firebase from "../../../../firebaseSetup";
import styled from "styled-components";

export default function Track1() {
  firebase.functions().useEmulator("localhost", 5001);
  const [link, setLink] = useState(undefined);
  const [res, setRes] = useState({});
  const [loading, setLoading] = useState(undefined);
  const history = useHistory();
  var sanitizedMessage = "";
  const linkedInScraper = firebase.functions().httpsCallable("linkedInScraper");
  const indeedScraper = firebase.functions().httpsCallable("indeedScraper");
  //const angelScraper = firebase.functions().httpsCallable("angelScraper");
  const chooseScraper = (link) => {
    const { hostname } = new URL(link);
    if (hostname === "www.linkedin.com") {
      return linkedInScraper({
        link: link,
      });
    }
    if (hostname === "www.indeed.com") {
      return indeedScraper({
        link: link,
      });
    }
    /*
    if (hostname === "angel.co") {
      return angelScraper({
        link: link,
      });
    }
    */
  };
  const isInAvailableDomains = (link) => {
    const availableDomains = ["www.linkedin.com", "www.indeed.com"];
    try {
      const { hostname } = new URL(link);
      console.log(hostname, link);
      return availableDomains.includes(hostname);
    } catch (err) {
      console.log(err);
      history.push({ pathname: "/trackr/track2", state: { link: link } });
    }
  };
  async function handleSubmit(event) {
    var data = {};
    event.preventDefault();
    if (isInAvailableDomains(link)) {
      setLoading(true);
      await chooseScraper(link)
        .then((result) => {
          console.log(result, result.data);
          data = { ...result.data.data };
          data.link = link;
          console.log(data);
          setLoading(false);
          history.push({
            pathname: "/trackr/track2",
            state: data,
          });
        })
        .catch((err) => {
          console.log(err);
          history.push({ pathname: "/trackr/track2", state: { link: link } });
        });
    } else {
      history.push({ pathname: "/trackr/track2", state: { link: link } });
    }
  }

  return (
    <Fragment>
      <Outer>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <a
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                cursor: "pointer",
                color: "#677394",
                margin: "10px",
              }}
              onClick={() => history.push("/mainfeed")}
            >
              <span style={{ marginTop: "2px", marginRight: "4px" }}>◀</span>
              <span style={{ paddingLeft: "5px" }}>
                <b>back to applications</b>
              </span>
            </a>

            <Heading style={{ marginTop: "40px" }}>
              <Title>Add a new application </Title>
              <Subtitle>We’re excited to see where this takes you!</Subtitle>
              <form onSubmit={handleSubmit}>
                <Input
                  placeholder="https://link_to_your_application_here.com"
                  onChange={(e) => setLink(e.target.value)}
                />
                {loading ? (
                  <Loader type="ThreeDots" color="#175596" />
                ) : (
                  <SubmitBtn type="submit">Submit link</SubmitBtn>
                )}
              </form>
            </Heading>
          </ContentDiv>
        </BackgroundDiv>
      </Outer>
    </Fragment>
  );
}
