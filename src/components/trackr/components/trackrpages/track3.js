// import { Slider } from "antd";
import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Navigation from "../../../navigation";
import { useHistory } from "react-router-dom";
import party from "party-js";
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
  const [contentRef, setContentRef] = useState();
  const history = useHistory();
  let application;
  let position;
  let hash;
  useEffect(() => {
    if (contentRef) {
      party.confetti(contentRef, {
        count: party.variation.range(45, 55),
        spread: party.variation.range(15, 50),
        speed: 650,
        color: () =>
          party.Color.fromHsl(party.random.randomRange(0, 360), 100, 50),
        shapes: [
          "square",
          "rectangle",
          "roundedSquare",
          "roundedRectangle",
          "circle",
        ],
      });
    }
  }, [contentRef]);

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
            <ContentDiv ref={setContentRef}>
              <Heading>
                <Title style={{ margin: "50px 0 20px 0" }}>
                  Great job applying!
                </Title>
                <Subtitle>
                  You have successfully added {hash} to your tracked
                  applications.
                </Subtitle>

                {/*position && (
                  <React.Fragment>
                    <Subtitle>See what other people are saying here:</Subtitle>
                    <Subtitle2>#{position}</Subtitle2>
                  </React.Fragment>
                )*/}

                <div
                  style={{
                    cursor: "pointer",
                    fontWeight: 800,
                    color: "#175596",
                    margin: "30px 0 20px 0",
                    fontSize: "20px",
                  }}
                  onClick={() => history.push("/trackr")}
                >
                  {" "}
                  ◀ <span style={{ paddingLeft: "10px" }}></span>Back to
                  applications
                </div>
              </Heading>
            </ContentDiv>
          </BackgroundDiv>
        </Outer>
      </Fragment>
    );
  }
}
