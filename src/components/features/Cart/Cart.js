import React from 'react';
import PropTypes from 'prop-types';

import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';

import styles from './Cart.module.scss';

const Cart = ({ count }) => (
  <Button className={styles.cart} variant='main'>
    <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
    <div className={styles.cartCounter}>{count}</div>
  </Button>
);

Cart.propTypes = {
  count: PropTypes.number,
};

export default Cart;
