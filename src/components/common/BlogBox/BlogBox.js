import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlogBox.module.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {  faStar,  faExchangeAlt,  faShoppingBasket,} from '@fortawesome/free-solid-svg-icons';
//import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
//import Button from '../Button/Button';

class BlogBox extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.node,
    content: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    tag: PropTypes.string,
  };

  render() {
    const { title, image } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.title}>
          <h4>{title}</h4>
        </div>
        <div className={styles.blogImage}>
          <img alt='' src={image} />
        </div>
        <div className={styles.blogContent}>
          Quisque varius, sapien a maximus ornare, purus mauris sollicitudin odio, vitae
          blandit nisi metus sit amet quam. Quisque maximus odio et lacus sodales
          elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Pellentesque ut interdum sem. In hac habitasse platea dictumst. Phasellus in
          sagittis quam, quis molestie mi. Donec ut lacus ac dui blandit sodales.
          Maecenas nisi risus, dapibus a aliquet ut, ultrices vel ex. Proin fermentum
          sagittis massa. Nam hendrerit est vitae laoreet sollicitudin.
        </div>
        <div className={'row ' + styles.rowOfData}>
          <div className={styles.data}>
            <div className={styles.admin}>admin</div>
            <div className={styles.date}>June 16, 20</div>
            <div className={styles.tags}>abc</div>
          </div>
          <div className={styles.readMore}>
            <a href='#'>Read more...</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogBox;
