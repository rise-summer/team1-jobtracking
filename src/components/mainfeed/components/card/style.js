import styled from "styled-components";

export const Feed = styled.div`
  margin: 10px auto auto auto;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #ffffff;
  border-radius: 16px 16px 0px 0px;
  padding: 10px;
  overflow: hidden;
  //min-width: 70vw;
  min-width: 400px;
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  letter-spacing: 0.5px;
  color: #000000;
`;

export const Date = styled.div`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;
  /* RISE for greyed out text */
  color: #888888;
`;

export const Description = styled.div`
  font-size: 16px;
  padding-bottom: 10px;
  line-height: 22px;
  min-height: 80px;
  min-width: 400px;
  letter-spacing: 0.5px;
  color: #000000;
`;

export const RoleInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #888888;
`;

export const Comment = styled.div`
  background: #e8e5e5;
  box-shadow: 0px 4px 2px rgba(189, 189, 189, 0.25);
  border-radius: 16px;
`;
