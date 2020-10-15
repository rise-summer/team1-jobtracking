import styled from 'styled-components';

export const LoginWrapper = styled.div`
    font-size:24px;
`;

export const LoginBoard = styled.div`
    width:360px;
    margin:100px auto;
`;

export const Item = styled.div`
    &.title {
        font-size:48px;
        padding:15px;
        text-align:center;
    }
    padding:10px;
`;
export const Button = styled.button`
    height:20px; 
    width:100px; 
    margin: -20px -50px; 
    position:relative;
    top:50%; 
    left:50%;
`;
export const Textfield = styled.input`
    width:350px;
`;