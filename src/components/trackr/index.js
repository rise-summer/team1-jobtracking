import React, { Component, Fragment } from "react";
import Navigation from "../Navigation/NavigationLogOut";
import {
  BackgroundDiv,
  Headding,
  Title,
  NewAppBtn,
  Sort,
  Apps,
  ContentDiv,
  Option,
} from "./style";

class Trackr extends Component {
  constructor() {
    super();
    this.state = { no_apps: true };
  }

  getContent() {
    if (this.state.no_apps) {
      return <div></div>
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <div>
              <Headding>
                <div>
                  <Title>Your Applications</Title>
                </div>
                <div>
                  <NewAppBtn>Enter a new application</NewAppBtn>
                </div>
                <div>
                  <Sort class="dropdown">
                    <Option value="" selected disabled hidden>
                      Sort by
                    </Option>
                    <Option>deadline</Option>
                    <Option>status</Option>
                  </Sort>
                </div>
              </Headding>
              <Apps>{this.getContent()}</Apps>
            </div>
            <div></div>
          </ContentDiv>
        </BackgroundDiv>
      </Fragment>
    );
  }
}

export default Trackr;
