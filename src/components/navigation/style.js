import styled from "styled-components";

export const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  //justify-content: space-between;
  font-family: Sans-Serif;
  // padding: 20px 15vh 20px 15vh;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: clamp(10px, 30vw, 350px);
  padding-right: clamp(10px, 30vw, 350px);
  //overflow: hidden;
`;
//Left side of Nav Bar
export const LeftNavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  //justify-content: flex-start;
  // flex-grow: 1;
  // flex-shrink: 1;
`;

export const LogoButton = styled.a`
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  padding: 0px 20px 0px 0px;
  //line-height: 30px;

  /* identical to box height */

  letter-spacing: 0.5px;

  color: #175596;
  cursor: pointer;
`;

export const SearchBar = styled.input.attrs({
  placeholder: "Search",
})`
  width: 30vw;
  min-width: 5vh;
  max-width: 40vh;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 15px;
  &::placeholder {
    color: #999;
  }
  &:focus {
    width: 40vh;
    transition-duration: 0.5s;
    //position: fixed;
  }
`;
//Right side of Nav Bar
export const RightNavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-left: auto;
`;

export const AppTrackBtn = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  min-width: 70px;
  margin: 0px 1vw 0px 1vw;
  letter-spacing: 0.5px;
  color: #5c5c5c;
  cursor: pointer;
`;
