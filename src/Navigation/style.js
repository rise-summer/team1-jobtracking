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
    right:0;
    top:0;
    height:56px;
    .pic{
        float:right;
        height:50px;
    }
`;
export const Button = styled.div `
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color:#fff;
        background:#ec6149;
    }
`