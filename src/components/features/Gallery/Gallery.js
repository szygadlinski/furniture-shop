import React from 'react';

import SectionHeader from '../../common/SectionHeader/SectionHeader';

import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <section className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <SectionHeader title='Furniture Gallery' />
          </div>
          <div className='col'>
            <img
              src={process.env.PUBLIC_URL + '/images/gallery_right.png'}
              alt='bed promo'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
