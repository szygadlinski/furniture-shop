import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import Button from '../../common/Button/Button';
import ProductBox from '../../features/ProductBox/ProductBoxContainer';
import Slider from '../../common/Slider/Slider';
import parse from 'html-react-parser';

const Promoted = ({ products, banners }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className={styles.deals}>
              <div className={styles.bar}>
                <h4>HOT DEALS</h4>
              </div>
              <Slider dotsStyle={{ top: '-44px' }} noButtons autoPlay interval={3}>
                {products.map(product => (
                  <ProductBox
                    key={product.id}
                    className={styles.product}
                    variant='promoted'
                    {...product}
                  />
                ))}
              </Slider>
            </div>
          </div>
          <div className='col-md-8'>
            <Slider noDots>
              {banners.map((banner, i) => (
                <div key={i} className={styles.banner}>
                  <img src={banner.img} alt={banner.name} />
                  <div className={styles.headerBox}>
                    <h1>{parse(banner.h1)}</h1>
                    <h2>{banner.h2}</h2>
                    <Button className={styles.buttonShop}> SHOP NOW </Button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

Promoted.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  banners: PropTypes.arrayOf(PropTypes.object),
};

export default Promoted;
