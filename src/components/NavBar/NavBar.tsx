import * as React from "react";
import {Wrapper, Header, HeaderTitle, HeaderItem, HeaderItemFull, NavLinkWrapper, NavLink, WhiteIcon} from "./NavBarStyle";

const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderItem>
          <HeaderTitle>
            Contributors Rank Board
          </HeaderTitle>
        </HeaderItem>
        <HeaderItemFull>
        </HeaderItemFull>
        <HeaderItem>
          <NavLinkWrapper>
            <NavLink> Contribute Now </NavLink>
            <NavLink> Login </NavLink>
          </NavLinkWrapper>
        </HeaderItem>
      </Header>
    </Wrapper>
  );
};

export default NavBar;
