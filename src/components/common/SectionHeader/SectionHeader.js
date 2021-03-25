import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({ title }) => (
  <header className={styles.header}>
    <h3 className={styles.title}>{title}</h3>
  </header>
);

SectionHeader.propTypes = {
  title: PropTypes.string,
};

export default SectionHeader;
