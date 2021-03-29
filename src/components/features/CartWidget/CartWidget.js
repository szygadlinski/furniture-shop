/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './CartWidget.module.scss';

const CartWidget = ({ count }) => (
  <Link to='/cart' className={styles.cart}>
    <div className={styles.cartIcon}>
      <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
    </div>
    <div className={styles.cartCounter}>{count}</div>
  </Link>
);

CartWidget.propTypes = {
  count: PropTypes.number,
};

export default CartWidget;
