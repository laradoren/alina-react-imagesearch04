import React from 'react';
import css from './../styles.module.css';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.setModalState = this.setModalState.bind(this);
  }

  setModalState() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <li className={css.ImageGalleryItem} onClick={this.setModalState}>
        <img
          className={css.ImageGalleryItemImage}
          src={this.props.webformatURL}
          alt="Gallery item"
        />
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            setModalState={this.setModalState}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
