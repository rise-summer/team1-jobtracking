import React, { Component, Fragment } from "react";
import Navigation from "../../../navigation";
import backarrow from "../../../../images/backarrow.svg";

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

class Track1 extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleSubmit(event) {
    this.props.history.push("/trackr/track2");
  }

  handleChange(event) {
    this.props.dispatch({
      type: "ADD_URL",
      payload: { url: event.target.value },
    });
  }

  handleBack() {
    this.props.dispatch({
      type: "STORE_RESET",
      payload: {},
    });
    this.props.history.push("/trackr");
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <BackBtn>
              <a onClick={this.handleBack}>
                <BackSvg src={backarrow} alt="backarrow error"></BackSvg>
              </a>
            </BackBtn>
            <Heading>
              <Title>Add a new application </Title>
              <Subtitle>We’re excited to see where this takes you!</Subtitle>
              <form onSubmit={this.handleSubmit}>
                <Input
                  placeholder="https://link_to_your_application_here.com"
                  value={this.props.url || ""}
                  onChange={this.handleChange}
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
}

function mapStateToProps(state) {
  return {
    url: state.applicationReducer.url,
  };
}

export default connect(mapStateToProps)(Track1);
