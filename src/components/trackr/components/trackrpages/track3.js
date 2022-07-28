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
  Outer,
} from "./style";
import useAppzi from "../../../../hooks/useAppzi";
import { Button } from "../../../../styles/shared";
export default function Track3(props) {
  useAppzi("rddQu");
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
    position = application.position ? application.position : "";
    hash = position ? (
      <span style={{ color: "#2071c7" }}>{"\t" + position}</span>
    ) : (
      <span>a new job</span>
    );
    console.log();
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
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "50px",
                    marginBottom: "25px",
                  }}
                >
                  <Button secondary onClick={() => history.push("/trackr")}>
                    Go back to your applications
                  </Button>
                  <Button
                    primary
                    onClick={() =>
                      history.push({
                        pathname: "/mainfeed",
                        state: {
                          application: JSON.stringify(application),
                        },
                      })
                    }
                  >
                    Share your journey with others
                  </Button>
                </div>
              </Heading>
            </ContentDiv>
          </BackgroundDiv>
        </Outer>
      </Fragment>
    );
  }
}
