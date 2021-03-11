import styled from "styled-components";

export const Content = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 10px 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    background: #fffd66;
  }
`;

export const CompanyName = styled.div`
  font-size: 16px;
  line-height: 22px;
`;

export const PositionName = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
`;

export const Slider = styled.input``;

export const Left = styled.div`
  width: 50%;
`;
export const Center = styled.div`
  padding: 10px;
  display: flex;
`;

export const Right = styled.div`
  padding: 10px;
  width: 10vw;
`;

export const BorderBox = styled.div`
  border: 2px solid #6175a9;
  box-sizing: border-box;
  border-radius: 15px;
  margin: auto 0px;
`;

export const Status = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #5c5c5c;
`;

export const RBtn = styled.button`
  border: 2px solid #6175a9;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  /* identical to box height, or 129% */

  color: #979797;
  background: white;
  margin: auto 2px;
  min-width: 5vw;
  height: 5vh;
  cursor: pointer;
`;

export const ButtonBox = styled.div`
  margin: auto;
  display: flex;
`;

export const Extra = styled.div``;

export const Top = styled.div`
  display: flex;
`;

export const Topline = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vh;
`;
export const TopText = styled.div`
  color: #5a5a5a;
  margin: 0px 3vw;
`;

export const Description = styled.div`
  font-weight: 300;
  font-size: 17px;
  line-height: 23px;
  padding: 10px 0px 10px 0px;

  color: #5a5a5a;
`;
export const Notes = styled.textarea`
  font-family: sans-serif;
  border: 2px solid #8191ba;
  box-sizing: border-box;
  border-radius: 14px;
  resize: none;
  padding: 5px;
  width: 100%;
  font-size: 16px;
  line-height: 22px;

  /* RISE colors high fidelity */

  color: #5a5a5a;
`;

export const Svg = styled.img``;
