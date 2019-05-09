import styledComponents from "styled-components";

const Wrapper = styledComponents.div`
  position: relative!important;
  background: #23282e;
  height: 64px;
  color: #FFF;
`;

const Header = styledComponents.div`
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

const HeaderTitle = styledComponents.span`
  font-family: hack;
  font-size: 16px;
  font-weight: 600;
  color: #FFF;
  :hover {
    color: #97a2a4;
  }
`;

const HeaderItem = styledComponents.header`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  align-self: stretch;
  margin-right: 16px;
`;

const HeaderItemFull = styledComponents.div`
  ${HeaderItem};
  flex: auto;
`;

const NavLinkWrapper = styledComponents.div`
  display: flex!important;
`;

const NavLink = styledComponents.div`
  margin-right: 16px;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  :hover {
    color: #97a2a4;
  }
`;

const WhiteIcon = styledComponents.span`
  color: #FFF;
  font-size: 20px;
  size: 16px;
`;
export {
  Wrapper,
  Header,
  HeaderTitle,
  HeaderItem,
  HeaderItemFull,
  NavLinkWrapper,
  NavLink,
  WhiteIcon
};
