// import { Slider } from "antd";
import React, { Fragment } from "react";
import Navigation from "../../../navigation";
import { useHistory } from "react-router-dom";
import {
  ContentDiv,
  Title,
  BackgroundDiv,
  Subtitle,
  Heading,
  SubmitBtn,
  Subtitle2, Outer
} from "./style";

export default function Track3(props) {
  const application = JSON.parse(props.location.state);
  console.log(application);
  const position = application.position;
  const history = useHistory();

  return (
    <Fragment>
      <Outer>
        <Navigation />
        <BackgroundDiv>
          <ContentDiv>
            <Heading>
              <Title>Great job applying!</Title>
              <Subtitle>
                You have successfully added
                <span style={{ color: "#2071c7" }}>{"\t" + position}</span>
                to your tracked applications.
              </Subtitle>

              <Subtitle>See what other people are saying here:</Subtitle>
              <Subtitle2>#{position}</Subtitle2>

              <div>
                <SubmitBtn onClick={() => history.push("/trackr")}>
                  Complete
                </SubmitBtn>
              </div>
            </Heading>
          </ContentDiv>
        </BackgroundDiv>
      </Outer>
    </Fragment>
  );
}
