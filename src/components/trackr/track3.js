// import { Slider } from "antd";
import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import backarrow from "../../images/backarrow.svg";

import {
  ContentDiv,
  Title,
  BackgroundDiv,
  Subtitle,
  BackBtn,
  Heading,
  BackSvg,
  Subtitle2,
} from "./newappstyle";
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
              <Subtitle>
                You have successfully added
                <span style={{ color: "#65B6FE" }}> {this.props.role} </span> to
                your tracked applications.
              </Subtitle>
              <Subtitle>See what other people are saying here:</Subtitle>
              <div>
                <Subtitle2 onClick={this.eraseCache}>
                  <BackSvg src={backarrow} alt="backarrow error"></BackSvg> Back
                  to applications
                </Subtitle2>
              </div>
            </Heading>
          </ContentDiv>
        </BackgroundDiv>
      </Fragment>
    );
  }
}
export default connect(null, null)(Track3);
