import styled from "styled-components";
import { Card } from "@material-ui/core";

const Container = styled.div`
  font-family: "ubuntu", font-weight: 600
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  color: #00000099;
  font-size: x-large;
`;

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

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
  Container,
  TitleWrapper,
  Title,
  BadgeWrapper,
  LinkWrapper,
  CardWrapper
}