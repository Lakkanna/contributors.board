import * as React from "react";
import searchRepositories from "../../api/searchRepositories";
import RepositoryCard from "../../commonComponents/RepositoryCard/RepositoryCard";

export type avatar = {
  avatar_url: string;
}

export interface IRepositories {
  id: string;
  name: string;
  created_at: string;
  description: string;
  stargazers_count: number;
  owner: avatar,
  html_url: string;
}

interface State {
  publicRepositories: [];
  totalCount: number;
}

export default class Repositories extends React.Component<{}, {}> {
  public state: State = {
    publicRepositories: [],
    totalCount: 0
  }
  constructor(prop: {}) {
    super(prop);
    this.getPublicRepositories = this.getPublicRepositories.bind(this);
  }
  async getPublicRepositories() {
    const data = await searchRepositories();
    if (data) {
      this.setState({
        publicRepositories: data.items ? data.items : [],
        totalCount: data.total_count ? data.total_count : 0
      })
    }
  }

  componentDidMount() {
    this.getPublicRepositories();
  }

  render() {
    return (
      <React.Fragment>
      {
        this.state.publicRepositories.map((repo: IRepositories) => {
          return <RepositoryCard avatar={repo.owner.avatar_url} name={repo.name} description={repo.description} url={repo.html_url} />
        })
      }
      </React.Fragment>
    ) ;
  }
}