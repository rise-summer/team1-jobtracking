import styled from "styled-components";

export const MainBody = styled.div`
  min-width: 700px;
  font-family: "Open Sans", Sans-Serif;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
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
  padding: 20px 0px 20px 0vw;
  width: 70vw;
  min-width: 570px;
  overflow: auto;
  padding-right: 5px;
`;
export const LoaderContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;
export const Heading = styled.div`
  background: #f2f2f2;
  border-radius: 5px;
  margin-top: 30px;
`;

export const HeadingContent = styled.div`
  display: grid;
  //min-width: 645px;
  border-radius: 5px 5px 0px 0px;
  height: 70px;
  grid-template-columns: 3fr 1.5fr 1.25fr 1.25fr 0.5fr;
  grid-gap: 20px;
`;

export const Column = styled.div`
  justify-self: start;
  font-weight: 500;
  font-size: 16px;
  align-self: center;
  &:nth-child(1) {
    margin-left: 40px;
  }
  &:nth-last-child(1) {
    margin-right: 10px;
  }
`;

export const ColumnSort = styled.span`
  display: inline-block;
  font-size: 12px;
  transition: 0.2s ease;

  &:hover {
    cursor: pointer;
  }
  transform: rotate(
    ${(props) => (props.direction === "DESC" ? "-180deg" : "0deg")}
  );
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color:#175596
  letter-spacing: 1pt;
  text-align: left;
  /* display: block; */
  margin: auto auto auto 15px;
  /* min-width: 270px; */
`;

export const NewAppBtnDiv = styled.button`
  background: #175596;
  border-radius: 10px;
  border: none;
  outline: none;
  text-align: center;
  padding: 0 8px;
  text-decoration: none;
  cursor: pointer;
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const NewAppBtn = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: none;
  font-size: 18px;
  height: 100%;
`;

export const SortContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto 10px;
  padding-left: 5px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  & > select:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
  & > * {
    overflow: hidden;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
  background: #f5f5f5;
  transition: all 0.2s ease;
`;
export const Sort = styled.select`
  border: none;
  outline: none;
  text-align: center;
  width: 210px;
  font-size: 18px;
  height: 35px;
  font-weight: none;
  cursor: pointer;
  border-radius: 10px;
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
  & > option {
    width: 100%;
  }
  background: #f5f5f5;
`;

export const ArrowContainer = styled.div`
  height: 35px;
  overflow: hidden;
  width: 17px;
  background: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  & > * {
    border-radius: 10px;
  }
`;
export const Arrow = styled.div`
  height: 17px;
  font-size: 14px;
  width: 17px;
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
  font-family: "Open Sans", Sans-Serif;
  margin: 20px auto auto auto;
  text-align: center;
  resize: none;
  border: none;
  width: 90%;
  color: black;
`;

export const InfoPrompt = styled.div`
  font-size: 16px;
  color: black;
  text-align: left;
  width: 150px;
`;

export const InfoDiv = styled.div`
  display: flex;
`;

export const Info = styled.textarea`
  font-family: "Open Sans", Sans-Serif;
  font-size: 16px;
  resize: none;
  border: none;
  text-align: left;
  width: 100%;
  outline: none;
  padding: 0px;
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
