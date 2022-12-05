import React from 'react';
import PropTypes from 'prop-types';
import css from './../styles.module.css';

export const Button = ({ loadNext }) => {
  return (
    <button onClick={loadNext} className={css.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadNext: PropTypes.func.isRequired,
};
