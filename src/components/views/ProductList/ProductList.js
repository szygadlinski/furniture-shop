import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/Banner.js';
import SizeFilter from '../../features/SizeFilter/SizeFilter';

const ProductList = () => (
  <div>
    <div className={styles.root}>
      <div className='container'>
        <Banner />

        <div className='row'>
          <div className='col-9'></div>
          <div className='col-3'>
            <SizeFilter />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductList;
