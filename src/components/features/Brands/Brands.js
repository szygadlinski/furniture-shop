import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';

class Brands extends React.Component {
  render() {
    const { brands } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row align-items-center ' + styles.brandsBar}>
            <Button className={styles.button}>
              <span className={styles.sign}>&lt;</span>
            </Button>
            <ul className={styles.brandsList}>
              {brands.map(brand => {
                return (
                  <li
                    className={styles.brand}
                    key={brand.id.replace('brand-', '')}
                    style={{ backgroundImage: `url('${brand.image}')` }}
                  ></li>
                );
              })}
            </ul>
            <Button className={styles.button}>
              <span className={styles.sign}>&gt;</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
