import React from 'react';
import styles from './ProductPopup.module.scss';
import Button from '../../common/Button/Button';

const ProductPopup = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <span className='close-icon'>x</span>
        <h1>Product details</h1>
        <div className={styles.box}>
          <div className={styles.picture}>
            <img
              src='https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg'
              alt='yes'
            />
          </div>
          <div className={styles.details}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
