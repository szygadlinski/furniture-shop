import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Rating from '../Rating/Rating';

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  image,
  number,
  favorite,
  toggleFavorite,
  id,
  compareItems,
  compare,
  toggleColour,
  toggleStar,
  hoverStar,
  rated,
}) => {
  const faveHandler = event => {
    event.preventDefault();
    toggleFavorite({ id });
  };
  const comparisonHandler = event => {
    event.preventDefault();
    compareItems({ id });
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.image}>
          <img src={image} alt='' />
          <div className={styles.buttons}>
            <Button variant='small'>Quick View</Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <Rating
          id={id}
          rate={stars}
          toggleColour={toggleColour}
          toggleStar={toggleStar}
          hoverStar={hoverStar}
          rated={rated}
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            className={
              (number === 0 || number === 2 ? styles.favorite : '') +
              (favorite ? styles.favorite : '')
            }
            onClick={faveHandler}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={
              (number === 1 || number === 2 ? styles.compare : '') +
              (compare ? styles.compare : '')
            }
            onClick={comparisonHandler}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice && (
            <Button className={styles.old_price} noHover variant='small'>
              $ {oldPrice}
            </Button>
          )}
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string.isRequired,
  faveHandler: PropTypes.func,
  toggleFavorite: PropTypes.func,
  favorite: PropTypes.bool,
  id: PropTypes.string,
  number: PropTypes.number,
  comparisonHandler: PropTypes.func,
  compareItems: PropTypes.func,
  compare: PropTypes.bool,
  toggleColour: PropTypes.func,
  toggleStar: PropTypes.func,
  hoverStar: PropTypes.func,
  rated: PropTypes.bool,
};

export default ProductBox;
