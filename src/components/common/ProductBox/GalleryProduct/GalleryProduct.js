import React from 'react';
import PropTypes from 'prop-types';

import styles from './GalleryProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../Button/Button';
import Rating from '../../Rating/Rating';

const GalleryProduct = ({
  id,
  name,
  price,
  oldPrice,
  stars,
  image,
  className: propClassName,
  isFavorite,
  faveHandler,
  comparisonHandler,
  compare,
  addCartHandler,
  toggleStar,
  rated,
}) => {
  const classes = [styles.root];
  if (propClassName) classes.push(propClassName);

  return (
    <div
      className={classes.join(' ')}
      style={{
        backgroundImage: `url(${image}`,
      }}
    >
      <div className={'col-auto d-flex flex-column p-0 ' + styles.buttons}>
        <Button
          variant='outline'
          tooltip='Favourite'
          className={isFavorite ? styles.favorite : ''}
          onClick={faveHandler}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          variant='outline'
          tooltip='Add to compare'
          className={compare ? styles.compare : ''}
          onClick={comparisonHandler}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
        <Button variant='outline' tooltip='Quick view'>
          <FontAwesomeIcon icon={faEye}>Quick view</FontAwesomeIcon>
        </Button>
        <Button variant='outline' tooltip='Add to cart' onClick={addCartHandler}>
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
          <Rating id={id} rate={stars} toggleStar={toggleStar} rated={rated} />
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
  image: PropTypes.string,
  className: PropTypes.string,
  isFavorite: PropTypes.bool,
  faveHandler: PropTypes.func,
  compare: PropTypes.bool,
  comparisonHandler: PropTypes.func,
  addCartHandler: PropTypes.func,
  id: PropTypes.string,
  toggleStar: PropTypes.func,
  rated: PropTypes.bool,
};

export default GalleryProduct;
