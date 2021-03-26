import React from 'react';
//import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
//import { checkPropTypes } from 'prop-types';

const ProductPage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row ' + styles.rowrow}>
        <NewFurniture rowSize={4} />
      </div>
    </div>
  </div>
);

//ProductPage.propTypes = {};

export default ProductPage;
