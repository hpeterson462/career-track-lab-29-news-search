import React, { Component } from 'react';
import Search from '../components/app/Search.jsx';
import Loading from '../components/Loading/Loading.jsx';
import AllArticles from '../components/app/AllArticles.jsx';

export default class NewsSearch extends Component {
  state = {
    loading: false,
    text: '',
    articles: []
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    searchNews(this.state.text)
      .then(articles => this.setState({ articles }))
  }

  render() {
    const { loading, text, articles } = this.state;
    if (loading) return <Loading />;

    return (
      <div>
        <Search
          text={text}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <AllArticles
          articles={articles}
        />
      </div>
    );
  }
}
