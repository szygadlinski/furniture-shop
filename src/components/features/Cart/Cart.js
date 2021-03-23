import React from 'react';
import PropTypes from 'prop-types';

import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Cart.module.scss';

const Cart = ({ count }) => (
  <a href='#' className={styles.cart}>
    <div className={styles.cartIcon}>
      <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
    </div>
    <div className={styles.cartCounter}>{count}</div>
  </a>
);

Cart.propTypes = {
  count: PropTypes.number,
};

export default Cart;
