import React, { PropTypes } from 'react';
import  { FormGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({ searchTerm, onSearchTermChange }) => (
  <FormGroup style={{marginTop: '20px'}}>
    <FormControl
      type="search"
      placeholder="Search"
      value={searchTerm}
      onChange={e => onSearchTermChange(e.target.value)} />
  </FormGroup>
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired
};

export default SearchBar;
