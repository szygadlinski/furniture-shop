import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.bannerMain}>
        <div className={styles.bannerTitle}>
          BEDROOM
          <span> </span>
          <span className={styles.furniture}>FURNITURE</span>
        </div>
        <div className={styles.bannerSubtitle}>
          ALWAYS
          <span> 25% </span>
          OFF OR MORE
        </div>
      </div>
      <div>
        <ul className={styles.subBanner}>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              Home
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link_active}>
              Furniture
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Banner;
