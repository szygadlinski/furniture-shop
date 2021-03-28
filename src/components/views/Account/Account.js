import React from 'react';
import styles from './Account.module.scss';
import PropTypes from 'prop-types';

const getPageName = urlPart =>
  (urlPart[0].toUpperCase() + urlPart.slice(1)).replace(/[_]/g, m => ' ');

const Account = ({
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

Account.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pageId: PropTypes.string,
    }),
  }),
};

export default Account;
