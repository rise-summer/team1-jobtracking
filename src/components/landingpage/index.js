import React, { Fragment, useState } from "react";
import Navigation from "../navigation";
import comment from "../../images/comment_image.PNG";
import landing from "../../images/landing_image.PNG";
import trackr from "../../images/trackr_image.PNG";
import trackr1 from "../../images/trackr1_image.PNG";
import LandingPageNavigation from "../navigation/landingpage";
import { useHistory, withRouter } from "react-router-dom";
import {
  MainBody,
  LandingPageGrid,
  Button,
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
            <Title style={{ fontSize: "64px" }}>
              A one-stop-shop
              <br /> for the job search.
            </Title>
            <Subtitle
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontSize: "20px",
              }}
            >
              The job search can be draining and tedious, but Pipeline makes it
              faster.
            </Subtitle>
            <form
              onSubmit={() =>
                history.push({ pathname: "/signup", state: { email: email } })
              }
            >
              <Email
                type="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Submit type="submit" value="Sign up now" />
            </form>
            <Image style={{ marginTop: "50px", width: "70%" }} src={landing} />
          </Headline>

          <LandingPageGrid>
            <LandingPageGridContainer
              center
              style={{ width: "100%", height: "100%" }}
            >
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
                  style={{ position: "absolute", top: "0", left: "10%" }}
                ></Image>
                <Image
                  shadow
                  style={{
                    position: "absolute",

                    top: "30%",
                    left: "20%",
                  }}
                  src={trackr1}
                ></Image>
              </ImageContainer>
            </LandingPageGridContainer>
            <LandingPageGridContainer>
              <Title>One place for all your job applications</Title>
              <Subtitle>
                No need to manually enter all your applications into an Excel
                spreadsheet; with Pipeline, all you have to do is copy and paste
                the application link into our tracker. We'll fill in the title,
                description, and more for you, so you have more time to focus on
                actually applying.
              </Subtitle>
            </LandingPageGridContainer>
            <LandingPageGridContainer>
              <Title>Apply with your peers</Title>
              <Subtitle>
                No flexing, no marketing, no self-promoting. Hear real advice
                from people who are in your shoes and share your own experiences
                throughout the journey.
              </Subtitle>
            </LandingPageGridContainer>
            <LandingPageGridContainer center>
              <Image shadow src={comment} />
            </LandingPageGridContainer>
          </LandingPageGrid>

          <FullBox style={{ marginTop: "70px" }}>
            <Title style={{ marginBottom: "10px" }}>
              Get into the Pipeline
            </Title>
            <Subtitle style={{ marginBottom: "20px" }}>
              Sign up to reserve your spot. Our full feature set will be ready
              soon.
            </Subtitle>{" "}
            <form
              onSubmit={() =>
                history.push({ pathname: "/signup", state: { email: email } })
              }
            >
              <Email
                type="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Submit type="submit" value="Sign up now" />
            </form>
          </FullBox>
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};
export default LandingPage;
