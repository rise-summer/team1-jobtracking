import styled from "styled-components";

export const Title = styled.div`
  font-family: "Avenir Black", "Arial Black", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  /* identical to box height */

  letter-spacing: 0.95px;

  color: #175596;
`;

export const BackBtn = styled.a`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 39px;
  text-align: center;
  justify-content: center;

  color: #5c5c5c;
  cursor: pointer;
`;

export const BackSvg = styled.img`
  width: 25px;
  height: 25px;
  &:active {
    transform: scale(0.8);
    transition: 0.1s;
    filter: opacity(30%);
  }
  filter: opacity(50%);
  text-decoration: none;
`;

export const NewPostButton = styled.button`
  background: #175596;
  border-radius: 10px;
  height: 35px;
  min-width: 130px;
  margin: auto auto auto auto;
  font-style: normal;
  font-size: 15px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
