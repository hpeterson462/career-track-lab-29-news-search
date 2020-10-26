import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Article from '../Article/Article';
import Search from '../Search/Search';

const AllArticles = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.id}>
      <Link to={`/details/${article.id}`}>
        <Search {...article} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="articles">
      {articleElements}
    </ul>
  );
};

AllArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default AllArticles;
