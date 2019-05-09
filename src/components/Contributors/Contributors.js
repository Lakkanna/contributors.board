import * as React from "react";
import searchRepositories from "../../api/searchRepositories";

const take = ["owner.avatar_url", "created_at", "name", "description", "stargazers_count"];

const getImage = (imageUrl) => {
  return <img src={imageUrl} width="50px" height="50px" alt={imageUrl} />;
};

const TabularData = (props) => {
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
         props.data.map(repo => <tr> { take.map(t => <td> { t === "owner.avatar_url" ? getImage(repo.owner.avatar_url) : t === "name" ? <a href={repo.html_url}>{repo.name}</a> : repo[t]} </td>) } </tr>)
       }
    </table>
  );
};

export default class Contributors extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      publicRepositories: [],
      totalCount: 0
    }

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
    console.log("component did mount");
    this.getPublicRepositories();
  }

  render() {
    return <TabularData data={this.state.publicRepositories} /> ;
  }
}