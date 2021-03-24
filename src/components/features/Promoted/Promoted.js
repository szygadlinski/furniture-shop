import React from 'react';
import styles from './Promoted.module.scss';
import initialState from '../../../redux/initialState';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faEye,
  faArrowLeft,
  faArrowRight,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Promoted = () => {
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
              <div className={styles.deal}>
                <div className={styles.picture}>
                  <img src={initialState.promotion.picture} alt='furniture' />
                  <div className={styles.addToCart}>
                    <Button variant='small' className={styles.addToCartButton}>
                      <FontAwesomeIcon icon={faShoppingBasket} /> ADD TO CART
                    </Button>
                  </div>
                  <div className={styles.counter}>
                    <div className={styles.bigDot}>
                      <h1>25</h1>
                      <h1>DAYS</h1>
                    </div>
                    <div className={styles.bigDot}>
                      <h1>10</h1>
                      <h1>HRS</h1>
                    </div>
                    <div className={styles.bigDot}>
                      <h1>45</h1>
                      <h1>MIN</h1>
                    </div>
                    <div className={styles.bigDot}>
                      <h1>30</h1>
                      <h1>SECS</h1>
                    </div>
                  </div>
                </div>
                <div className={styles.offert}>
                  <h5>Lorem Ipsum</h5>
                  <div className={styles.rating}>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.actions}>
                    <div className={styles.options}>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faEye} />
                      </Button>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faHeart} />
                      </Button>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faExchangeAlt} />
                      </Button>
                    </div>
                    <div className={styles.price}>
                      {358 && (
                        <Button className={styles.old_price} noHover variant='small'>
                          $ 358.00
                        </Button>
                      )}
                      <Button noHover variant='small'>
                        $ 300
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className={styles.headerBox}></div>
              <h1>INDOOR</h1> <h1>FURNITURE</h1>
              <h2>save up to 50% of all furniture</h2>
              <Button className={styles.buttonShop}> SHOP NOW </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
