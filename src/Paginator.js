import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const Paginator = ({ currentPage, numPages, onPageChange }) => (
  <div style={{textAlign: 'center'}}>
    <Button
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage -1)}>Previous</Button>{' '}
    <Button
      disabled={currentPage === numPages}
      onClick={() => onPageChange(currentPage + 1)}>Next</Button>
  </div>
);

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Paginator;
