import styled from "styled-components";
import { Card } from "antd";

export const BackgroundDiv = styled.div`
  background: #ebebeb;
  display: block;
  padding: 20px 180px;
`;

export const My_Card = styled(Card)`
  margin: 10px 0px 10px 0px;
  background: #e8e5e5;
  border-radius: 16px;
  .ant-card-head {
    border-radius: 16px 16px 0px 0px;
    background: #ffffff;
  }
`;

export const Addition = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
  width: 100% time {
    float: left;
  }
  .position {
    float: right;
  }
  .status {
    float: right;
    padding-right: 50px;
  }
`;
export const LoadComment = styled.div`
  background: #fafafa;
  padding: 20px;
`;

export const Headding = styled.div`
  display: flex;
  padding: 10px 0px 10px 0px;
`;

export const TextDiv = styled.div``;

export const PostBtnDiv = styled.div`
  margin-left: auto;
  margin-right: 0;
`;

export const Text = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 1.1px;
  color: #677394;
`;

export const PostButton = styled.button`
  background: #175596;
  border-radius: 15px;
  font-family: "", "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
