import styled from "styled-components";
import { Card } from "antd";

export const BackgroundDiv = styled.div`
  background: #ebebeb;
  //background: #123456;
  //display: block;

  justify-content: center;
  font-family: Sans-Serif;
  padding-top: 10px;
  padding-bottom: 10px;
  //padding-left: 25vw;
  //padding-right: 25vw;

  padding-left: clamp(10px, 30vw, 350px);
  padding-right: clamp(10px, 30vw, 350px);
`;

// export const My_Card = styled(Card)`
//   //margin: 10px 0px 10px 0px;
//   //background: #e8e5e5;
//   background: #123456;
//   //border-radius: 16px;
//   .ant-card-head {
//     border-radius: 16px 16px 0px 0px;
//     background: #ffffff;
//   }
// `;

// export const Addition = styled.div`
//   padding-top: 20px;
//   padding-bottom: 30px;
//   width: 100%;
// `;
// export const LoadComment = styled.div`
//   background: #fafafa;
//   padding: 20px;
// `;

export const Headding = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  //padding: 10px 0px 10px 0px;
`;

// export const TextDiv = styled.div``;
// export const PostBtnDiv = styled.div`
//   margin-left: auto;
//   margin-right: 0;
// `;

export const Text = styled.div`
  font-family: "Open Sans", sans-serif;
  min-width: 210px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  //line-height: 27px;
  letter-spacing: 1.1px;
  color: #677394;
`;

export const PostButton = styled.button`
  background: #175596;
  border-radius: 15px;
  min-width: 135px;
  justify-content: right;
  margin-left: auto;
  //margin-right: 0;
  font-family: "", "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  //line-height: 27px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  //margin-left: auto;
`;

// export const SpaceHolder = styled.div`
//   width: 30vw;
//   min-width: 5vh;
//   max-width: 40vh;
//   padding: 0 30px 0 20px;
//   border: none;
//   outline: none;
//   border-radius: 19px;
//   background: #eee;
//   font-size: 15px;
// `;
