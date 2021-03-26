import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/Banner.js';

const ProductList = () => (
  <div>
    <Banner />
    <div className={styles.root}>This is ProductList</div>
  </div>
);
// ProductList.propTypes = {};

export default ProductList;
