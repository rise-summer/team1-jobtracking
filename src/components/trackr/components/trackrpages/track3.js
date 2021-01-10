// import { Slider } from "antd";
import React, { Component, Fragment } from "react";
import Navigation from "../../../navigation";
import backarrow from "../../../../images/backarrow.svg";
import styled from "styled-components";

import {
  ContentDiv,
  Title,
  BackgroundDiv,
  Subtitle,
  BackBtn,
  Heading,
  BackSvg,
  SubmitBtn,
  Subtitle2,
} from "./style";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { role: state.applicationReducer.role };
};

class Track3 extends Component {
  constructor() {
    super();
    this.eraseCache = this.eraseCache.bind(this);
  }

  eraseCache() {
    console.log("here");
    this.props.dispatch({
      type: "STORE_RESET",
      payload: {},
    });
    this.props.history.push("/trackr");
    // this.props.history.push("/trackr");
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <BackBtn>
              <a href="/trackr/track2">
                <BackSvg src={backarrow} alt="backarrow error"></BackSvg>
              </a>
            </BackBtn>
            <Heading>
              <Title>Great job applying!</Title>
              {/* <Subtitle>
                You have successfully added
                <span style={{ color: "#2071c7" }}> {this.props.role} </span> to
                your tracked applications.
              </Subtitle> */}

              <Subtitle>
                You have successfully added
                <span style={{ color: "#2071c7" }}>
                  {" "}
                  Google Software Engineer{" "}
                </span>{" "}
                to your tracked applications.
              </Subtitle>

              <Subtitle>See what other people are saying here:</Subtitle>
              <Subtitle2>#GoogleSoftwareEngineer</Subtitle2>

              <div>
                {/* <Subtitle2 onClick={this.eraseCache}>Complete</Subtitle2> */}
                <SubmitBtn onClick={this.eraseCache}>Complete</SubmitBtn>
              </div>
            </Heading>
          </ContentDiv>
        </BackgroundDiv>
      </Fragment>
    );
  }
}
export default connect(null, null)(Track3);
