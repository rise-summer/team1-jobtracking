import React, { Fragment } from "react";
import Navigation from "../navigation";
import {
  MainBody,
  BackgroundDiv,
  Text,
  Flexbox,
  Button,
  Btmtxt,
  IFrame,
  Textbox,
  Btmbox,
} from "./style";

const LandingPage = (props) => {
  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          <Flexbox>
            <Textbox>
              <Text>Streamlining the job search, one student at a time</Text>
              <Flexbox>
                <Button onClick={() => props.history.push("/signup")}>
                  sign up
                </Button>
              </Flexbox>
            </Textbox>
            {/* <svg
              width="900"
              viewBox="0 0 596 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M648.5 847.5L607.5 536.5L306.5 456.5L453 361.5L193.5 289.5L293.5 212.5L23.8902 72.927L154.5 72.927L23.8902 72.927L72.5 148"
                  stroke="#6175A9"
                  stroke-width="25"
                />
              </g>
            </svg> */}
            <IFrame
              width="600"
              height="315"
              src="https://www.youtube.com/embed/dLJDy8hYwzY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></IFrame>
          </Flexbox>
          <Flexbox></Flexbox>
          <Btmbox>
            <Btmtxt>tracking</Btmtxt>
            <Btmtxt>community</Btmtxt>
            <Btmtxt>insights</Btmtxt>
          </Btmbox>
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};
export default LandingPage;
