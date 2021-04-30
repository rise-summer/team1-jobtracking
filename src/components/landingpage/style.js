import styled from "styled-components";

export const MainBody = styled.div``;

export const BackgroundDiv = styled.div`
  background: #f5f5f5;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 87px;

  color: #000000;
  padding-top: 20vh;
  padding-left: 10vh;
`;

export const Flexbox = styled.div`
  display: flex;
`;

export const Button = styled.a`
  background: #002ea3;
  border-radius: 6px;
  padding: 10px 0px;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  letter-spacing: 0.5px;
  color: #ffffff;
  width: 12vw;
  margin: 2vh auto;
  text-align: center;
  line-height: 38px;
  cursor: pointer;
  &:hover {
    background-color: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const Btmtxt = styled.div`
  float: left;
  width: 33.3vw;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 87px;
  background: #f5f5f5;
  color: #000000;
  padding-top: 3vh;
`;
