import React, { Component } from 'react';
import AllArticles from '../components/app/AllArticles.jsx';

export default class NewsSearch extends Component {
  state = {
    loading: true,
    articles: []
  }

  componentDidMount() {
    getApi()
      .then(articles => {
        this.setState({ articles, loading: false });
      });
  }

  render() {
    const { loading, articles } = this.state;
    if (loading) return <Loading />;

    return (
      <AllArticles articles={articles} />
    );
  }
}