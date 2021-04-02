import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Register.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.containerWrapper}>
          <form className={styles.radioForm}>
            <div className={styles.radioBox}>
              <Button>
                <a href='/login'>I have an account</a>
              </Button>
            </div>
          </form>

          <div className={styles.titleWrapper}>
            <h5>Create account</h5>
          </div>

          <form className={styles.registerWrapper}></form>

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
};
// Register.propTypes = {};

export default Register;
