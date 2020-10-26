import React from 'react';
import propTypes from 'prop-types';

const Search = ({
  text,
  onChange,
  onSubmit
}) => {
  <form onSubmit={onSubmit}>
    <label htmlFor="text">Search</label>
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
  text: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired
}

// export default Search;
