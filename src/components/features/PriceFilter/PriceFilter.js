import React from 'react';
import PropTypes from 'prop-types';
import styles from './PriceFilter.module.scss';

class PriceFilter extends React.Component {
  constructor(props){
    super(props);

    let maxPrice = 0;
    for (let product of this.props.products) {
      if (product.price > maxPrice) {
        maxPrice = product.price;
      }
    }

    this.props.changePrice(maxPrice);
  }

  getMinPrice (products) {
    let minPrice = 100000;
    for (let product of products) {
      if (product.price < minPrice) {
        minPrice = product.price;
      }
    }
    return minPrice;
  }

  getMaxPrice (products) {
    let maxPrice = 0;
    for (let product of products) {
      if (product.price > maxPrice) {
        maxPrice = product.price;
      }
    }
    return maxPrice;
  }

  render(){
    const { products, changePrice, currentPrice } = this.props;

    return (
      <div className={styles.root}>
        <h5 className={styles.title}> Filter by Price </h5>
        <input
          className={styles.slider}
          type='range'
          min={this.getMinPrice(products)}
          max={this.getMaxPrice(products)}
          defaultValue={this.getMaxPrice(products)}
          step='5'
          onChange={event => changePrice(event.currentTarget.value)}
        />
        <div className={styles.price}>
          <p className={styles.priceValue}>&#8804; {currentPrice}$</p>
        </div>
      </div>
    );
  }
}

PriceFilter.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  changePrice: PropTypes.func,
  currentPrice: PropTypes.number,
};

export default PriceFilter;
