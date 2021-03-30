import React from 'react';
import styles from './ProductPopup.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductPopup = () => {
  return (
    <div className={styles.root}>
      <div className={styles.modal} id='productModal'>
        <h2>Product details</h2>
        <div className={styles.box}>
          <img
            src='https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg'
            alt='nic'
          />
          <div className={styles.details}>
            <div className={styles.boxColumn}>
              <h4>Name</h4>
              <h5>Product 1</h5>
            </div>
            <div className={styles.boxColumn}>
              <h4>Price</h4>
              <h5>$500</h5>
            </div>
            <div className={styles.boxColumn}>
              <h4>Category</h4>
              <h5>Bed</h5>
            </div>
            <div className={styles.boxColumn}>
              <h4>Rating</h4>
              <h5>3,5</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
