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
  ...otherProps
}) => {
  const { name, price, image, id, isFavorite } = otherProps;

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
    event.target.parentNode.classList.remove(`${styles.show}`);
  };

  const openModal = event => {
    event.preventDefault();
    document.getElementById(`${id}`).classList.add(`${styles.show}`);
  };

  switch (variant) {
    case 'gallery':
      return (
        <GalleryProduct
          {...otherProps}
          comparisonHandler={comparisonHandler}
          faveHandler={faveHandler}
          addCartHandler={addCartHandler}
          openModal={openModal}
          closeModal={closeModal}
        />
      );
    default:
      return (
        <GridProduct
          variant={variant}
          {...otherProps}
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
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  compareItems: PropTypes.func,
  addToCart: PropTypes.func,
  isFavorite: PropTypes.bool,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  category: PropTypes.string,
  variant: PropTypes.string,
};

export default ProductBox;
