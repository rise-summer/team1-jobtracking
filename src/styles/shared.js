import styled, { css } from "styled-components";

export const lightBoxShadow = css`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.04);
`;
export const heavyBoxShadow = css`
  box-shadow: 0 10px 20px -10px #175596;
`;
export const standardBoxShadow = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
//
export const defaultButtonStyles = css`
  width: fit-content;
  padding: 8px 16px;
  line-height: 22px;
  font-family: "Open Sans";
  border-radius: 12px;
  text-align: center;
  font-size: 17px;
  box-sizing: border-box;
  transition: 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.97);
  }
`;

export const Button = styled.div`
  ${defaultButtonStyles}
  ${(props) => props.bold && "font-weight:700;"}
  ${(props) =>
    props.secondary &&
    `
        padding: 6px 14px;
border:2px solid #175596;
background-color:#fff;
color:#175596;
`}
  ${(props) =>
    props.primary &&
    `color:#fff;
background-color:#175596;
`};
`;
export const LandingPageButton = styled.div`
  ${defaultButtonStyles}
  ${heavyBoxShadow}
  border-radius:999px;
  padding: 12px 20px;

  ${(props) => props.bold && "font-weight:700;"}
  ${(props) =>
    props.secondary &&
    `
        padding: 10px 18px;
border:2px solid #175596;
background-color:#fff;
color:#175596;
`}
  ${(props) =>
    props.primary &&
    `color:#fff;
background-color:#175596;
`};
`;
export const SubmitButton = styled.input.attrs((props) => ({
  type: "submit",
}))`
  ${defaultButtonStyles}
  border:none;
  ${(props) => props.bold && "font-weight:700;"}
  ${(props) =>
    props.secondary &&
    `
    box-sizing:border-box;
    padding: 6px 14px;
border:2px solid #175596;
background-color:#fff;
color:#175596;
`}
  ${(props) =>
    props.primary &&
    `color:#fff;
background-color:#175596;
`};
`;

export const ApplicationButton = styled.div`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 12px;
  min-width: 94px;
  line-height: 22px;
  font-family: "Open Sans";
  text-align: center;
  font-size: 17px;
  transition: transform 0.3s ease;
  color: #fff;
  background-color: ${(props) => props.color};
`;
