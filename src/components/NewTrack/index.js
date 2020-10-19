import React, { Component, Fragment } from "react";
import Navigation from "../Navigation/NavigationLogOut";
import { ContentDiv, Headder, Title, Subtitle, Input, SubmitBtn, BackgroundDiv} from "./style";

class Track1 extends Component {
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
                <Title>Add a new application </Title>
              </div>
              <div>
                <Subtitle>We’re excited to see where this takes you!</Subtitle>
              </div>
              <div>
                <Input></Input>
              </div>
              <div>
                  <SubmitBtn>submit link</SubmitBtn>
              </div>
            </ContentDiv>
          </div>
        </BackgroundDiv>
      </Fragment>
    );
  }
}
export default Track1;
