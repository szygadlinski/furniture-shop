import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import styles from './TagFilter.module.scss';

const TagFilter = ({ tags }) => (
  <div className={styles.root}>
    <h5 className={styles.title}>Filter by tag</h5>
    <div className={styles.tags}>
      {tags.map(tag => (
        <div
          className={styles.tag + (tag.checked ? ' ' + styles.active : '')}
          key={tag.id}
        >
          <FontAwesomeIcon className={styles.icon} icon={faTags} />
          {tag.name}
        </div>
      ))}
    </div>
  </div>
);

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      checked: PropTypes.bool,
    })
  ),
};

export default TagFilter;
