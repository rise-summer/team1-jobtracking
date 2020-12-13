// import { Slider } from "antd";
import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import {
  ContentDiv,
  Title,
  BackgroundDiv,
  Subtitle,
  BackBtn,
  Heading,
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
            <BackBtn href="/trackr"> &lt;</BackBtn>
            <Heading>
              <Title>Great job applying!</Title>
              <Subtitle>
                You have successfully added{" "}
                <span style={{ color: "#0000a0" }}> {this.props.role} </span> to
                your tracked applications.
              </Subtitle>
            </Heading>
          </ContentDiv>
        </BackgroundDiv>
      </Fragment>
    );
  }
}
export default connect(mapStateToProps)(Track3);
