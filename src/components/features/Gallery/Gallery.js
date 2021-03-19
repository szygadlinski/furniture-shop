import React from 'react';

import SectionHeader from '../../common/SectionHeader/SectionHeader';

import styles from './Gallery.module.scss';

const images = [
  {
    id: '1',
    src: `${process.env.PUBLIC_URL}/images/gallery_1.png`,
  },
  {
    id: '2',
    src: `${process.env.PUBLIC_URL}/images/gallery_2.png`,
  },
  {
    id: '3',
    src: `${process.env.PUBLIC_URL}/images/gallery_3.png`,
  },
  {
    id: '4',
    src: `${process.env.PUBLIC_URL}/images/gallery_1.png`,
  },
  {
    id: '5',
    src: `${process.env.PUBLIC_URL}/images/gallery_2.png`,
  },
  {
    id: '6',
    src: `${process.env.PUBLIC_URL}/images/gallery_3.png`,
  },
  {
    id: '7',
    src: `${process.env.PUBLIC_URL}/images/gallery_1.png`,
  },
  {
    id: '8',
    src: `${process.env.PUBLIC_URL}/images/gallery_2.png`,
  },
  {
    id: '9',
    src: `${process.env.PUBLIC_URL}/images/gallery_3.png`,
  },
];

const Gallery = () => {
  return (
    <section className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6 d-flex flex-column'>
            <SectionHeader title='Furniture Gallery' />
            <div className={styles.border}>
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
              <div>
                <img
                  className={styles.main_picture}
                  src={process.env.PUBLIC_URL + '/images/gallery_1.png'}
                  alt='gallery main'
                />
              </div>
            </div>
            <div className={styles.slider}>
              {images.map(img => (
                <img key={img.id} src={img.src} alt={img.id} />
              ))}
            </div>
          </div>
          <div className='col-6'>
            <div className={styles.picture_wrapper}>
              <img
                src={process.env.PUBLIC_URL + '/images/gallery_right.png'}
                alt='bed promo'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
