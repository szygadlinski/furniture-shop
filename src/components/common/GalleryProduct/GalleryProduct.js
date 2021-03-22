import React from 'react';
import PropTypes from 'prop-types';

import styles from './GalleryProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const GalleryProduct = ({ name, price, oldPrice, stars }) => {
  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/gallery_1.png)`,
      }}
    >
      <div className={'col-auto d-flex flex-column p-0 ' + styles.buttons}>
        <Button variant='outline' tooltip='Favourite'>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant='outline' tooltip='Add to compare'>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
        <Button variant='outline' tooltip='Quick view'>
          <FontAwesomeIcon icon={faEye}>Quick view</FontAwesomeIcon>
        </Button>
        <Button variant='outline' tooltip='Add to cart'>
          <FontAwesomeIcon icon={faShoppingBasket}>Add to cart</FontAwesomeIcon>
        </Button>
      </div>
      <div className='col-auto p-0 align-self-end'>
        <div className={styles.label}>
          <div className={styles.price}>
            <div>$ {price}</div>
            {oldPrice && <div className={styles.old_price}>$ {oldPrice}</div>}
          </div>
          <h5>{name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

GalleryProduct.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  stars: PropTypes.number,
};

export default GalleryProduct;
