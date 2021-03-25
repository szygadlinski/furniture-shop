import React from 'react';
import initialState from '../../../redux/initialState';

import SectionHeader from '../../common/SectionHeader/SectionHeader';
import GalleryProduct from '../../common/GalleryProduct/GalleryProduct';
import Button from '../../common/Button/Button';

import styles from './Gallery.module.scss';

const slides = [
  {
    id: '1',
    url: `${process.env.PUBLIC_URL}/images/gallery_1.png`,
    active: true,
  },
  {
    id: '2',
    url: `${process.env.PUBLIC_URL}/images/gallery_2.png`,
    active: false,
  },
  {
    id: '3',
    url: `${process.env.PUBLIC_URL}/images/gallery_3.png`,
    active: false,
  },
  {
    id: '4',
    url: `${process.env.PUBLIC_URL}/images/gallery_1.png`,
    active: false,
  },
  {
    id: '5',
    url: `${process.env.PUBLIC_URL}/images/gallery_2.png`,
    active: false,
  },
  {
    id: '6',
    url: `${process.env.PUBLIC_URL}/images/gallery_3.png`,
    active: false,
  },
  {
    id: '7',
    url: `${process.env.PUBLIC_URL}/images/gallery_1.png`,
    active: false,
  },
  {
    id: '8',
    url: `${process.env.PUBLIC_URL}/images/gallery_2.png`,
    active: false,
  },
  {
    id: '9',
    url: `${process.env.PUBLIC_URL}/images/gallery_3.png`,
    active: false,
  },
];

const Gallery = () => {
  return (
    <section className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6 d-flex flex-column'>
            <SectionHeader title='Furniture Gallery' />
            <nav className={styles.tabs}>
              <ul>
                <li>
                  <a tabIndex={1}>Featured</a>
                </li>
                <li>
                  <a tabIndex={2}>Top seller</a>
                </li>
                <li>
                  <a tabIndex={3}>Sale off</a>
                </li>
                <li>
                  <a tabIndex={4}>Top rated</a>
                </li>
              </ul>
            </nav>
            <div className={styles.product}>
              <GalleryProduct {...initialState.products[1]} />
            </div>
            <div className={styles.slider}>
              <Button className={styles.button}>
                <span>&lt;</span>
              </Button>
              <div className={styles.slidesList}>
                {slides.map(slide => {
                  return (
                    <div
                      className={
                        slide.active ? `${styles.slide} ${styles.active}` : styles.slide
                      }
                      key={slide.id}
                    >
                      <img src={slide.url} alt={`slide ${slide.id}`} />
                    </div>
                  );
                })}
              </div>
              <Button className={styles.button}>
                <span>&gt;</span>
              </Button>
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

export default Gallery;
