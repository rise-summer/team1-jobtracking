import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import backarrow from "../../images/backarrow.svg";

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
} from "./newappstyle";
import { connect } from "react-redux";

class Track1 extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.dispatch({ type: "ADD_URL", payload: { url: this.state.url } });
    this.props.history.push("/trackr/track2");
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <BackBtn>
              <a href="/trackr">
                <BackSvg src={backarrow} alt="backarrow error"></BackSvg>
              </a>
            </BackBtn>
            <Heading>
              <Title>Add a new application </Title>
              <Subtitle>We’re excited to see where this takes you!</Subtitle>
              <form onSubmit={this.handleSubmit}>
                <Input
                  placeholder="https://link_to_your_application_here.com"
                  value={this.state.url}
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
export default connect(null, null)(Track1);
