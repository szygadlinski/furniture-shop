import React from 'react';
import styles from './StickyBar.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const StickyBar = ({ products, removeItem }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        {products.map(product => (
          <div
            key={product.id}
            className={`col-2 ${styles.stickyWrapper}`}
            onClick={() => removeItem(product.id)}
          >
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url('${product.image}')`,
              }}
            ></div>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </div>
        ))}
        <div className='col-2'>
          {products.length < 2 ? '' : <Button variant='small'>Compare</Button>}
        </div>
      </div>
    </div>
  </div>
);

StickyBar.propTypes = {
  products: PropTypes.array,
  removeItem: PropTypes.func,
};

export default StickyBar;
