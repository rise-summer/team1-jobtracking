import styled from "styled-components";

export const SignUpLink = styled.a`
  font-weight: bold;
  font-weight: 800;
  font-size: 25px;
  text-decoration: none;
  min-width: 70px;
  margin-top: 3px;
  margin-left: 2vw;
  padding: 3px 7px;
  background-color: #175596;
  border-radius: 10px;
  color: #fff;
  &:hover {
    background-color: #2071c7;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
