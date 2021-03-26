import React from 'react';
import styles from './SizeFilter.module.scss';

const SizeFilter = () => (
  <div className={styles.root}>
    <h5 className={styles.title}>Filter by size</h5>
    <div className={styles.sizeOptions}>
      <div className={styles.sizeOption}>
        <input type='checkbox' id='size-s' checked />
        <label htmlFor='size-s'>
          <span></span>S<p className={styles.amount}>3</p>
        </label>
      </div>
      <div className={styles.sizeOption}>
        <input type='checkbox' id='size-m' />
        <label htmlFor='size-m'>
          <span></span>M<p className={styles.amount}>4</p>
        </label>
      </div>
      <div className={styles.sizeOption}>
        <input type='checkbox' id='size-l' />
        <label htmlFor='size-l'>
          <span></span>L<p className={styles.amount}>5</p>
        </label>
      </div>
      <div className={styles.sizeOption}>
        <input type='checkbox' id='size-xl' />
        <label htmlFor='size-xl'>
          <span></span>
          XL
          <p className={styles.amount}>5</p>
        </label>
      </div>
      <div className={styles.sizeOption}>
        <input type='checkbox' id='size-xxl' />
        <label htmlFor='size-xxl'>
          <span></span>
          XXL
          <p className={styles.amount}>5</p>
        </label>
      </div>
    </div>
  </div>
);

export default SizeFilter;
