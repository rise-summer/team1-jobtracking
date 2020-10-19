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
  Option
} from "./style";

class Trackr extends Component {
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
                  <NewAppBtn>Enter a new app</NewAppBtn>
                </div>
                <div>
                  <Sort>
                    <Option value="" selected disabled hidden>
                      Sort by
                    </Option>
                    <Option>deadline</Option>
                    <Option>status</Option>
                  </Sort>
                </div>
              </Headding>
              <Apps></Apps>
            </div>
            <div></div>
          </ContentDiv>
        </BackgroundDiv>
      </Fragment>
    );
  }
}

export default Trackr;
