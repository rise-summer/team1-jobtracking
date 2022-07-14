import styled from "styled-components";

export const MainBody = styled.div`
  min-width: 500px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const BackgroundDiv = styled.div`
  background: #ebebeb;
  padding: 20px 20vw;
  min-height: calc(100vh - 118px);
`;

export const Heading = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Text = styled.div`
  justify-content: right;
  min-width: 210px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #677394;
`;

export const NewPostButton = styled.button`
  background: #175596;
  border-radius: 10px;
  padding: 5px;
  margin-left: 10px;
  min-width: 135px;
  font-style: normal;
  font-weight: bold;
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
