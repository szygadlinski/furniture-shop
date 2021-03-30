import React from 'react';
import styles from './CategoryFilter.module.scss';

const CategoryFilter = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.filterTitle}>FILTER BY CATEGORIES</div>
      <ul className={styles.filterList}>
        <li className={styles.item}>
          <a> &gt; furniture</a>
          <span className={styles.amount}>4</span>
        </li>
        <li className={styles.item}>
          <a> &gt; sofa</a>
          <span className={styles.amount}>5</span>
        </li>
        <li className={styles.item}>
          <a> &gt; chair</a>
          <span className={styles.amount}>8</span>
        </li>
        <li className={styles.item}>
          <a> &gt; table</a>
          <span className={styles.amount}>3</span>
        </li>
        <li className={styles.item}>
          <a> &gt; bedroom</a>
          <span className={styles.amount}>9</span>
        </li>
        <li className={styles.item}>
          <a> &gt; dining</a>
          <span className={styles.amount}>9</span>
        </li>
      </ul>
    </div>
  </div>
);

export default CategoryFilter;
