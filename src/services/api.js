export const getApi = () => {
  return fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(json => json.articles)
    .then(console.log(res))
};