import React from 'react';
import styles from './Banner.module.scss';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

const Banner = ({match}) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.bannerMain}>
        <div className={styles.bannerTitle}>
          BEDROOM
          <span> </span>
          <span className={styles.furniture}>FURNITURE</span>
        </div>
        <div className={styles.bannerSubtitle}>
          ALWAYS
          <span> 25% </span>
          OFF OR MORE
        </div>
      </div>
      <div>
        <ul className={styles.subBanner}>
          <li className={styles.item}>
            <Link to='/'>
              <a href='' className={styles.link}>
              Home
              </a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to={`/shop/${match.params.categoryId}`}>
              {match.params.categoryId}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

Banner.propTypes = {
  children: PropTypes.node,
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string,
    }),
  }),
};

Banner.defaultProps = {
  match: {
    params: {},
  },
};

export default Banner;
