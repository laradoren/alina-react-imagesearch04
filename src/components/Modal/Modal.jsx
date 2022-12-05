import React from 'react';
import PropTypes from 'prop-types';
import css from './../styles.module.css';

export const Modal = ({ largeImageURL, setModalState }) => {
  return (
    <div className={css.Overlay} onClick={setModalState}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="Large item" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  setModalState: PropTypes.func.isRequired,
};
