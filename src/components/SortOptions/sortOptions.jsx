import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { SORT_ASC, SORT_DESC } from '../../constants';
import './sortOptions.css';

const propTypes = {
  sortOptionCallback: PropTypes.func.isRequired,
}

const SortOptions = ({ sortOptionCallback }) => {
  return (
    <div>
      <Button className='sort-button' onClick={() => sortOptionCallback(SORT_ASC)}>Sort A-Z</Button>
      <Button className='sort-button' onClick={() => sortOptionCallback(SORT_DESC)}>Sort Z-A</Button>
      <Button className='sort-button' onClick={() => sortOptionCallback('')}>Reset Sort</Button>
    </div>
  )
}

SortOptions.propTypes = propTypes;

export default SortOptions;
