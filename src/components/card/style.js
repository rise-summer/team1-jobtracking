import styled from "styled-components";

export const Content = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 2px rgba(189, 189, 189, 0.25);
  border-radius: 16px 16px 0px 0px;
  padding: 10px;
  min-width: 70vw;
`;

export const Comment = styled.div`
  background: #e8e5e5;
  box-shadow: 0px 4px 2px rgba(189, 189, 189, 0.25);
  border-radius: 16px;
`;

export const Title = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  letter-spacing: 0.5px;

  color: #000000;
`;

export const Date = styled.div`
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;

  /* RISE for greyed out text */

  color: #888888;
`;

export const Text = styled.div`
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;

  color: #000000;
`;

export const RoleInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow: hidden;
`;
