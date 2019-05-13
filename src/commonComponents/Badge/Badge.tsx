import * as React from "react";
import { BadgeWrapper } from "./BadgeStyled";

interface IProps {
  icon: JSX.Element;
  value: string | number;
  color: string;
}

const Badge: React.FC<IProps> = ({icon, color, value}) => {
  return <BadgeWrapper color={color}>
   {value} {icon}
  </BadgeWrapper>
}

export default Badge;
