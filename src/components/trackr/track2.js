// import { Slider } from "antd";
import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import {
  ContentDiv,
  Headder,
  Title2,
  Subtitle2,
  BackgroundDiv,
  Input1,
  Input2,
  Textarea,
  InputDiv,
  Slider,
  SliderDiv,
  Label,
  CompleteBtn,
} from "./newappstyle";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { url: state.applicationReducer.url };
};

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
      description: ""
    };
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
    this.props.dispatch({
      type: "ADD_APPLICATION",
      payload: {
        role: this.state.role,
        company: this.state.company,
        deadline: this.state.deadline,
        location: this.state.location,
        description: this.state.description,
        stage: this.state.stage,
      },
    });
    this.props.history.push("/trackr/track3");
  }

  handleChange(event, key) {
    console.log(this.state);
    switch (key) {
      case "URL":
        return this.setState({ url: event.target.value });
      case "ROLE":
        return this.setState({ role: event.target.value });
      case "COMPANY":
        return this.setState({ company: event.target.value });
      case "DEADLINE":
        return this.setState({ deadline: event.target.value });
      case "LOCATION":
        return this.setState({ location: event.target.value });
      case "DESCRIPTION":
        return this.setState({ description: event.target.value });
    }
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
                  <a href="/trackr">&lt; back to applications</a>
                </Headder>
              </div>
              <div>
                <Title2>Great!</Title2>
              </div>
              <div>
                <Subtitle2>Click to edit any of the parameters</Subtitle2>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <Input1
                    defaultValue={this.props.url}
                    id="link"
                    readonly={false}
                    placeholder="https://paste_the_link_to_your_application_here.com"
                    onChange={this.handleChange.bind(this, "URL")}
                    // value ={this.state.url}
                  />
                </div>
                <div>
                  <InputDiv>
                    <Input2
                      placeholder="Software Engineering Intern"
                      style={{ marginRight: "10px" }}
                      id="role"
                      onChange={(e) => this.handleChange(e, "ROLE")}
                      value={this.state.role}
                    />
                    <Input2
                      placeholder="Facebook"
                      style={{ marginLeft: "10px" }}
                      id="company"
                      onChange={(e) => this.handleChange(e, "COMPANY")}
                      value={this.state.company}
                    />
                  </InputDiv>
                </div>
                <div>
                  <InputDiv>
                    <Input2
                      placeholder="Deadline: 12/01/20"
                      style={{ marginRight: "10px" }}
                      id="deadline"
                      onChange={(e) => this.handleChange(e, "DEADLINE")}
                      value={this.state.deadline}
                    />
                    <Input2
                      placeholder="Menlo Park, California"
                      style={{ marginLeft: "10px" }}
                      id="location"
                      onChange={(e) => this.handleChange(e, "LOCATION")}
                      value={this.state.location}
                    />
                  </InputDiv>
                </div>
                <div>
                  <Textarea
                    placeholder="As an intern, you'll become an expert on the Facebook Terminal and gain a deeper understanding of technology and finance. In addition to your projects, you'll participate in coding challenges, attend tech talks and network with other interns."
                    id="description"
                    onChange={(e) => this.handleChange(e, "DESCRIPTION")}
                    value={this.state.description}
                  />
                </div>
                <div>
                  <Subtitle2>What stage are you in applying?</Subtitle2>
                </div>
                <div>
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
                </div>
                <div>
                  <a href="/trackr/track3">
                    <CompleteBtn
                      style={{ width: "305px", height: "36px" }}
                      type="submit"
                    >
                      complete entering application
                    </CompleteBtn>
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
export default connect(mapStateToProps)(Track2);
