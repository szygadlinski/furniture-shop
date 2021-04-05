import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import Button from '../../common/Button/Button';
import ProductBox from '../../features/ProductBox/ProductBoxContainer';
import Slider from '../../common/Slider/Slider';
import parse from 'html-react-parser';

const Promoted = ({ products, banners }) => {
  const [playSlider, setPlaySlider] = useState(true);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='d-none d-md-block col-12 col-lg-4'>
            <div className={styles.deals}>
              <div className={styles.bar}>
                <h4>HOT DEALS</h4>
              </div>
              <Slider
                dotsStyle={{ top: '-44px' }}
                noButtons
                autoPlay={playSlider}
                interval={3}
              >
                {products.map(product => (
                  <ProductBox
                    key={product.id}
                    className={styles.product}
                    variant='promoted'
                    onModalOpen={() => setPlaySlider(false)}
                    onModalClose={() => setPlaySlider(true)}
                    {...product}
                  />
                ))}
              </Slider>
            </div>
          </div>
          <div className='col-12 col-lg-8'>
            <div className={styles.promoted}>
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
    </div>
  );
};

Promoted.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  banners: PropTypes.arrayOf(PropTypes.object),
};

export default Promoted;
