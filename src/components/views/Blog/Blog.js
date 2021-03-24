import React from 'react';
import styles from './Blog.module.scss';
//import PropTypes from 'prop-types';
import BlogBox from '../../common/BlogBox/BlogBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faFolder } from '@fortawesome/free-solid-svg-icons';

const Blog = () => (
  <div className={styles.root}>
    <div className={styles.title}>
      <h3>Archives</h3>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-6'>
          <BlogBox />
        </div>
        <div className='col-md'></div>
        <div className='col-md-3'>
          <div className={styles.search}>
            <input placeholder='Search...' type='text' />
            <button>
              <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            </button>
          </div>
          <div className={styles.allPostList}>
            <h5 className={styles.subtitles}>Recent posts</h5>
            <ul>
              <li>
                <a href='#'>Witamy na nowej stronie sklepu!</a>
              </li>
            </ul>
          </div>
          <div className={styles.allComments}>
            <h5 className={styles.subtitles}>Recent comments</h5>
          </div>
          <div className={styles.archives}>
            <h5 className={styles.subtitles}>Archives</h5>
            <ul>
              <li>
                <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                <a href='#'>June 2020</a>
              </li>
              <li>
                <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                <a href='#'>July 2020</a>
              </li>
            </ul>
          </div>
          <div className={styles.category}>
            <h5 className={styles.subtitles}>Categories</h5>
            <ul>
              <li>
                <FontAwesomeIcon className={styles.icon} icon={faFolder} />
                <a href='#'>Unique</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
