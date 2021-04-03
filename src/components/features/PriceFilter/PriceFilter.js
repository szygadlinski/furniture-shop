import React from 'react';
import PropTypes from 'prop-types';
import styles from './PriceFilter.module.scss';

class PriceFilter extends React.Component {
  state = {
    currentValue: 0,
  };

  getMinPrice(products){
    let minPrice = 100000;
    for (let product of products) {
      if (product.price < minPrice) {
        minPrice = product.price;
      }
    }
    return minPrice;
  }

  getMaxPrice(products){
    let maxPrice = 0;
    for (let product of products) {
      if (product.price > maxPrice) {
        maxPrice = product.price;
      }
    }
    return maxPrice;
  }

  render(){
    const { products } = this.props;
    const { currentValue } = this.state;

    const midPrice = (this.getMinPrice(products) + this.getMaxPrice(products)) / 2;

    return (
      <div className={styles.root}>
        <h5 className={styles.title}> Filter by Price </h5>
        <input
          className={styles.slider}
          type='range'
          min={this.getMinPrice(products)}
          max={this.getMaxPrice(products)}
          defaultValue={midPrice}
          step='5'
          onChange={event => this.setState({currentValue: event.target.value})}
        />
        <div className={styles.price}>
          <p className={styles.priceValue}>&#8804; {currentValue === 0 ? midPrice : currentValue}$</p>
        </div>
      </div>
    );
  }
}

PriceFilter.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default PriceFilter;
