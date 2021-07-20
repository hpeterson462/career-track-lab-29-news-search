export const getApi = () => {
  // const now = new Date();
  // const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  return fetch('https://newsapi.org/v2/everything?q=trump&from=2020-10-24&to=2020-10-25&sortBy=popularity&apiKey=d9e07710ff6e46f891d0977c55eabc2b')
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })))
};
