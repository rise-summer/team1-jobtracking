import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Card } from 'antd';

export const My_Card = styled(Card)`
margin: 10px 0px 10px 0px;
background: #E8E5E5;
border-radius: 16px;
.ant-card-head{
    border-radius: 16px 16px 0px 0px; 
    background: #FFFFFF;
}
`;


export const PostWrapper = styled.div`
    padding:50px 80px 50px 80px;
    background:  #F5F5F5;
`;
export const Addition = styled.div`
    padding-top:20px;
    padding-bottom:30px;
    width:100%
    .time{
        float:left;
    }
    .position{
        float:right;
    }
    .status{
        float:right;
        padding-right:50px;
    }
`;
export const LoadComment = styled.div`
    background:#fafafa;
    padding:20px;
`;

export const Headding = styled.div`
    display: flex;
    padding: 10px 0px 10px 0px;
`;

export const TextDiv = styled.div`

`;

export const CommentBtnDiv = styled.div`
margin-left:auto; margin-right:0;
`;

export const Text = styled.div`
font-family: Sans-Serif;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 27px;
letter-spacing: 1.1px;
color: #677394;
`;

export const CommentButton = styled.button`
background: #175596;
border-radius: 15px;
    font-family: Sans-Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 34px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`;


