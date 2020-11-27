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
          <div>
            <ContentDiv>
              <div>
                <Headder>
                  <a href="/trackr"> &lt; back to applications</a>
                </Headder>
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
                    value={this.state.url}
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
