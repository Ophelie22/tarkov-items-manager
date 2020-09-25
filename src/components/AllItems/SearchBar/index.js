import React from 'react';
import { Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

const SearchBar = ({
  sbValue,
  onInputChange,
}) => {
  const handleChange = (evt) => {
    onInputChange({ sbValue: evt.target.value });
  };

  return (

    <Search
      className="searchbar"
      placeholder="Search an item"
      value={sbValue}
      onChange={handleChange}
    />

  );
};

SearchBar.propTypes = {

  sbValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchBar;

