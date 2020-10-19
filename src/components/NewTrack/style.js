import styled from "styled-components";

export const BackgroundDiv = styled.div`
  padding: 47px;
  background: #ebebeb;
  display: block;
`;

export const ContentDiv = styled.div`
  background: #f5f5f5;
  border-radius: 15px;
  padding: 10px;
  width: 1067px;
  margin: 0px auto;
  display: block;
`;

export const Headder = styled.a`
  font-family: Sans-Serif;
  font-style: normal;
  font-weight: 800;
  font-size: 29px;
  line-height: 39px;
  text-align: center;
  color: #5c5c5c;
`;

export const Title = styled.div`
  font-family: Sans-Serif;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 82px;
  /* identical to box height */
  text-align: center;
  color: #000000;
  margin: 15px;
`;

export const Subtitle = styled.div`
  font-family: Sans-Serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 34px;
  /* identical to box height */
  text-align: center;
  color: #000000;
  margin: 10px;
`;

export const Input = styled.input.attrs({
  placeholder: "https://paste_the_link_to_your_application_here.com",
})`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px auto;
  border-radius: 15px;
  width: 856px;
  height: 84px;
  display: block;
  &::placeholder {
    font-family: sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 35px;
    line-height: 48px;
    letter-spacing: 0.6px;
    color: #6f6f6f;
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  justify-content: center;
`;

export const SubmitBtn = styled.button`
  background: #175596;
  border-radius: 8px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 34px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.6px;
  color: #f2f0f0;
  margin: 50px auto;
  display: block;
  width: 261px;
height: 49px;
`;
