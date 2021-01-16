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
  CompleteBtn,
} from "./style";
import { connect } from "react-redux";

class Track2 extends Component {
  constructor() {
    super();
    this.state = {
      stage: "Interested",
      url: "",
      role: "",
      company: "",
      deadline: "",
      location: "",
      description: "",
    };
    this.identity = new Date();
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
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

  handleSubmit(e) {
    e.preventDefault();
    var id = new Date().getTime();
    // this.props.history.push("/trackr/track3");
    this.props.dispatch({
      type: "ADD_APPLICATION",
      payload: {
        id: {
          url: this.state.url,
          role: this.state.role,
          company: this.state.company,
          deadline: this.state.deadline,
          location: this.state.location,
          description: this.state.description,
          stage: this.state.stage,
        },
      },
    });
    this.props.history.push("/trackr/track3");
  }

  // handleChange(event, key) {
  //   switch (key) {
  //     case "URL":
  //       return this.props.dispatch({
  //         type: "ADD_URL",
  //         payload: { url: event.target.value },
  //       });
  //     case "ROLE":
  //       return this.props.dispatch({
  //         type: "ADD_ROLE",
  //         payload: { role: event.target.value },
  //       });
  //     case "COMPANY":
  //       return this.props.dispatch({
  //         type: "ADD_COMPANY",
  //         payload: { company: event.target.value },
  //       });
  //     case "DEADLINE":
  //       return this.props.dispatch({
  //         type: "ADD_DEADLINE",
  //         payload: { deadline: event.target.value },
  //       });
  //     case "LOCATION":
  //       return this.props.dispatch({
  //         type: "ADD_LOCATION",
  //         payload: { location: event.target.value },
  //       });
  //     case "DESCRIPTION":
  //       return this.props.dispatch({
  //         type: "ADD_DESCRIPTION",
  //         payload: { description: event.target.value },
  //       });
  //     case "STAGE":
  //       return this.props.dispatch({
  //         type: "ADD_STAGE",
  //         payload: { stage: event.target.value },
  //       });
  //     default:
  //       return undefined;
  //   }
  // }

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
              <Title>Great!</Title>
              <Subtitle>Click to edit any of the parameters</Subtitle>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <Input
                  // value={this.props.url}
                  name="link"
                  placeholder="https://link_to_your_application_here.com"
                  // onChange={(e) => this.handleChange(e, "URL")}
                  value={this.state.url}
                  onChange={this.handleInputChange}
                />
                <Input2
                  // value={this.props.role}
                  placeholder="Software Engineering Intern"
                  name="role"
                  // onChange={(e) => this.handleChange(e, "ROLE")}
                  value={this.state.role}
                  onChange={this.handleInputChange}
                />
                <Input2
                  // value={this.props.company}
                  placeholder="Facebook"
                  name="company"
                  // onChange={(e) => this.handleChange(e, "COMPANY")}
                  value={this.state.company}
                  onChange={this.handleInputChange}
                />
                <Input2
                  // value={this.props.deadline}
                  placeholder="Deadline: 12/01/20"
                  name="deadline"
                  // onChange={(e) => this.handleChange(e, "DEADLINE")}
                  value={this.state.deadline}
                  onChange={this.handleInputChange}
                  type="date"
                />
                <Input2
                  // value={this.props.location}
                  placeholder="Menlo Park, California"
                  name="location"
                  // onChange={(e) => this.handleChange(e, "LOCATION")}
                  value={this.state.location}
                  onChange={this.handleInputChange}
                />
                <TextAreaDiv>
                  <Textarea
                    // value={this.props.description}
                    placeholder="As an intern, you'll become an expert on the Facebook Terminal and gain a deeper understanding of technology and finance. In addition to your projects, you'll participate in coding challenges, attend tech talks and network with other interns."
                    name="description"
                    // onChange={(e) => this.handleChange(e, "DESCRIPTION")}
                    value={this.state.description}
                    onChange={this.handleInputChange}
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
                    name="slider"
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

// function mapStateToProps(state) {
//   return {
//     url: state.applicationReducer.url,
//     role: state.applicationReducer.role,
//     company: state.applicationReducer.company,
//     deadline: state.applicationReducer.deadline,
//     location: state.applicationReducer.location,
//     description: state.applicationReducer.description,
//   };
// }

export default connect(null, null)(Track2);
