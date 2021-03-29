import React from 'react';
import styles from './PriceFilter.module.scss';

const PriceFilter = () => (
  <div className={styles.root}>
    <h5 className={styles.title}> Filter by Price </h5>
    <input className={styles.slider} type='range' min='1' max='1000' />
    <div className={styles.form}>
      <a href="/#" className={styles.button}>FILTER</a>
      <input className={styles.input} type='text' placeholder='< $100' />
    </div>
  </div>   
);

export default PriceFilter;