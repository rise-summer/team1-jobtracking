import styled from "styled-components";

export const MainBody = styled.div`
  margin: 0;
`;

export const BackgroundDiv = styled.div``;
export const Headline = styled.div`
  margin-top: 10vh;
  text-align: center;
  margin-bottom: 10vh;
`;

export const LandingPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 100px;
`;
export const LandingPageGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-weight: bold;
  font-size: 60px;
  line-height: 87px;
  /* display: flex; */
  align-items: center;
  letter-spacing: 0.5px;
  margin: 0 auto;
  position: relative;
  width: 75%;
  /* text-align: center; */
`;

export const Subtitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;

  /* or 150% */

  /* display: flex; */
  align-items: center;
  letter-spacing: 1.1px;
  margin: 0 auto;
  width: 75%;
  /* text-align: center; */
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
