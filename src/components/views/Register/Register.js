import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Register.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Register = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.containerWrapper}>
        <form className={styles.radioForm}>
          <div className={styles.radioBox}>
            <label>
              <input
                type='radio'
                className={styles.radio}
                checked='checked'
                value='no-account'
                name='register'
              ></input>
              I don&apos;t have an account
            </label>
            <label>
              <input
                type='radio'
                className={styles.radio}
                value='account'
                name='register'
              ></input>
              I have an account
            </label>
          </div>
        </form>

        <div className={styles.titleWrapper}>
          <h5>Create account</h5>
        </div>

        <form className={styles.registerWrapper}>
          <div className={styles.emailInput}>
            <input type='text' placeholder='First name *' />
          </div>
          <div className={styles.emailInput}>
            <input type='text' placeholder='Last name *' />
          </div>
          <div className={styles.emailInput}>
            <input type='text' placeholder='E-mail *' />
          </div>
          <div className={styles.passwordInput}>
            <input type='password' placeholder='Password *' />
            <FontAwesomeIcon icon={faEye} className={styles.icon} />
          </div>
          <div className={styles.passwordInput}>
            <input type='password' placeholder='Confirm password *' />
            <FontAwesomeIcon icon={faEye} className={styles.icon} />
          </div>
        </form>

        <form className={styles.checkboxWrapper}>
          <div className={styles.conditions}>
            <input type='checkbox' />
            <h6 className={styles.checkAll}>Select all</h6>
          </div>
          <div className={styles.conditions}>
            <input type='checkbox' />
            <h6>
              I accept <a href='/#'>Terms and Conditions</a> *
            </h6>
          </div>
          <div className={styles.conditions}>
            <input type='checkbox' />
            <h6>Sign up for newsletter</h6>
          </div>
        </form>

        <div className={styles.buttonsWrapper}>
          <Button variant='outline' className={styles.btn1}>
            &#10094; Cancel
          </Button>
          <Button variant='outline' className={styles.btn2}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  </div>
);

// Register.propTypes = {};

export default Register;
