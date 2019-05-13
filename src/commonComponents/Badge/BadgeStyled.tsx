import Styled from "styled-components";

const BadgeWrapper = Styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #FFF;
  background: ${props => props.color};
  font-weight: 600;
  height: 23px;
  width: 90px;
  border-radius: 4px;
  padding: 2px;
  margin: 2px;
  font-size: 12px;
`;

export {
  BadgeWrapper
}