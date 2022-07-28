import styled from "styled-components";

export const Button = styled.div`
  width: fit-content;
  padding: 8px 16px;
  line-height: 22px;
  border-radius: 12px;
  font-family: "Open Sans";
  text-align: center;
  font-size: 17px;
  ${(props) => props.bold && "font-weight:700;"}
  transition: 0.3s ease;
  ${(props) =>
    props.secondary &&
    `
    box-sizing:border-box;
border:2px solid #175596;
background-color:#fff;
color:#175596;
`}
  ${(props) =>
    props.primary &&
    `color:#fff;
    border:2px solid transparent;
background-color:#175596;
`};
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.97);
  }
`;
export const SubmitButton = styled.input.attrs((props) => ({
  type: "submit",
}))`
  width: fit-content;
  padding: 8px 16px;
  line-height: 22px;
  border-radius: 12px;
  font-family: "Open Sans";
  text-align: center;
  border: none;
  font-size: 17px;
  ${(props) => props.bold && "font-weight:700;"}
  transition: 0.3s ease;
  ${(props) =>
    props.secondary &&
    `
    box-sizing:border-box;
border:2px solid #175596;
background-color:#fff;
color:#175596;
`}
  ${(props) =>
    props.primary &&
    `color:#fff;
background-color:#175596;
border:2px solid transparent;
`};
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.97);
  }
`;

export const ApplicationButton = styled.div`
  width: fit-content;
  padding: 8px 16px;
  min-width: 94px;
  line-height: 22px;
  ${(props) =>
    props.drop ? "border-radius:12px 12px 0 0;" : "border-radius: 12px;"}
  font-family: "Open Sans";
  text-align: center;
  font-size: 17px;
  transition: transform 0.3s ease;
  color: #fff;
  background-color: ${(props) => props.color};
`;
