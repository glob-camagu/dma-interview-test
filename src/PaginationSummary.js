import React, { PropTypes } from 'react';

const PaginationSummary = ({ firstItem, lastItem, total }) => {
  const isPaginated = !(firstItem === 1 && lastItem === total);

  return (
    <div>
      {isPaginated && `${firstItem} - ${lastItem} of `}{total} results
    </div>
  );
};

PaginationSummary.propTypes = {
  firstItem: PropTypes.number.isRequired,
  lastItem: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default PaginationSummary;
