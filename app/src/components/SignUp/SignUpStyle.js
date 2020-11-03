import styled from 'styled-components';

export const LoginWrapper = styled.div`
    font-size:24px;
`;

export const LoginBoard = styled.div`
    width:350px;
    margin:40px auto;
`;

export const Item = styled.div`
    &.title {
        font-size:20px;
        padding:15px;
        text-align:center;
    }
    padding:10px;
`;
export const Button = styled.button`
   
    height:40px; 
    width:100px;  
    position:center;
    top:100%; 
    left:50%;
    flex: center;
`;
export const Textfield = styled.input`
    width:350px;
`;