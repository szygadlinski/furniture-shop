import React from 'react';
import styles from './Info.module.scss';
import PropTypes from 'prop-types';

const getPageName = urlPart =>
  (urlPart[0].toUpperCase() + urlPart.slice(1)).replace(/[_]/g, m => ' ');

const Info = ({
  match: {
    params: { pageId },
  },
}) => {
  const pageName = getPageName(pageId) || 'no title';

  return (
    <div className={styles.root}>
      <div className='container'>{pageName}</div>
    </div>
  );
};

Info.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pageId: PropTypes.string,
    }),
  }),
};

export default Info;
