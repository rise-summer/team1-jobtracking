import styled from "styled-components";

export const MainBody = styled.div`
  font-size: 24px;
  font-family: "Open Sans", Sans-Serif;
  font-style: normal;
  height: 100vh;
  width: 100vw;
  min-width: 500px;
  position: absolute;
  padding: 40px auto 40px auto;
  //justify-content: center;
  background: linear-gradient(
    to right,
    #dbdbdb 0%,
    #dbdbdb 35%,
    #617aba 35%,
    #617aba 100%
  );
`;
export const BackgroundDiv = styled.div``;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  width: 100%;
`;
export const LogoDiv = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const ContentDiv = styled.div`
  width: 450px;
  height: fit-content;
  /*margin: 20vh auto auto auto;*/
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
  &.title {
    font-weight: 600;
    font-size: 40px;
    color: #175596;
  }
`;

export const UserName = styled.input.attrs({
  placeholder: "create your username",
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

export const Email = styled.input.attrs({
  placeholder: "youremail@email.com",
})`
  font-size: 20px;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 10px;
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
  placeholder: "set your password",
})`
  font-size: 20px;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 10px;
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

export const ConfirmPwd = styled.input.attrs({
  placeholder: "confirm your password",
})`
  font-size: 20px;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 10px;
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
  margin: 15px 20px 30px 0px;
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

export const Form = styled.form``;
