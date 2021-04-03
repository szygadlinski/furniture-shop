import React from 'react';
import PropTypes from 'prop-types';

import GridProduct from './GridProduct/GridProduct';
import GalleryProduct from './GalleryProduct/GalleryProduct';
import Button from '../../common/Button/Button';
import ProductPopup from '../ProductPopup/ProductPopup';

import styles from './ProductBox.module.scss';

const ProductBox = ({
  addToCart,
  addFavorite,
  removeFavorite,
  compareItems,
  variant,
  onModalOpen,
  onModalClose,
  ...productProps
}) => {
  const { name, price, image, id, isFavorite, category, stars } = productProps;

  const faveHandler = event => {
    event.preventDefault();
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const comparisonHandler = event => {
    event.preventDefault();
    compareItems({ id });
  };

  const addCartHandler = () => {
    addToCart({ id, name, price, image });
  };

  const closeModal = event => {
    event.preventDefault();
    onModalClose();
    event.target.parentNode.style.display = 'none';
  };

  const openModal = event => {
    event.preventDefault();
    onModalOpen();
    document.getElementById(`${id}`).style.display = 'flex';
  };

  let component;

  if (variant === 'gallery') {
    component = (
      <GalleryProduct
        {...productProps}
        comparisonHandler={comparisonHandler}
        faveHandler={faveHandler}
        addCartHandler={addCartHandler}
        openModal={openModal}
        closeModal={closeModal}
      />
    );
  } else {
    component = (
      <GridProduct
        variant={variant}
        {...productProps}
        comparisonHandler={comparisonHandler}
        faveHandler={faveHandler}
        addCartHandler={addCartHandler}
        openModal={openModal}
        closeModal={closeModal}
      />
    );
  }

  return (
    <div>
      {component}
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

ProductBox.propTypes = {
  compareItems: PropTypes.func,
  addToCart: PropTypes.func,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  category: PropTypes.string,
  variant: PropTypes.string,
  onModalOpen: PropTypes.func,
  onModalClose: PropTypes.func,
};

export default ProductBox;
