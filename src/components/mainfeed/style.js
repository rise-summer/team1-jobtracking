import styled from "styled-components";

export const MainBody = styled.div`
  min-width: 500px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const BackgroundDiv = styled.div`
  background: #ebebeb;
  padding: 20px 15vw;
  min-height: calc(100vh - 118px);
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
`;
export const LoaderContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;
export const Text = styled.div`
  justify-content: right;
  min-width: 210px;
  font-style: normal;
  font-size: 22px;
  letter-spacing: 0.5px;
  color: #797979;
`;
export const SearchText = styled.div`
  color: #282828;
  font-weight: 600;
  font-size: 33px;
  margin: 12px 0;
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
