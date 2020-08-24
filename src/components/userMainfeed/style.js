import styled from 'styled-components';

export const PostWrapper = styled.div`
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
export const LoadComment = styled.div`
    background:#fafafa;
    padding:20px;
`;
export const NewComment = styled.div`
    background:#fafafa;
    padding:20px;
    input{
        margin-left:5%;
        margin-right:5%;
        width:80%;
    }
    button{
        length:5%;
    }
`
