import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';

class Brands extends React.Component {
  state = {
    margin: -1250,
  };

  moveLeft(margin) {
    const brandBoxSize = 124;
    this.setState({ margin: margin - brandBoxSize * 8 });
    if (margin <= -2242) {
      this.setState({ margin: margin - brandBoxSize * 4 });
    }
    if (margin <= -2342) {
      this.setState({ margin: -2820 });
    }
  }

  moveRight(margin) {
    const brandBoxSize = 124;
    this.setState({ margin: margin + brandBoxSize * 8 });
    if (margin >= -258) {
      this.setState({ margin: margin + 258 });
    }
    if (margin >= 0) {
      this.setState({ margin: 0 });
    }
  }
  render() {
    const { brands } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row align-items-center ' + styles.brandsBar}>
            <Button
              className={styles.button}
              onClick={event =>
                `${this.moveRight(this.state.margin)} ${event.preventDefault()}`
              }
            >
              <span className={styles.sign}>&lt;</span>
            </Button>
            <div className={styles.brandsPrimary}>
              <div
                className={styles.brandsSecondary}
                style={{ marginLeft: this.state.margin }}
              >
                {brands.map(brand => {
                  return (
                    <div className={styles.brand} key={brand.id.replace('brand-', '')}>
                      <img src={brand.image} alt={brand.id} />
                    </div>
                  );
                })}
              </div>
            </div>
            <Button
              className={styles.button}
              onClick={event =>
                `${this.moveLeft(this.state.margin)} ${event.preventDefault()}`
              }
            >
              <span className={styles.sign}>&gt;</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  map: PropTypes.func,
  brands: PropTypes.array,
};

export default Brands;
