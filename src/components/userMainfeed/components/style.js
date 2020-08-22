import styled from 'styled-components';

export const NewPostWrapper = styled.div`
    margin:30px auto;
    padding:10px;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.1)
`;

export const Close = styled.div`
    height:20px;
    float:right;
    margin:10px;
    img{
        height:20px;
    }
`;

export const CreatePost = styled.div`
    padding-bottom:20px;
    button{
        float:right;
    }
`;

export const TitleInput = styled.input`
    display:block;
    width:100%;
    color:#777;
    margin:10px auto;

`;
export const ContentInput = styled.textarea`
    display:block;
    width:100%;
    height:100px;
    color:#777;
    margin:10px auto;
    rows:3;
`;
export const Addition = styled.div`
    padding-top:20px;
    padding-bottom:30px;
    width:100%;
    button{
        position:relative;
        width:5%;
        left:65%;
        margin-right:5%;
    }
`; 