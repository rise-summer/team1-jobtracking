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
} from "./newappstyle";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { role: state.applicationReducer.role };
};

class Track3 extends Component {
  constructor() {
    super();
    this.state = { label: "You've selected option 1!" };
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <BackBtn href="/trackr">
              <a href="/trackr" onclick="topFunction()">
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
            </Heading>
          </ContentDiv>
        </BackgroundDiv>
      </Fragment>
    );
  }
}
export default connect(mapStateToProps)(Track3);
