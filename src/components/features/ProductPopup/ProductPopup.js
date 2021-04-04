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
              <h5>Name</h5>
              <h4>{name}</h4>
            </div>
            <div className={styles.boxColumn}>
              <h5>Price</h5>
              <h4>$ {price}</h4>
            </div>
            <div className={styles.boxColumn + ' ' + styles.category}>
              <h5>Category</h5>
              <h4>{category}</h4>
            </div>
            <div className={styles.boxColumn}>
              <h5>Rating</h5>
              <h4>{rating}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPopup.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  image: PropTypes.string,
};
export default ProductPopup;
