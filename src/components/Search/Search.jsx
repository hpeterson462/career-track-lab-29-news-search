import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  text,
  onChange,
  onSubmit
}) => {
  <form onSubmit={onSubmit}>
    <label htmlFor="text"></label>
    <input
      id="text"
      type="text"
      name="text"
      value={text}
      onChange={onChange}
    />
    <button type="submit">Search</button>
  </form>
};

Search.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
