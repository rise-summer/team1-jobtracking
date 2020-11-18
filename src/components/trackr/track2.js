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
    };
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
    this.setState({});
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
                <Title2>Great!</Title2>
              </div>
              <div>
                <Subtitle2>Click to edit any of the parameters</Subtitle2>
              </div>
              <div>
                <Input1
                  defaultValue={this.props.url}
                  id="link"
                  readonly={false}
                  placeholder="https://paste_the_link_to_your_application_here.com"
                />
              </div>
              <div>
                <InputDiv>
                  <Input2
                    placeholder="Software Engineering Intern"
                    style={{ marginRight: "10px" }}
                    id="role"
                  />
                  <Input2
                    placeholder="Facebook"
                    style={{ marginLeft: "10px" }}
                    id="company"
                  />
                </InputDiv>
              </div>
              <div>
                <InputDiv>
                  <Input2
                    placeholder="Deadline: 12/01/20"
                    style={{ marginRight: "10px" }}
                    id="deadline"
                  />
                  <Input2
                    placeholder="Menlo Park, California"
                    style={{ marginLeft: "10px" }}
                    id="location"
                  />
                </InputDiv>
              </div>
              <div>
                <Textarea
                  placeholder="As an intern, you'll become an expert on the Facebook Terminal and gain a deeper understanding of technology and finance. In addition to your projects, you'll participate in coding challenges, attend tech talks and network with other interns."
                  id="description"
                />
              </div>
              <div>
                <Subtitle2>What stage are you in applying?</Subtitle2>
              </div>
              <div>
                <SliderDiv>
                  <Label
                    dangerouslySetInnerHTML={{ __html: this.state.stage }}
                  />
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
                    onClick={this.handleSubmit.bind(this)}
                  >
                    complete entering application
                  </CompleteBtn>
                </a>
              </div>
            </ContentDiv>
          </div>
        </BackgroundDiv>
      </Fragment>
    );
  }
}
export default connect(mapStateToProps)(Track2);