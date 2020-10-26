export const getApi = () => {
  const now = new Date();
  const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
  return fetch(`https://newsapi.org/v2/everything?q=${text}&from=${today}&to=${today}&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(json => json.articles)
    .then(console.log(json.articles))
};
