import styled from "styled-components";

export const MainBody = styled.div`
  min-width: 500px;
  margin: 0 auto;
  height: 100%;
  //overflow: scroll;  //Add this when creating format for different size screens
`;

export const BackgroundDiv = styled.div`
  background: #ebebeb;
  font-family: Sans-Serif;
  padding: 20px 20vw 20px 20vw;
  //min-width: 400px;
`;

export const Heading = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Text = styled.div`
  font-family: "Open Sans", sans-serif;
  min-width: 210px;
  padding-right: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #677394;
`;

export const NewPostButton = styled.button`
  background: #175596;
  border-radius: 10px;
  min-width: 135px;
  margin-left: auto;
  font-family: "", "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
