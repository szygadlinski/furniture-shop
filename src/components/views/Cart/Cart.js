import React from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faArrowRight,
  faShoppingCart,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const handleClick = event => {
  event.preventDefault();
};

const Cart = () => {
  return (
    <div className={styles.root}>
      <div className={styles.banner}>
        <div className='container'>
          <div className={styles.flexboxContainer}>
            <h1>Cart</h1>
            <div className={styles.bannerIcons}>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
              <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className={`col-md-2 ${styles.noPadding}`}>
            <div className={styles.columnFlexparent}>
              <div className={styles.columnBanner}> </div>
              <div className={styles.miniature}>
                <div className={styles.iconCircle}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className={styles.productImage}> </div>
              </div>
              <div className={styles.miniature}>
                <div className={styles.iconCircle}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className={styles.productImage}> </div>
              </div>
              <div className={styles.miniature}>
                <div className={styles.iconCircle}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className={styles.productImage}> </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4 ${styles.noPadding}`}>
            <div className={styles.columnFlexparent}>
              <div className={styles.columnBanner}>
                <h4>Product</h4>
              </div>
              <div className={styles.description}>
                <p>Lorem ipsum</p>
              </div>
              <div className={styles.description}>
                <p>Lorem ipsum</p>
              </div>
              <div className={styles.description}>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div className={`col-md-1 ${styles.noPadding}`}>
            <div className={styles.columnFlexparent}>
              <div className={styles.columnBanner}>
                <h4>Price</h4>
              </div>
              <div className={styles.price}>
                <p>$5.00</p>
              </div>
              <div className={styles.price}>
                <p>$5.00</p>
              </div>
              <div className={styles.price}>
                <p>$5.00</p>
              </div>
            </div>
          </div>
          <div className={`col-md-3 ${styles.noPadding}`}>
            <div className={styles.columnFlexparent}>
              <div className={styles.columnBanner}>
                <h4>Quantity</h4>
              </div>
              <div className={styles.quantity}>
                <form id='myform'>
                  <input
                    type='button'
                    value='-'
                    className={styles.qtyminus}
                    field='quantity'
                  />
                  <input type='text' name='quantity' value='1' className={styles.qty} />
                  <input
                    type='button'
                    value='+'
                    className={styles.qtyplus}
                    field='quantity'
                  />
                </form>
              </div>
              <div className={styles.quantity}>
                <form id='myform'>
                  <input
                    type='button'
                    value='-'
                    className={styles.qtyminus}
                    field='quantity'
                  />
                  <input type='text' name='quantity' value='1' className={styles.qty} />
                  <input
                    type='button'
                    value='+'
                    className={styles.qtyplus}
                    field='quantity'
                  />
                </form>
              </div>
              <div className={styles.quantity}>
                <form id='myform'>
                  <input
                    type='button'
                    value='-'
                    className={styles.qtyminus}
                    field='quantity'
                  />
                  <input type='text' name='quantity' value='1' className={styles.qty} />
                  <input
                    type='button'
                    value='+'
                    className={styles.qtyplus}
                    field='quantity'
                  />
                </form>
              </div>
            </div>
          </div>
          <div className={`col-md-2 ${styles.noPadding}`}>
            <div className={styles.columnFlexparent}>
              <div className={styles.columnBanner}>
                <h4>Total</h4>
              </div>
              <div className={styles.price}>
                <p>$5.00</p>
              </div>
              <div className={styles.price}>
                <p>$5.00</p>
              </div>
              <div className={styles.price}>
                <p>$5.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className={`col-md-12 ${styles.noPadding}`}>
            <div className={styles.coupon}>
              <div className='container'>
                <div className='row'>
                  <div className={`col-md-5 ${styles.noPadding}`}>
                    <div className={styles.flexParent}>
                      <div className={styles.code}>
                        <form>
                          <textarea placeholder='Coupon code' />
                        </form>
                      </div>
                      <Button
                        variant='outline'
                        className={styles.button}
                        onClick={handleClick}
                      >
                        APPLY COUPON
                      </Button>
                    </div>
                  </div>
                  <div className={`offset-md-5 col-md-2 ${styles.noPadding}`}>
                    <div className={styles.update}>
                      <Button
                        variant='outline'
                        className={styles.button}
                        onClick={handleClick}
                      >
                        UPDATE CART
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.totals}>
        <div className='container'>
          <div className='row'>
            <div className={`offset-md-6 col-md-6 ${styles.noPadding}`}>
              <div className={styles.table}>
                <div className={styles.summaryBanner}>
                  <h2>Cart totals</h2>
                </div>
                <div className='container'>
                  <div className='row'>
                    <div className={`col-md-6 ${styles.noPadding}`}>
                      <div className={styles.flexParent}>
                        <div className={styles.textRow}>
                          <h4>Subtotal</h4>
                        </div>
                        <div className={styles.textRow}>
                          <h4>Total</h4>
                        </div>
                      </div>
                    </div>
                    <div className={`col-md-6 ${styles.noPadding}`}>
                      <div className={styles.flexParent}>
                        <div className={styles.textRow}>
                          <p>$92.00</p>
                        </div>
                        <div className={styles.textRow}>
                          <p>$92.00</p>
                        </div>
                      </div>
                    </div>
                    <div className={`col-md-12 ${styles.noPadding}`}>
                      <div className={styles.proceed}>
                        <Button
                          variant='outline'
                          className={styles.button}
                          onClick={handleClick}
                        >
                          PROCEED TO CHECKOUT
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
