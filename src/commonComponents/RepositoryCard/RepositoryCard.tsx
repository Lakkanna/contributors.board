import * as React from "react";
import { CardHeader, IconButton, Icon } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, TitleWrapper, Title, BadgeWrapper, LinkWrapper, CardWrapper } from "./RepositoryCardStyle";
import Badge from "../Badge/Badge";
import {Star, Visibility, Timeline} from "@material-ui/icons";

type IData = {
  avatar: string;
  name: string;
  description: string;
  url: string;
  stars: string | number;
  forks: string | number;
  watchers: string | number;
  language: string;
}

type Title = {
  name: string;
  stars: string | number;
  watchers: string | number;
  forks: string | number;
  language: string;
}

const GetTitle: React.FC<Title> = ({name, stars, watchers, forks, language}) => {
  return (
    <Container>
      <TitleWrapper>
        <Title> { name } </Title>
        <BadgeWrapper>
          <Badge icon={<Icon style={{color: "#FFF"}}><Star fontSize="small" /></Icon>} value={stars} color="orange" />
          <Badge icon={<Icon style={{color: "#FFF"}}><Timeline fontSize="small" /></Icon>} value={forks} color="#67c856" />
          <Badge icon={<Icon style={{color: "#FFF"}}><Visibility fontSize="small" /></Icon>} value={watchers} color="grey" />
        </BadgeWrapper>
      </TitleWrapper>
      <span>{language}</span>
    </Container>
  );
};

const RepositoryCard: React.FC<IData> = ({avatar, name, description, url, stars, forks, watchers, language}) => {
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
          title={<GetTitle name={name} stars={stars} watchers={watchers} forks={forks} language={language} />}
          subheader={description}
        />
      </CardWrapper>
    </LinkWrapper>
  );
}

export default RepositoryCard;
