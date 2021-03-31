import React from 'react';
import PropTypes from 'prop-types';

import styles from './GridProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../Button/Button';
import Rating from '../../Rating/Rating';
import ProductPopup from '../../features/ProductPopup/ProductPopup';

const GridProduct = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  image,
  id,
  compare,
  toggleStar,
  rated,
  isFavorite,
  faveHandler,
  comparisonHandler,
  addCartHandler,
  openModal,
  closeModal,
  category,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.image}>
          <img src={image} alt='' />
          <div className={styles.buttons}>
            <Button className={styles.button} variant='small' onClick={openModal}>
              Quick View
            </Button>
            <Button className={styles.button} variant='small' onClick={addCartHandler}>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <Rating id={id} rate={stars} toggleStar={toggleStar} rated={rated} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            className={isFavorite ? styles.favorite : ''}
            onClick={faveHandler}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={compare ? styles.compare : ''}
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

      <div className={styles.overlay} id={id}>
        <Button className={styles.popupButton} onClick={closeModal}>
          Close
        </Button>
        <ProductPopup
          name={name}
          price={price}
          category={category}
          rating={stars}
          image={image}
        />
      </div>
    </div>
  );
};

GridProduct.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  faveHandler: PropTypes.func,
  id: PropTypes.string,
  comparisonHandler: PropTypes.func,
  compareItems: PropTypes.func,
  compare: PropTypes.bool,
  toggleStar: PropTypes.func,
  rated: PropTypes.bool,
  addToCart: PropTypes.func,
  isFavorite: PropTypes.bool,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  addCartHandler: PropTypes.func,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  category: PropTypes.string,
};

export default GridProduct;
