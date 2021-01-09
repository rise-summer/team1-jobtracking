import React, { Component, Fragment } from "react";
import Navigation from "../../../navigation";
import backarrow from "../../../../images/backarrow.svg";
import {
  ContentDiv,
  Heading,
  Title,
  BackBtn,
  BackSvg,
  Subtitle,
  BackgroundDiv,
  Input,
  Input2,
  Textarea,
  TextAreaDiv,
  Slider,
  SliderDiv,
  Label,
  SubmitBtn,
} from "./style";
import { connect } from "react-redux";

class Track2 extends Component {
  constructor() {
    super();
    this.state = { stage: "Interested" };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSlider(e) {
    var rangeValues = {
      0: "Interested",
      1: "Applied",
      2: "Interview",
      3: "Offer",
    };
    console.log(e.target.value);

    this.setState({ stage: rangeValues[e.target.value] });
  }

  handleSubmit() {
    // this.props.dispatch({
    //   type: "ADD_APPLICATION",
    //   payload: {
    //     url: this.state.url,
    //     role: this.state.role,
    //     company: this.state.company,
    //     deadline: this.state.deadline,
    //     location: this.state.location,
    //     description: this.state.description,
    //     stage: this.state.stage,
    //   },
    // });
    this.props.history.push("/trackr/track3");
  }

  handleChange(event, key) {
    switch (key) {
      case "URL":
        return this.props.dispatch({
          type: "ADD_URL",
          payload: { url: event.target.value },
        });
      case "ROLE":
        return this.props.dispatch({
          type: "ADD_ROLE",
          payload: { role: event.target.value },
        });
      case "COMPANY":
        return this.props.dispatch({
          type: "ADD_COMPANY",
          payload: { company: event.target.value },
        });
      case "DEADLINE":
        return this.props.dispatch({
          type: "ADD_DEADLINE",
          payload: { deadline: event.target.value },
        });
      case "LOCATION":
        return this.props.dispatch({
          type: "ADD_LOCATION",
          payload: { location: event.target.value },
        });
      case "DESCRIPTION":
        return this.props.dispatch({
          type: "ADD_DESCRIPTION",
          payload: { description: event.target.value },
        });
      case "STAGE":
        return this.props.dispatch({
          type: "ADD_STAGE",
          payload: { stage: event.target.value },
        });
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <BackBtn>
              <a href="/trackr/track1">
                <BackSvg src={backarrow} alt="backarrow error"></BackSvg>
              </a>
            </BackBtn>
            <Heading>
              <Title>Great!</Title>
              <Subtitle>Click to edit any of the parameters</Subtitle>
              <form onSubmit={this.handleSubmit}>
                <Input
                  value={this.props.url}
                  id="link"
                  placeholder="https://link_to_your_application_here.com"
                  onChange={(e) => this.handleChange(e, "URL")}
                  // value={this.state.url}
                />
                <Input2
                  value={this.props.role}
                  placeholder="Software Engineering Intern"
                  id="role"
                  onChange={(e) => this.handleChange(e, "ROLE")}
                  // value={this.state.role}
                />
                <Input2
                  value={this.props.company}
                  placeholder="Facebook"
                  id="company"
                  onChange={(e) => this.handleChange(e, "COMPANY")}
                  // value={this.state.company}
                />
                <Input2
                  value={this.props.deadline}
                  placeholder="Deadline: 12/01/20"
                  id="deadline"
                  onChange={(e) => this.handleChange(e, "DEADLINE")}
                  // value={this.state.deadline}
                  type="date"
                />
                <Input2
                  value={this.props.location}
                  placeholder="Menlo Park, California"
                  id="location"
                  onChange={(e) => this.handleChange(e, "LOCATION")}
                  // value={this.state.location}
                />
                <TextAreaDiv>
                  <Textarea
                    value={this.props.description}
                    placeholder="As an intern, you'll become an expert on the Facebook Terminal and gain a deeper understanding of technology and finance. In addition to your projects, you'll participate in coding challenges, attend tech talks and network with other interns."
                    id="description"
                    onChange={(e) => this.handleChange(e, "DESCRIPTION")}
                    // value={this.state.description}
                  />
                </TextAreaDiv>
                <Subtitle>What stage are you in applying?</Subtitle>
                <SliderDiv>
                  <Label>{this.state.stage}</Label>
                  <Slider
                    type="range"
                    min="0"
                    max="3"
                    onChange={(e) => {
                      this.handleSlider(e);
                    }}
                    defaultValue="0"
                  />
                </SliderDiv>
                <SubmitBtn>Complete</SubmitBtn>
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
    role: state.applicationReducer.role,
    company: state.applicationReducer.company,
    deadline: state.applicationReducer.deadline,
    location: state.applicationReducer.location,
    description: state.applicationReducer.description,
  };
}

export default connect(mapStateToProps)(Track2);
