import React, { Component, Fragment } from "react";
import Navigation from "../Navigation/NavigationLogOut";
import {
  ContentDiv,
  Headder,
  Title2,
  Subtitle2,
  Input,
  SubmitBtn,
  BackgroundDiv,
  LinkDiv,
  Input1,
  Input2,
  Textarea,
  InputDiv,
} from "./newappstyle";

class Track2 extends Component {
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
                <Input1 />
              </div>
              <div>
                <InputDiv>
                  <Input2
                    placeholder="Software Engineering Intern"
                    style={{ marginRight: "10px" }}
                  />
                  <Input2
                    placeholder="Facebook"
                    style={{ marginLeft: "10px" }}
                  />
                </InputDiv>
              </div>
              <div>
                <InputDiv>
                  <Input2
                    placeholder="Deadline: 12/01/20"
                    style={{ marginRight: "10px" }}
                  />
                  <Input2
                    placeholder="Menlo Park, California"
                    style={{ marginLeft: "10px" }}
                  />
                </InputDiv>
              </div>
              <div>
                <Textarea placeholder="As an intern, you'll become an expert on the Facebook Terminal and gain a deeper understanding of technology and finance. In addition to your projects, you'll participate in coding challenges, attend tech talks and network with other interns." />
              </div>
              <Subtitle2>What stage are you in applying?</Subtitle2>
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
export default Track2;
