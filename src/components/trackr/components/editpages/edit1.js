import React, { Component, Fragment } from "react";
import Navigation from "../../../navigation";
import backarrow from "../../../../images/backarrow.svg";

import {
  ContentDiv,
  BackgroundDiv,
  Title,
  Subtitle,
  SliderDiv,
  Label,
  Slider,
  Heading,
  Textarea,
  SubmitBtn,
  Input2,
  Input,
} from "../trackrpages/style";

import { BottomDiv, EditBtn } from "./style";
import { connect } from "react-redux";

class Edit1 extends Component {
  constructor() {
    super();
    this.state = { stage: "Interested", clicked: false };
    this.extend = this.extend.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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

  extend() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <Heading>
              <Title>What step are you at now?</Title>
              <Subtitle>Click to edit any paramerters.</Subtitle>
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
              <Subtitle>Add notes to your application log here:</Subtitle>
              <Textarea placeholder="I was really nervous about this, but I’m glad I was able to work on it and submit it. Hopefully, all goes well and I’m able to successfully submit it! " />
              {this.state.clicked ? (
                <div>
                  <Subtitle>Edit position information:</Subtitle>
                  <Input placeholder="https://link_to_your_application_here.com" />
                  <Input2 placeholder="Software Engineering Intern" />
                  <Input2 placeholder="Facebook" />
                  <Input2 placeholder="Deadline: 12/01/20" type="date" />
                  <Input2 placeholder="Menlo Park, California" />
                  <Textarea></Textarea>
                </div>
              ) : (
                <div></div>
              )}
              <BottomDiv>
                <EditBtn onClick={this.extend}>
                  Edit position information
                </EditBtn>
                <SubmitBtn style={{ fontSize: "17px" }}>
                  Complete Update
                </SubmitBtn>
              </BottomDiv>
            </Heading>
          </ContentDiv>
        </BackgroundDiv>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(Edit1);
