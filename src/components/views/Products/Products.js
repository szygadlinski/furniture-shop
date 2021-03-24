import React from 'react';
import styles from './Products.module.scss';

import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Products = () => (
  <div className={styles.root}>
    <NewFurniture />
  </div>
);

export default Products;
