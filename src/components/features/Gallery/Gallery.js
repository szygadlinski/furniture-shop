/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../../common/SectionHeader/SectionHeader';
import GalleryProduct from '../../common/GalleryProduct/GalleryProduct';
import Button from '../../common/Button/Button';

import styles from './Gallery.module.scss';

const Gallery = ({ featured, topSeller, sale, topRated }) => {
  const tabs = [
    {
      name: 'Featured',
      products: featured,
    },
    {
      name: 'TopSeller',
      products: topSeller,
    },
    {
      name: 'Sale off',
      products: sale,
    },
    {
      name: 'Top rated',
      products: topRated,
    },
  ];

  const [isFading, setFading] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeProduct, setActiveProduct] = useState(activeTab.products[0]);
  const [sliderStart, setSliderStart] = useState(0);

  const handleTabChange = newIndex => {
    setFading(true);
    setTimeout(() => {
      setActiveTab(tabs[newIndex]);
      setSliderStart(0);
      setActiveProduct(tabs[newIndex].products[0]);
    }, 500);
    setTimeout(() => {
      setFading(false);
    }, 500);
  };

  const handleSlideClick = product => {
    setActiveProduct(product);
  };

  const handleSliderForward = event => {
    event.preventDefault();
    if (sliderStart + 6 < activeTab.products.length - 6) {
      setSliderStart(sliderStart + 6);
    } else setSliderStart(activeTab.products.length - 6);
  };

  const handleSliderBackward = event => {
    event.preventDefault();
    if (sliderStart - 6 > 0) {
      setSliderStart(sliderStart - 6);
    } else setSliderStart(0);
  };

  return (
    <section className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6 d-flex flex-column'>
            <SectionHeader title='Furniture Gallery' />
            <nav className={styles.tabs}>
              <ul>
                {tabs.map(tab => (
                  <li key={tabs.indexOf(tab)}>
                    <a
                      tabIndex={tabs.indexOf(tab) + 1}
                      onClick={() => handleTabChange(tabs.indexOf(tab))}
                    >
                      {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.product_wrapper}>
              <div className={isFading ? ` ${styles.fadeout}` : styles.fadein}>
                <GalleryProduct {...activeProduct} />
                <div className={styles.slider}>
                  <Button
                    className={styles.button}
                    onClick={event => handleSliderBackward(event)}
                  >
                    <span>&lt;</span>
                  </Button>
                  <div className={styles.slidesList}>
                    {activeTab.products
                      .filter((product, index) => index >= sliderStart)
                      .map(product => (
                        <div
                          className={
                            styles.slide +
                            (product === activeProduct ? ` ${styles.active}` : '')
                          }
                          key={product.id}
                          onClick={() => handleSlideClick(product)}
                        >
                          <img src={product.image} alt={product.name} />
                        </div>
                      ))}
                  </div>
                  <Button
                    className={styles.button}
                    onClick={event => handleSliderForward(event)}
                  >
                    <span>&gt;</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className={styles.promo}>
              <img
                src={process.env.PUBLIC_URL + '/images/gallery_right.png'}
                alt='bed promo'
              />
              <div className={styles.promo__inner}>
                <h3>
                  from <span>$50.80</span>
                </h3>
                <h2>Bedroom Bed</h2>
                <Button className={styles.promo__button} variant='main'>
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Gallery.propTypes = {
  featured: PropTypes.arrayOf(PropTypes.object),
  topSeller: PropTypes.arrayOf(PropTypes.object),
  topRated: PropTypes.arrayOf(PropTypes.object),
  sale: PropTypes.arrayOf(PropTypes.object),
};

export default Gallery;
