import React, { Component } from 'react';
import Loading from '../components/Loading/Loading';
import AllArticles from '../components/AllArticles/AllArticles';
import { getApi } from '../services/api';

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
    this.setState({ loading: true })
    getApi(this.state.text)
      .then(articles => this.setState({ articles }))
  }

  render() {
    const { loading, text, articles } = this.state;
    if (loading) return <Loading />;

    return (
      <div>
        {/* <input type="text" onChange={this.handleChange} /> */}
        {/* <Search
          text={text}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        /> */}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Search News</label>
          <input
            id="text"
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>

        <AllArticles
          articles={articles}
        />
      </div>
    );
  }
}
