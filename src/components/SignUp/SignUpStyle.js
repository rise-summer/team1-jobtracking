import styled from 'styled-components';

export const BackgroundDiv = styled.div`
width: 100%;
height: 100%;
position: relative;
`;

export const ContentDiv = styled.div`
width: 1062px;
height: 726px;
  position: absolute;
  left: 10%;
top: 10%;
  z-index: 10;
  background: #F5F5F5;
  border-radius: 41px;
  
`;


export const DarkBlueDiv = styled.div`
display: flex;
background: #175596;
width: 30%;
height: 1024px;
position: relative;
float: left;
`;

export const LightBlueDiv = styled.div`
background: #6175A9;
display: flex;
width: 70%;
height: 1024px;
position: relative;

`;

export const LoginDiv = styled.div`

`;

export const LoginWrapper = styled.div`
    font-size:24px;
`;

export const LoginBoard = styled.div`
    
`;

export const Item = styled.div`
    &.title {
        font-family: Sans-Serif;
    font-style: normal;
    font-weight: 800;
    font-size: 66px;
    line-height: 90px; 
    margin: 10px 10px 10px 70px;
color: #175596;
    }
    padding:10px;
    z-index: 1
`;

export const FieldDiv = styled.div`
margin: auto;
padding: 15px 0px 15px 0px;
display: inline-block;
width: 100%;
    
`;


export const Email = styled.input.attrs({
    placeholder: 'youremail@email.com'
})`border-radius: 15px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: #FFFFFF;

width: 800px;
height: 60px;

display: block;
             margin : 0 auto;

&::placeholder{
    font-family: Sans-Serif;
font-style: normal;
font-weight: normal;
font-size: 44px;
line-height: 60px;
color: #5C5C5C;
border-color: #FFFFFF;
padding: 3px 0px 0px 42px;
}`;


export const Pwd = styled.input.attrs({
    placeholder: 'set your password'
})`border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    width: 800px;
    height: 60px;
    display: block;
    margin : 0 auto;
    &::placeholder{
        font-family: Sans-Serif;
        font-style: normal;
        font-weight: normal;
        font-size: 44px;
        line-height: 60px;
        color: #5C5C5C;
        padding: 3px 0px 0px 42px;
        margin: 0 auto;
}

`;

export const ButtonDiv = styled.div`
padding: 30px 0px 0px 0px;
`;


export const Button = styled.button` 
    
    font-family: Sans-Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 68px;
    /* identical to box height */
    color: #175596;
    padding: 0;
border: none;
background: none;
cursor: pointer;

`;

export const InnerButtonDiv = styled.div`
margin: 0px 0px 0px 127px; 
display:inline-block;
`;

export const SignUpDiv = styled.div`
display:inline-block;
margin: 0px 0px 0px 102px; 
`;

export const SignUpButton = styled.a`
font-family: Sans-Serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 22px;
/* identical to box height */
color: #5A5A5A;
`;

export const Form = styled.form`

`;


export const UserName = styled.input.attrs({
    placeholder: 'create your username'
})`border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    width: 800px;
    height: 60px;
    display: block;
    margin : 0 auto;
    &::placeholder{
        font-family: Sans-Serif;
        font-style: normal;
        font-weight: normal;
        font-size: 44px;
        line-height: 60px;
        color: #5C5C5C;
        padding: 3px 0px 0px 42px;
        margin: 0 auto;
}

`;

export const ConfirmPwd = styled.input.attrs({
    placeholder: 'confirm your password'
})`border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    width: 800px;
    height: 60px;
    display: block;
    margin : 0 auto;
    &::placeholder{
        font-family: Sans-Serif;
        font-style: normal;
        font-weight: normal;
        font-size: 44px;
        line-height: 60px;
        color: #5C5C5C;
        padding: 3px 0px 0px 42px;
        margin: 0 auto;
}

`;
