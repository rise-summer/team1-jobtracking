// import { Slider } from "antd";
import React, { Component, Fragment } from "react";
import Navigation from "../navigation";
import {
  ContentDiv,
  Title,
  BackgroundDiv,
  Subtitle,
  Subtitle2
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
              <div><a href="/trackr"><Subtitle2>  &lt; Back to applications</Subtitle2></a></div>
            </ContentDiv>
          </div>
        </BackgroundDiv>
      </Fragment>
    );
  }
}
export default Track3;
