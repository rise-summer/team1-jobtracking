import styled from "styled-components";

export const MainBody = styled.div`
  margin: 0;
`;

export const BackgroundDiv = styled.div``;
export const Headline = styled.div`
  margin-top: 12.5vh;
  text-align: center;
  margin-bottom: 12.5vh;
`;

export const LandingPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 225px;
  width: 65vw;
  column-gap: 25px;
  margin-bottom: 40px;
`;
export const LandingPageGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.center &&
    `justify-content: center;
  align-items: center;`}
  justify-self:flex-start;
  align-self: center;
`;

export const Highlight = styled.span`
  color: #175596;
`;
export const Button = styled.button`
  background: #175596;
  color: #fff;
  font-family: "Open Sans";
  font-weight: 400;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  line-height: 22px;
  align-items: center;
  text-align: center;
`;

export const Email = styled.input`
  background: #fbfbfb;
  font-family: "Open Sans";
  display: inline-block;
  border: 1px solid #5c5c5c;
  box-sizing: border-box;
  border-radius: 5px 0px 0px 5px;
  font-weight: 300;
  //padding: 0 5px;
  padding-left: 8px;
  font-size: 17px;
  line-height: 22px;
  align-items: center;
  color: #979797;
`;
export const Submit = styled.input`
  background: #175596;
  font-family: "Open Sans";
  border: 1px solid #175596;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 0px 5px 5px 0px;
  font-weight: 300;
  font-size: 17px;
  line-height: 22px;
  /* identical to box height, or 129% */
  align-items: center;
  text-align: center;

  color: #ffffff;
`;

export const HalfBox = styled.div`
  width: 50%;
  display: inline-block;
  margin-top: 5vh;
  margin-bottom: 5vh;
  align-items: center;
`;

export const FullBox = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-bottom: 20vh;
  margin-top: 5vh;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 56px;
  letter-spacing: -3.5px;
  line-height: 62px;
  margin: 0 auto;
  position: relative;
  width: 75%;
  /* text-align: center; */
  margin-bottom: 30px;
`;

export const SubHeader = styled.div`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 10px;
  letter-spacing: -2px;
`;

export const Subtitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  font-family: "Open Sans";
  /* or 150% */

  /* display: flex; */
  align-items: center;
  margin: 0 auto;
  width: 60%;
  /* text-align: center; */
`;
export const GridDescription = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  font-family: "Open Sans";
`;

export const Textbox = styled.div`
  max-width: 50vw;
`;

export const Btmbox = styled.div`
  padding-top: 6vh;
`;

export const Image = styled.img`
  max-width: 80%;
  ${(props) =>
    props.shadow &&
    `box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius:10px;`}
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const VideoContainer = styled.div`
  width: 80vw;
  min-height: 80vh;
  background-color: #175596;
  color: white;
  padding: 20px 25px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
