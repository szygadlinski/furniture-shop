import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <a href='#'>
                USD{' '}
                <FontAwesomeIcon className={styles.optionsIcon} icon={faCaretDown} />
              </a>
              <ul>
                <li>
                  <a href='#'>USD</a>
                </li>
                <li>
                  <a href='#'>PLN</a>
                </li>
                <li>
                  <a href='#'>EUR</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>
                English{' '}
                <FontAwesomeIcon className={styles.optionsIcon} icon={faCaretDown} />
              </a>
              <ul>
                <li>
                  <a href='#'>English</a>
                </li>
                <li>
                  <a href='#'>Polish</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>
                Help{' '}
                <FontAwesomeIcon className={styles.optionsIcon} icon={faCaretDown} />
              </a>
              <ul>
                <li>
                  <a href='#'>Payment</a>
                </li>
                <li>
                  <a href='#'>Delivery</a>
                </li>
                <li>
                  <a href='#'>Shop list</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} /> <p>Login</p>
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} />
                <p>Register</p>
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
