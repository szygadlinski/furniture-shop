import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/Banner.js';
import CategoryFilter from '../../features/CategoryFilter/CategoryFilter';
import ColorFilter from '../../features/ColorFilter/ColorFilter';

const ProductList = () => (
  <div>
    <Banner />
    <CategoryFilter />
    <ColorFilter />
    <div className={styles.root}>This is ProductList</div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
