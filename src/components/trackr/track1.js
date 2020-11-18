import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import {
  ContentDiv,
  Headder,
  Title,
  Subtitle,
  Input,
  SubmitBtn,
  BackgroundDiv,
} from "./newappstyle";
import { connect } from "react-redux";

class Track1 extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.dispatch({ type: "ADD_URL", payload: this.state.value });
    this.props.history.push("/trackr/track2");
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <div>
            <ContentDiv>
              <div>
                <Headder> &lt; back to applications</Headder>
              </div>
              <div>
                <Title>Add a new application </Title>
              </div>
              <div>
                <Subtitle>We’re excited to see where this takes you!</Subtitle>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <Input
                    value={this.state.value}
                    onChange={this.handleChange}
                  ></Input>
                </div>
                <div>
                  <a>
                    <SubmitBtn type="submit">submit link</SubmitBtn>
                  </a>
                </div>
              </form>
            </ContentDiv>
          </div>
        </BackgroundDiv>
      </Fragment>
    );
  }
}
export default connect(null, null)(Track1);
