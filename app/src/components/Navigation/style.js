import styled from 'styled-components';

export const NavWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom: 1px solid #f0f0f0;
`; 
export const SearchWrapper = styled.div`
    width:1000px;
`;
export const NavSearch = styled.input.attrs({
    placeholder:'Search'
})`
    width:500px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:15px;
    &::placeholder {
        color:#999;
    }
    &.focused {
        width: 240px;
    }

    
`;
export const Addition = styled.div `
    position:absolute;
    top:0;
    right:80px;
`;
export const Button = styled.div `
    margin-top:6px;
    padding:0 18px;
    line-height:18px;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color:#fff;
        background:#ec6149;
    }
     

`
export const LogOut = styled.div`
    position:absolute;
    top:15px;
    right:200px;
`;

export const Tracker = styled.div`
    position:absolute;
    top:15px;
    right:100px;
`
export const SearchTag = styled.div`
    position:absolute;
    padding-left:30px;
    margin-left:20px;
    font-size:40px;
    div{
        font-size:15px;
        padding-top:2px;
    }
`;