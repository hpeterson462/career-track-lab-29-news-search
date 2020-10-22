import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

const Article = ({ title, author, description }) => (
  <>
    <p>{title}</p>
    <p>{author}</p>
    <p>{description}</p>
  </>
);

Article.PropTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}