import React, { PropTypes } from 'react';
import { Glyphicon } from 'react-bootstrap';

const SortControl = ({ field, direction, onFieldChange, onDirectionChange}) => {
  const glyph = direction === 'asc' ? 'arrow-down' : 'arrow-up';
  const nextDirection = direction === 'asc' ? 'desc' : 'asc';

  return (
    <div>
      <strong>Sort by</strong>{' '}
      <select value={field} onChange={e => onFieldChange(e.target.value)}>
        <option value="title">Name</option>
        <option value="date">Date</option>
      </select>{' '}
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          onDirectionChange(nextDirection);
        }}><Glyphicon glyph={glyph} /></a>
    </div>
  );
};

SortControl.propTypes = {
  field: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['asc', 'desc']),
  onFieldChange: PropTypes.func.isRequired,
  onDirectionChange: PropTypes.func.isRequired
};

export default SortControl;
