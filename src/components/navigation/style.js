import styled from "styled-components";

export const OuterDiv = styled.div``;

export const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Sans-Serif;
  position: relative;
  padding: 20px 80px 20px 80px;
`;

export const SearchDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const AdditionDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const LogoDiv = styled.div`
  padding: 0px 102px 0px 0px;
`;

export const NavDiv = styled.div`
  padding: 0px 0px 0px 0px;
`;

export const NavWrapper = styled.div``;

export const AdditionWrapper = styled.div`
  padding: 0px 30px 0px 0px;
`;

export const LogoButton = styled.a`
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
  /* identical to box height */

  letter-spacing: 0.5px;

  color: #175596;
  border: none;
  background: none;
  cursor: pointer;
`;

export const AdditionButton = styled.a`
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
  /* identical to box height */

  letter-spacing: 0.5px;

  color: #5c5c5c;
  border: none;
  background: none;
  cursor: pointer;
`;

export const SearchWrapper = styled.div`
  width: 1000px;
`;
export const NavSearch = styled.input.attrs({
  placeholder: "Search",
})`
  width: 614px;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 15px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;

export const Button = styled.div`
  margin-top: 6px;
  padding: 0 18px;
  line-height: 18px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;
export const LogOut = styled.div`
  position: absolute;
  top: 15px;
  right: 200px;
`;

export const Tracker = styled.div`
  position: absolute;
  top: 15px;
  right: 100px;
`;
export const SearchTag = styled.div`
  position: relative;
  font-size: 40px;
  div {
    font-size: 15px;
    padding-top: 2px;
  }
`;
