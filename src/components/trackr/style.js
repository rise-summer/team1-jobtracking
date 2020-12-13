import styled from "styled-components";

export const MainBody = styled.div`
  min-width: 700px;
  font-family: Sans-Serif;
  width: 100vw;
  height: 100vh;
  margin: 0 20px 20px 0;
  justify-content: center;
`;

export const BackgroundDiv = styled.div`
  background: #ebebeb;
  display: flex;
  position: relative;
  justify-content: center;
  //padding: 20px 20vw 20px 20vw;
  margin: 0px auto 0px auto;
`;

export const ContentDiv = styled.div`
  padding: 20px 0px 20px 10vw;
  width: 60vw;
  min-width: 565px;
`;

export const Headding = styled.div`
  background: #175596;
  border: none;
  border-radius: 5px 5px 0px 0px;
  height: 88px;
  display: flex;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  display: block;
  margin: auto 10px;
  min-width: 260px;
`;

export const NewAppBtnDiv = styled.button`
  background: #f5f5f5;
  border-radius: 10px;
  border: none;
  outline: none;
  text-align: center;
  margin: auto 10px;
  height: 40px;
  width: 120px;
  min-width: 120px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #c0c0c0;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const NewAppBtn = styled.a`
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  font-size: 25px;
`;

export const Sort = styled.select`
  background: #f5f5f5;
  border: none;
  outline: none;
  border-radius: 10px;
  text-align: center;
  margin: auto 10px;
  padding-left: 5px;
  width: 140px;
  font-size: 25px;
  height: 40px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #c0c0c0;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const Option = styled.option`
  font-size: 25px;
  border: none;
  outline: none;
  border-radius: 14px;
  :hover {
    background: #8191ba;
    //border-radius: 14px;
  }
`;

export const Apps = styled.div``;

export const Content = styled.div`
  background: #ffffff;
  border-radius: 0px 0px 5px 5px;
  height: 88px;
  align-items: center;
  font-size: 25px;
  padding: 20px 25px;
`;

export const ProfileDiv = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 30vw;
  min-width: 250px;
  height: 700px;
  margin: 20px 10vw 20px 10px;
`;
