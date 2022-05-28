import styled from "styled-components";

export const NavBarDiv = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  font-family: Sans-Serif;
  padding: 20px 10vw 20px 10vw;
  overflow: hidden;
  /* position: fixed;
  top: 100; */
`;
//Left side of Nav Bar
export const LeftNavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchBar = styled.input.attrs({
  placeholder: "Search",
})`
  width: 30vw;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 100px;
  background: #eee;
  font-size: 15px;
  &::placeholder {
    color: #999;
  }
  &:focus {
    //width: 40vh;
    //transition-duration: 0.5s;
    //position: fixed;
  }
`;
//Right side of Nav Bar
export const RightNavBarDiv = styled.div`
  display: flex;
  margin-left: auto;
`;