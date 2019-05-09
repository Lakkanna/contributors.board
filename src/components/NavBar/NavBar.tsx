import * as React from "react";
import {Wrapper, Header, HeaderTitle, HeaderItem, HeaderItemFull, NavLinkWrapper, NavLink, NoDecor} from "./NavBarStyle";

const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderItem>
          <HeaderTitle>
            <NoDecor href="https://lakkanna.github.io/contributors.board/"> Contributors Rank Board </NoDecor>
          </HeaderTitle>
        </HeaderItem>
        <HeaderItemFull>
        </HeaderItemFull>
        <HeaderItem>
          <NavLinkWrapper>
            <NavLink> <NoDecor href="https://github.com/Lakkanna/contributors.board"> Contribute Now </NoDecor> </NavLink>
            <NavLink> Signin </NavLink>
          </NavLinkWrapper>
        </HeaderItem>
      </Header>
    </Wrapper>
  );
};

export default NavBar;
