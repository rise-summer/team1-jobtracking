import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainBody = styled.div`
  font-size: 24px;
  font-family: "Open Sans", Sans-Serif;
  font-style: normal;
  height: 100%;
  width: 100%;
  min-width: 500px;
  position: absolute;
  padding: 40px auto 40px auto;
  //justify-content: center;
  background: linear-gradient(
    to right,
    #175596 0%,
    #175596 35%,
    #617aba 35%,
    #617aba 100%
  );
`;

export const Logo = styled.a`
  text-decoration: none;
  color: white;
`;

export const LogoDiv = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  color: white;
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  width: 100%;
`;

export const ContentDiv = styled.div`
  width: 450px;
  height: fit-content;
  position: relative;
  /* left: 10%;
  top: 20%; */
  z-index: 2;
  background: #f5f5f5;
  border-radius: 30px;
  padding: 40px 60px 20px 60px;
  //justify-content: center;
`;

export const Item = styled.div`
  //justify-content: center;
  padding: 0px 0px 30px 0px;
  z-index: 3;
  //margin: auto;
  &.title {
    font-weight: 600;
    font-size: 40px;
    //margin: 10px 10px 10px 70px;
    color: #175596;
  }
`;

export const Email = styled.input.attrs({
  placeholder: "email",
})`
  font-size: 20px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  width: 400px;
  height: 40px;
  padding: 0px 30px 0 20px;
  &::placeholder {
    font-size: 20px;
    color: #bfbfbf;
  }
  &:focus {
    font-size: 20px;
  }
`;

export const Pwd = styled.input.attrs({
  placeholder: "password",
})`
  font-size: 20px;
  margin-top: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  width: 400px;
  height: 40px;
  padding: 0px 30px 0 20px;
  &::placeholder {
    font-size: 20px;
    color: #bfbfbf;
  }
  &:focus {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 25px;
  /* identical to box height */
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin: 15px 20px 15px 0px;
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #175596;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const SignUpButton = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  /* identical to box height */
  color: #5a5a5a;
  &:hover {
    color: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const HomeLink = styled(Link)`
  font-family: "Open Sans", Sans-Serif;
  color: #175596;
  text-decoration: none;
  font-weight: bold;
  font-size: 35px;
  cursor: pointer;
  &:hover {
    color: #175596;
  }
`;

export const HeaderError = styled.div`
  color: red;
  background-color: pink;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  margin-bottom: 5px;
  text-align: left;
`;
export const InlineError = styled.div`
  font-size: 20px;
  padding-top: 5px;
  color: red;
`;
