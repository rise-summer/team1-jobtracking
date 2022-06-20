// import { Slider } from "antd";
import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import Navigation from "../../../navigation";
import { useHistory } from "react-router-dom";
import {
  ContentDiv,
  Title,
  BackgroundDiv,
  Subtitle,
  Heading,
  SubmitBtn,
  Subtitle2,
  Outer,
} from "./style";

export default function Track3(props) {
  const history = useHistory();
  let application;
  let position;
  let hash;
  if (JSON.stringify(props) === "{}") {
    return <Redirect to="/trackr" />;
  } else if (props.location.state == undefined) {
    return <Redirect to="/trackr" />;
  } else {
    application = JSON.parse(props.location.state);
    console.log(application);
    position = application.position ? application.position : "";
    hash = position ? (
      <span style={{ color: "#2071c7" }}>{"\t" + position}</span>
    ) : (
      <span>a new job</span>
    );
    return (
      <Fragment>
        <Outer>
          <Navigation />
          <BackgroundDiv>
            <ContentDiv>
              <Heading>
                <Title>Great job applying!</Title>
                <Subtitle>
                  You have successfully added {hash} to your tracked
                  applications.
                </Subtitle>

                {position && (
                  <React.Fragment>
                    <Subtitle>See what other people are saying here:</Subtitle>
                    <Subtitle2>#{position}</Subtitle2>
                  </React.Fragment>
                )}

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
}
