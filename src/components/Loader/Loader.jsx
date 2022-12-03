import React from 'react';
import PropTypes from 'prop-types';
import css from './../styles.module.css';

export const Loader = () => {
    return (
      <div className={css.Loader}>Loading...</div>
    );
}

Loader.propTypes = {
}
