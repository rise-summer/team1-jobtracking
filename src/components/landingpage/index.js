import React, { Fragment } from "react";
import Navigation from "../navigation";
import {
  MainBody,
  BackgroundDiv,
  HalfBox,
  Title,
  Subtitle,
  FullBox,
  Email,
  Submit,
} from "./style";

const LandingPage = (props) => {
  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
          <HalfBox>
            <Title>The job search just got easier.</Title>
            <Subtitle>
              The job search can be draining and tedious, but Pipeline makes it
              faster.
            </Subtitle>
            <div>
              <form> 
                <div style={{margin:"10vh auto", width: '75%'}}>
                <Email placeholder="Your email" />
                <Submit>Find Out How</Submit>
                </div>
              </form>
            </div>
          </HalfBox>
          <HalfBox>
            <Title>Visual</Title>
          </HalfBox>
          <HalfBox>
            <Title>Visual</Title>
          </HalfBox>
          <HalfBox>
            <Title>One place for all your job applications</Title>
            <Subtitle>
              No need to manually enter all your applications into an Excel
              spreadsheet; with Pipeline, all you have to do is copy and paste
              the application link into our tracker. We'll fill in the title,
              description, and more for you, so you have more time to focus on
              actually applying.
            </Subtitle>
          </HalfBox>
          <HalfBox>
            <Title>Apply with your peers</Title>
            <Subtitle>
              No flexing, no marketing, no self-promoting. Hear real advice from
              people who are in your shoes and share your own experiences
              throughout the journey.
            </Subtitle>
          </HalfBox>
          <HalfBox>
            <Title>Visual</Title>
          </HalfBox>
          <HalfBox>
            <Title>Visual</Title>
          </HalfBox>
          <HalfBox>
            <Title>Get into recruiter's pipeline</Title>
            <Subtitle>
              Using our algorithm, recruiters will be matched based on the jobs
              you track. We'll match you with recruiters based on jobs you're
              applying to, saving you time and effort. It's a perfect match and
              zero effort for you. No more useless suggestions that don't match
              your interests.
            </Subtitle>
          </HalfBox>
          <FullBox>
            <Title>Get into the Pipeline</Title>
            <Subtitle>
              Sign up to reserve your spot. Our full feature set will be ready
              soon.
            </Subtitle>{" "}
            <form>
              <Email placeholder="Your email" />
              <Submit>Find Out How</Submit>
            </form>
          </FullBox>
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};
export default LandingPage;
