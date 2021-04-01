import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import Button from '../../common/Button/Button';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Slider from '../../common/Slider/Slider';
import parse from 'html-react-parser';

const banners = [
  {
    img:
      'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3757055.jpg&fm=jpg',
    name: 'Indoor furniture',
    h1: 'INDOOR <span>FURNITURE</span>',
    h2: 'save up to 50% of all furniture',
  },
  {
    img:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    name: 'Guest room chairs',
    h1: 'GUEST ROOM <span>CHAIRS</span>',
    h2: 'save up to 50% of all furniture',
  },
];

const Promoted = ({ products }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className={styles.deals}>
              <div className={styles.bar}>
                <h4>HOT DEALS</h4>
                <div className={styles.dots}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
              </div>
              <ProductBox
                className={styles.product}
                variant='promoted'
                {...products[0]}
              />
            </div>
          </div>
          <div className='col-md-8'>
            <Slider>
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
};

export default Promoted;
