import React from 'react';
import PropTypes from 'prop-types';

import GridProduct from './GridProduct/GridProduct';
import GalleryProduct from './GalleryProduct/GalleryProduct';

const ProductBox = ({
  addToCart,
  addFavorite,
  removeFavorite,
  compareItems,
  variant,
  ...productProps
}) => {
  const { name, price, image, id, isFavorite } = productProps;

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
    event.target.parentNode.style.display = 'none';
  };

  const openModal = event => {
    event.preventDefault();
    document.getElementById(`${id}`).style.display = 'flex';
  };

  if (variant === 'gallery') {
    return (
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
    return (
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
};

ProductBox.propTypes = {
  compareItems: PropTypes.func,
  addToCart: PropTypes.func,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  category: PropTypes.string,
  variant: PropTypes.string,
};

export default ProductBox;
