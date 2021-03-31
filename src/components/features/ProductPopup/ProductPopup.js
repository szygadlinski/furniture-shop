import React from 'react';
import styles from './ProductPopup.module.scss';
import PropTypes from 'prop-types';

const ProductPopup = ({ name, price, category, rating, image }) => {
  return (
    <div className={styles.root}>
      <div className={styles.modal}>
        <h2>Product details</h2>
        <div className={styles.box}>
          <img src={image} alt='popup_image' />
          <div className={styles.details}>
            <div className={styles.boxColumn}>
              <h4>Name</h4>
              <h5>{name}</h5>
            </div>
            <div className={styles.boxColumn}>
              <h4>Price</h4>
              <h5>{price}</h5>
            </div>
            <div className={styles.boxColumn}>
              <h4>Category</h4>
              <h5>{category}</h5>
            </div>
            <div className={styles.boxColumn}>
              <h4>Rating</h4>
              <h5>{rating}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPopup.defaultProps = {
  name: 'Aenean Ru Bristique 1',
  category: 'bed',
  price: '$500',
  rating: '3,5',
  image:
    'https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80',
};

ProductPopup.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
};
export default ProductPopup;
