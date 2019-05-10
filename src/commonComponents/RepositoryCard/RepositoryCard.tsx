import * as React from "react";
import { CardHeader, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { LinkWrapper, CardWrapper } from "./RepositoryCardStyle";

type IData = {
  avatar: string;
  name: string;
  description: string;
  url: string;
}

const RepositoryCard: React.FC<IData> = ({avatar, name, description, url}) => {
  return (
    <LinkWrapper href={url}>
      <CardWrapper elevation="4">
        <CardHeader
          avatar={
            <img src={avatar} width="50px" height="50px" alt={name} />
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={<span style={{fontFamily: "ubuntu", fontWeight: 600}}> {name} </span>}
          subheader={description}
        />
      </CardWrapper>
    </LinkWrapper>
  );
}

export default RepositoryCard;
