import styled from "styled-components";

export const BottomDiv = styled.div`
  display: flex;
`;
export const EditBtn = styled.button`
  background: #f5f5f5;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  color: #979797;

  margin: 30px auto;
  display: block;
  width: 140px;
  height: 49px;
  outline: none;
  border: 2px solid #6175a9;
  cursor: pointer;
  &:hover {
    background: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
