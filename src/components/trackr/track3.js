// import { Slider } from "antd";
import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import {
  ContentDiv,
  Headder,
  Title,
  Input,
  SubmitBtn,
  BackgroundDiv,
  LinkDiv,
  Input1,
  Input2,
  Textarea,
  InputDiv,
  Slider,
  SliderDiv,
  Label,
  CompleteBtn,
  Subtitle,
} from "./newappstyle";

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
          <div>
            <ContentDiv>
              <div>
                <Title>Great job applying!</Title>
              </div>
              <div><Subtitle>You have successfully added Facebook Software Engineering Intern to your tracked applications.</Subtitle></div>
            </ContentDiv>
          </div>
        </BackgroundDiv>
      </Fragment>
    );
  }
}
export default Track3;
