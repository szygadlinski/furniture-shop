import React from 'react';
import styles from './Blog.module.scss';
import PropTypes from 'prop-types';
//import initialState from '../../../redux/initialState';
import BlogBox from '../../common/BlogBox/BlogBoxContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Blog extends React.Component {
  static propTypes = {
    blogboxes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        image: PropTypes.node,
        tag: PropTypes.string,
      })
    ),
  };

  render() {
    //const { blogboxes } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.title}>
          <h3>Archives</h3>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-6 '>
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
                <h5>Recent posts</h5>
                <ul>
                  <li>
                    <a href='#'>Witamy na nowej stronie sklepu!</a>
                  </li>
                </ul>
              </div>
              <div className={styles.allComments}>
                <h5>Recent comments</h5>
              </div>
              <div className={styles.archives}>
                <h5>Archives</h5>
                <ul>
                  <li>
                    <a href='#'>June 2020</a>
                  </li>
                </ul>
              </div>
              <div className={styles.category}>
                <h5>Categories</h5>
                <ul>
                  <li>
                    <a href='#'>abc</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
