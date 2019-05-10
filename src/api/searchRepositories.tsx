
type items = {
  name: string
}
interface IResponse {
  items: items[];
  total_count: number
}

const searchRepositories = async (language = "javascript", sortBy = "stars",
  orderBy = "desc", starsCount = 100, starsCondition = ">"): Promise<IResponse> => {
    let URL = "https://api.github.com/search/repositories";
    URL += `?q=stars:${starsCondition}${starsCount}+language:${language}&sort=${sortBy}&order=${orderBy}`;

    const repos = await fetch(URL);
    return repos.json().then(repo => {
      console.log("Repositories ", repo);
      return repo;
    });
};

export default searchRepositories;
