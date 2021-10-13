import styled from "styled-components";

export const MainBody = styled.div`
  margin: 0;
  background: #F2F2F2;
`;

export const BackgroundDiv = styled.div`
  background: #F2F2F2;
`;

export const Email = styled.input`
  background: #FBFBFB;
  border: 1px solid #5C5C5C;
  box-sizing: border-box;
  border-radius: 5px 0px 0px 5px;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  /* or 129% */
  align-items: center;
  color: #979797;
`;

export const HalfBox = styled.div`
  width : 50%;
  display: inline-block;
  margin-top: 5vh;
  margin-bottom: 5vh;
  align-items: center;
`;

export const FullBox = styled.div`
  display: inline-block;
  width:100%;
  text-align: center;
  margin-bottom: 20vh;
  margin-top: 5vh;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 64px;
  line-height: 87px;
  /* display: flex; */
  align-items: center;
  letter-spacing: 0.5px;
  margin: 0 auto;
  position: relative;
  width : 75%;
  /* text-align: center; */
  
`;

export const Subtitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  
  /* or 150% */

  /* display: flex; */
  align-items: center;
  letter-spacing: 1.1px;
  margin: 0 auto;
  width: 75%;
  /* text-align: center; */
`;


export const Submit = styled.button`
  background: #175596;
  border: 2px solid #175596;
  box-sizing: border-box;
  border-radius: 0px 5px 5px 0px;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  /* identical to box height, or 129% */
  align-items: center;
  text-align: center;

  color: #FFFFFF;


`;

export const Textbox = styled.div`
  max-width: 50vw;
`;

export const Btmbox = styled.div`
padding-top: 6vh;
`;
