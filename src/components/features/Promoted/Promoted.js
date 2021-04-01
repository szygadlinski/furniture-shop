import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import Button from '../../common/Button/Button';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Promoted = ({ products }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className={styles.deals}>
              <div className={styles.bar}>
                <h4>HOT DEALS</h4>
                <div className={styles.dots}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
              </div>
              <ProductBox
                className={styles.product}
                variant='promoted'
                {...products[0]}
              />
            </div>
          </div>
          <div className='col-md-8'>
            <div className={styles.banner}>
              <div className={styles.buttonBox}>
                <Button className={styles.button}>
                  <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} />
                </Button>
                <Button className={styles.button}>
                  <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                </Button>
              </div>
              <div className={styles.headerBox}>
                <h1>
                  INDOOR <span>FURNITURE</span>
                </h1>
                <h2>save up to 50% of all furniture</h2>
                <Button className={styles.buttonShop}> SHOP NOW </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promoted.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Promoted;
