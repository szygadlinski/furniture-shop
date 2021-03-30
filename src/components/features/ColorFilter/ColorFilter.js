import React from 'react';
import styles from './ColorFilter.module.scss';

const ColorFilter = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.filterTitle}>FILTER BY COLOR</div>
      <div className={styles.colorWrapper}>
        <span className={`${styles.square} ${styles.red}`}></span>
        <a>Red</a>
      </div>
      <div className={styles.colorWrapper}>
        <span className={`${styles.square} ${styles.black}`}></span>
        <a>Black</a>
      </div>
      <div className={styles.colorWrapper}>
        <span className={`${styles.square} ${styles.yellow}`}></span>
        <a>Yellow</a>
      </div>
      <div className={styles.colorWrapper}>
        <span className={`${styles.square} ${styles.blue}`}></span>
        <a>Blue</a>
      </div>
      <div className={styles.colorWrapper}>
        <span className={`${styles.square} ${styles.pink}`}></span>
        <a>Pink</a>
      </div>
      <div className={styles.colorWrapper}>
        <span className={`${styles.square} ${styles.green}`}></span>
        <a>Green</a>
      </div>
    </div>
  </div>
);

export default ColorFilter;
