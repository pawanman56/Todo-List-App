import React from 'react';
import PropTypes from 'prop-types';

export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';

const options = {
  [FILTER_ALL]: 'All',
  [FILTER_ACTIVE]: 'Active',
  [FILTER_COMPLETED]: 'Copmpleted',
};

const TodoFilter = (props) => {
  const { fliter, changeFilter } = props;
  const className = (key) => (key === fliter ? 'selected' : '');

  return (
    <ul className="filters list-unstyled clearfix">
      {Object.keys(options).map(key => (
        <li key={key}>
          <a onClick={() => changeFilter(key)} className={className(key)}>
            {options[key]}
          </a>
        </li>
      ))}
    </ul>
  )
}

TodoFilter.propTypes = {
  fliter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

export default TodoFilter;