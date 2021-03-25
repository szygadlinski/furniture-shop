import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import ColorFilter from '../../features/ColorFilter/ColorFilter';

const ProductList = () => (
  <div>
    <ColorFilter />
    <div className={styles.root}>This is ProductList</div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
