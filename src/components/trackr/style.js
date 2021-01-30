import styled from "styled-components";

export const MainBody = styled.div`
  min-width: 700px;
  font-family: Sans-Serif;
  width: 100vw;
  height: 100vh;
  //margin: 0 20px 20px 0;
  justify-content: center;
`;

export const BackgroundDiv = styled.div`
  background: #ebebeb;
  display: flex;
  position: relative;
  justify-content: center;
  //padding: 20px 20vw 20px 20vw;
  height: calc(100vh - 40px - 38px);
  overflow-y: hidden;
`;

export const ContentDiv = styled.div`
  padding: 20px 0px 20px 10vw;
  width: 60vw;
  min-width: 570px;
`;

export const Headding = styled.div`
  background: #175596;
  overflow: hidden;
  border-radius: 5px;
`;

export const HeadingContent = styled.div`
  display: flex;
  //min-width: 645px;
  border-radius: 5px 5px 0px 0px;
  height: 70px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 3pt;
  text-align: left;
  color: #ffffff;
  /* display: block; */
  margin: auto auto auto 15px;
  /* min-width: 270px; */
`;

export const NewAppBtnDiv = styled.button`
  background: #f5f5f5;
  border-radius: 10px;
  border: none;
  outline: none;
  text-align: center;
  margin: auto 10px;
  height: 35px;
  width: 90px;
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
  font-weight: none;
  font-size: 18px;
`;

export const Sort = styled.select`
  background: #f5f5f5;
  border: none;
  outline: none;
  border-radius: 10px;
  text-align: center;
  margin: auto 10px;
  padding-left: 5px;
  width: 90px;
  font-size: 18px;
  height: 35px;
  font-weight: none;
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
  width: 20vw;
  min-width: 250px;
  height: fit-content;
  margin: 20px 10vw 20px 10px;
  padding: 15px 15px 15px 15px;
  text-align: center;
`;

export const BtnDiv = styled.div`
  display: flex;
`;

export const EditBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #c0c0c0;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const ExitBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 15px;
  margin: 0px 0px 0px auto;
  cursor: pointer;
  &:hover {
    background: #c0c0c0;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
export const Name = styled.textarea`
  font-size: 25px;
  font-weight: bold;
  font-family: Sans-Serif;
  margin: 20px auto auto auto;
  text-align: center;
  resize: none;
  border: none;
  width: 90%;
  color: black;
`;

export const InfoPrompt = styled.div`
  font-size: 18px;
  color: black;
  text-align: left;
  width: 150px;
`;

export const InfoDiv = styled.div`
  display: flex;
`;

export const Info = styled.textarea`
  font-family: Sans-Serif;
  font-size: 18px;
  resize: none;
  border: none;
  text-align: left;
  width: 100%;
  outline: none;
`;

export const HashTagDiv = styled.div`
  margin-top: 20px;
`;

export const HashTag = styled.button`
  background: #5869d7;
  color: #f5f5f5;
  width: fit-content;
  font-size: 15px;
  padding: 10px 10px 10px 10px;
  margin: 5px 5px 5px 5px;
  border-radius: 5px;
  overflow: hidden;
  outline: none;
  border: none;
`;

export const SearchTitle = styled.div`
  margin-top: 15px;

  text-align: left;
  padding-left: 0px;
  font-weight: bold;
`;

export const SearchDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Searches = styled.button`
  outline: none;
  border: none;
  background: #ffffff;
  color: #b6b6b9;
  width: fit-content;
  font-size: 20px;
  margin: 5px 5px 5px 5px;
  border-radius: 5px;
`;

export const ViewPostBtn = styled.button`
  outline: none;
  border: none;
  color: none;
  background: none;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: 2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const ViewPostBtnDiv = styled.div`
  text-align: center;
`;
