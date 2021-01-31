import styled from "styled-components";

export const Title = styled.div`
  font-family: "Avenir Black", "Arial Black", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 82px;
  /* identical to box height */

  letter-spacing: 0.95px;

  color: #175596;
`;

export const BackBtn = styled.a`
  font-style: normal;
  font-weight: 800;
  font-size: 29px;
  line-height: 39px;
  text-align: center;

  color: #5c5c5c;
  cursor:pointer;
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
