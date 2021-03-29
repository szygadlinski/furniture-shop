import React from 'react';
//import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';

const ProductPage = () => (
  <div className={styles.root}>
    <NewFurniture rowSize={4} />
    <Feedback />
    <Brands />
  </div>
);

//ProductPage.propTypes = {};

export default ProductPage;
