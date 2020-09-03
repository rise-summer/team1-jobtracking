import styled from 'styled-components';

export const PostWrapper = styled.div`
    background-color: #ebebeb;
    padding:50px 80px 50px 80px;
`; 
export const Addition = styled.div`
    padding-top:20px;
    padding-bottom:30px;
    width:100%;
    .time{
        float:right;
    }
    .position{
        float:left;
    }
    .status{
        float:left;
        padding-left:50px;
    }
`; 


export const NewComment = styled.div`
    background:#e8e5e5;
    padding:20px;
    input{
        margin-left:5%;
        margin-right:5%;
        width:80%;
        border-radius: 8px;
        border: 2px solid #e8e5e5;
    }
    button{
        length:5%;
        padding: 2px 15px;
        background-color:#175596;
        color:#FFFFFF;
        border-radius: 8px;
        border: none;
    }
`
