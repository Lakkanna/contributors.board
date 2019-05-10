import * as React from "react";
import searchRepositories from "../../api/searchRepositories";

type avatar = {
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

interface IProps {
  data: IRepositories[]
}

const take = ["owner.avatar_url", "created_at", "name", "description", "stargazers_count"];

const getImage = (imageUrl: string) => {
  return <img src={imageUrl} width="50px" height="50px" alt={imageUrl} />;
};

const TabularData = (props: IProps) => {
  return (
    <table>
      <tr>
        <th></th>
        <th> Created At </th>
        <th> Repository Name </th> 
        <th> Description </th>
        <th> Stars </th>
      </tr>
       {
         props.data.map((repo: IRepositories) => {
          return <tr>
            {
              take.map((t) => {
                return <td>
                  {
                    t === "owner.avatar_url" ? getImage(repo.owner.avatar_url) : t === "name" ? <a href={repo.html_url}>{repo.name}</a> : repo.owner.avatar_url
                  }
                </td> 
              }
              )
            }
          </tr>
         })
       }
    </table>
  );
};

export default class Contributors extends React.Component<{}, {}> {
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
    return <TabularData data={this.state.publicRepositories} /> ;
  }
}