import styled from "styled-components";
import { lightBoxShadow } from "../../styles/shared";
export const NavBarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: "Open Sans", Sans-Serif;
  padding: 20px 10vw 20px 10vw;
  overflow: hidden;
  /* position: fixed;
  top: 100; */
  ${(props) => props.shadow && lightBoxShadow}
`;
//Left side of Nav Bar
export const LeftNavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchBar = styled.input.attrs({
  placeholder: "Search for a position",
})`
  width: ${(props) => (props.focus ? "40vw" : "30vw")};
  background: url(${(props) => props.image}) no-repeat scroll 10px 12px;
  background-size: 15px;
  height: 38px;
  padding: 0 35px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 100px;
  background-color: #eee;
  font-size: 15px;
  transition: 0.5s ease;
  &::placeholder {
    color: #999;
  }
  &:focus {
    width: 35vw;
  }
`;
//Right side of Nav Bar
export const RightNavBarDiv = styled.div`
  display: flex;
  margin-left: auto;
`;
export const HomeLink = styled.a`
  font-size: 25px;
  padding: 0px 40px 0px 0px;
  /* identical to box height */
  letter-spacing: 0.3px;
  color: #175596;
  text-decoration: none;
  transition: 0.3s ease;
  &:hover {
    color: #2071c7;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const NavLink = styled.a`
  font-weight: bold;
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  min-width: 70px;
  margin: 0px 0vw 0px 2vw;
  color: #5c5c5c;
  transition: 0.3s ease;
  &:hover {
    color: #999;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
