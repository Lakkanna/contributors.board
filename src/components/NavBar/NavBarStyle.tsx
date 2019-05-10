import styled from "styled-components";

const Wrapper = styled.div`
  position: relative!important;
  background: #23282e;
  height: 64px;
  color: #FFF;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  background-color: #24292e;
  color: hsla(0,0%,100%,.7);
  font-size: 14px;
  line-height: 1.5;
  padding: 16px;
  z-index: 32;
`;

const HeaderTitle = styled.span`
  font-family: hack;
  font-size: 16px;
  font-weight: 600;
  color: #FFF;
  :hover {
    color: #97a2a4;
  }
`;

const HeaderItem = styled.header`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  align-self: stretch;
  margin-right: 16px;
`;

const HeaderItemFull = styled.div`
  ${HeaderItem};
  flex: auto;
`;

const NavLinkWrapper = styled.div`
  display: flex!important;
`;

const NavLink = styled.div`
  margin-right: 16px;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  :hover {
    color: #97a2a4;
  }
`;

const NoDecor = styled.a`
  text-decoration: none;
  color: inherit;
`;

export {
  Wrapper,
  Header,
  HeaderTitle,
  HeaderItem,
  HeaderItemFull,
  NavLinkWrapper,
  NavLink,
  NoDecor
};
