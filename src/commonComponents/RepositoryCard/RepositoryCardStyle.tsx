import styled from "styled-components";
import { Card } from "@material-ui/core";

const LinkWrapper:any = styled.a`
  text-decoration: none;
  color: inherit;
`;

const CardWrapper: any = styled(Card)`
  transition: 0.2s all ease-in-out;
  margin-bottom: 10px;
  :hover {
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)
  }
`;

export {
  LinkWrapper,
  CardWrapper
}