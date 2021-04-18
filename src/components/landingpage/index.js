import React, { Fragment } from "react";
import Navigation from "../navigation";
import { BackgroundDiv, Text, Flexbox, Button, Btmtxt } from "./style";

const LandingPage = (props) => {
  return (
    <Fragment>
      <Navigation />
      <BackgroundDiv>
        <Flexbox>
          <div>
            <Text>Streamlining the job search, one student at a time</Text>
            <Flexbox>
              <Button onClick={() => props.history.push("/signup")}>
                sign up
              </Button>
            </Flexbox>
          </div>
          <svg
            width="900"
            viewBox="0 0 596 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M648.5 847.5L607.5 536.5L306.5 456.5L453 361.5L193.5 289.5L293.5 212.5L23.8902 72.927L154.5 72.927M23.8902 72.927L72.5 148"
                stroke="#6175A9"
                stroke-width="25"
              />
              <polygon fill="#6175A9" points="0,60 14,80 50,60" />
            </g>
          </svg>
        </Flexbox>
        <div>
          <Btmtxt>tracking</Btmtxt>
          <Btmtxt>comunity</Btmtxt>
          <Btmtxt>insights</Btmtxt>
        </div>
      </BackgroundDiv>
    </Fragment>
  );
};
export default LandingPage;
