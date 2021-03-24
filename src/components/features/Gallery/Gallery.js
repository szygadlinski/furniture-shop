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

  const handleTabChange = newIndex => {
    setFading(true);
    setTimeout(() => {
      setActiveTab(tabs[newIndex]);
    }, 500);
    setTimeout(() => {
      setFading(false);
    }, 500);
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
                <GalleryProduct {...activeTab.products[0]} />
                <div className={styles.slider}>
                  <Button className={styles.button}>
                    <span>&lt;</span>
                  </Button>
                  <div className={styles.slidesList}>
                    {activeTab.products.map(product => (
                      <div className={styles.slide} key={product.id}>
                        <img src={product.image} alt={product.name} />
                      </div>
                    ))}
                  </div>
                  <Button className={styles.button}>
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
