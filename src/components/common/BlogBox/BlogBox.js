import React from 'react';
//import PropTypes from 'prop-types';

import styles from './BlogBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faFolder } from '@fortawesome/free-solid-svg-icons';

const postData = {
  id: 'post-1',
  title: 'Witamy na nowej stronie sklepu!',
  image:
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  content:
    'Quisque varius, sapien a maximus ornare, purus mauris sollicitudin odio, vitae blandit nisi metus sit amet quam. Quisque maximus odio et lacus sodales elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut interdum sem. In hac habitasse platea dictumst. Phasellus in sagittis quam, quis molestie mi. Donec ut lacus ac dui blandit sodales. Maecenas nisi risus, dapibus a aliquet ut, ultrices vel ex. Proin fermentum sagittis massa. Nam hendrerit est vitae laoreet sollicitudin.',
  name: 'admin',
  date: 'June 16, 2020',
  tag: 'Unique',
};

const BlogBox = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h4>{postData.title}</h4>
      </div>
      <div className={styles.blogImage}>
        <img alt='' src={postData.image} />
      </div>
      <div className={styles.blogContent}>{postData.content}</div>
      <div className={'row ' + styles.rowOfData}>
        <div className={styles.data}>
          <div className={styles.admin}>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
            <a href='#'>{postData.name}</a>
          </div>
          <div className={styles.date}>
            <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
            <a href='#'>{postData.date}</a>
          </div>
          <div className={styles.tags}>
            <FontAwesomeIcon className={styles.icon} icon={faFolder} />
            <a href='#'>{postData.tag}</a>
          </div>
        </div>
        <div className={styles.readMore}>
          <a href='#'>Read more...</a>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
