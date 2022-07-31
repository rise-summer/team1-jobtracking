import React, { Fragment, useState } from "react";
import Navigation from "../navigation";
import comment from "../../images/comment_image.PNG";
import landing from "../../images/landing_image.PNG";
import trackr from "../../images/trackr_image.PNG";
import trackr1 from "../../images/trackr1_image.PNG";
import LandingPageNavigation from "../navigation/landingpage";
import { useHistory, withRouter } from "react-router-dom";
import { LandingPageButton } from "../../styles/shared";
import {
  MainBody,
  LandingPageGrid,
  VideoContainer,
  SubHeader,
  GridDescription,
  Highlight,
  LandingPageGridContainer,
  BackgroundDiv,
  Headline,
  ImageContainer,
  Image,
  Title,
  Subtitle,
  FullBox,
  Email,
  Submit,
} from "./style";

const LandingPage = (props) => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
      />
    </svg>
  );

  return (
    <Fragment>
      <MainBody>
        <LandingPageNavigation />
        <BackgroundDiv
          style={{
            display: "flex",
            boxSizing: "border-box",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Headline>
            <Title>
              Your job search is <Highlight>more</Highlight>
              <br /> than just a spreadsheet
            </Title>
            <Subtitle
              style={{
                marginTop: "20px",
                marginBottom: "40px",
              }}
            >
              The job search is tough, but Pipeline supports you through it. We
              help you stay organized and feel connected to the job seekers
              community.
            </Subtitle>

            <LandingPageButton
              onClick={() => history.push({ pathname: "/signup" })}
              style={{
                margin: "0 auto",
                fontWeight: "700",
              }}
              primary
              type="submit"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "16px" }}>Get started today</div>{" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "3px",
                  }}
                >
                  {rightArrow}
                </div>
              </div>
            </LandingPageButton>
          </Headline>

          <LandingPageGrid>
            <LandingPageGridContainer style={{ width: "100%", height: "100%" }}>
              <ImageContainer
                style={{
                  position: "relative",
                  width: "100%",
                  flex: "0 0 100%",
                }}
              >
                <Image
                  src={trackr}
                  shadow
                  style={{ position: "absolute", top: "0", left: "0" }}
                ></Image>
                <Image
                  shadow
                  style={{
                    position: "absolute",

                    top: "30%",
                    left: "15%",
                  }}
                  src={trackr1}
                ></Image>
              </ImageContainer>
            </LandingPageGridContainer>
            <LandingPageGridContainer>
              <SubHeader>Automate your application tracking</SubHeader>
              <GridDescription>
                All you have to do is copy and paste the application link into
                our tracker. In seconds, we'll automatically grab the title,
                description, and more. Say goodbye to dead-end spreadsheets!
              </GridDescription>
            </LandingPageGridContainer>
            <LandingPageGridContainer>
              <SubHeader>Share your journey without any judgement</SubHeader>
              <GridDescription>
                No flexing, no marketing, no self-promoting. Get real advice
                from people in your shoes and share your own experiences
                throughout the process. throughout the journey.
              </GridDescription>
            </LandingPageGridContainer>
            <LandingPageGridContainer>
              <Image shadow src={comment} />
            </LandingPageGridContainer>
          </LandingPageGrid>

          <VideoContainer>
            <Title
              style={{
                marginBottom: "0",
                textAlign: "center",
                fontSize: "32px",
                letterSpacing: "-1px",
              }}
            >
              Learn more about Pipeline
            </Title>
            <Subtitle style={{ marginBottom: "20px", width: "auto" }}>
              Pipeline was built within CUNYStartup Accelerator and LystenLab's
              Startup Incubator.
            </Subtitle>{" "}
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/dLJDy8hYwzY?controls=0"
              frameborder="0"
            ></iframe>
          </VideoContainer>
          <FullBox style={{ marginTop: "70px" }}>
            <Title
              style={{
                marginBottom: "10px",
                fontSize: "32px",
                letterSpacing: "-1px",
              }}
            >
              Get into the <Highlight>Pipeline</Highlight>
            </Title>
            <Subtitle style={{ marginBottom: "20px" }}>
              Sign up and make your job search better today.
            </Subtitle>{" "}
            <LandingPageButton
              onClick={() => history.push({ pathname: "/signup" })}
              style={{
                margin: "0 auto",
                fontWeight: "700",
              }}
              primary
              type="submit"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "16px" }}>Get started</div>{" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "3px",
                  }}
                >
                  {rightArrow}
                </div>
              </div>
            </LandingPageButton>
          </FullBox>
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};
export default LandingPage;
