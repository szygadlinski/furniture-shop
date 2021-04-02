import React from 'react';
import styles from './Register.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

const Register = ({ valid = false }) => {
  const validate = event => {
    event.preventDefault();
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmedPassword = document.getElementById('confirmPassword').value;
    const termsAndConditions = document.getElementById('conditions').checked;
    console.log(email.includes('@'));
    //if(
    //   (firstName.length >= 3 && firstName.length <= 30)
    //  && (lastName.length >=3 && lastName.length <= 30)
    //   && email.contains()
    // ) return true;
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <h2 className={styles.title}>Create your account</h2>
        <form className={styles.loginWrapper}>
          <div>
            <input
              type='text'
              id='first_name'
              minLength='3'
              maxLength='30'
              name='first_name'
              required
              placeholder=' '
            />
            <label htmlFor='first_name'>First Name</label>
            <div className={styles.requirements}>
              Your first name must be at least 3 characters and max 30 characters.
            </div>
          </div>

          <div>
            <input
              type='text'
              id='last_name'
              minLength='3'
              maxLength='30'
              name='last_name'
              required
              placeholder=' '
            />
            <label htmlFor='last_name'>Last Name</label>
            <div className={styles.requirements}>
              Your last name must be at least 3 characters and max 30 characters.
            </div>
          </div>

          <div>
            <input type='email' id='email' name='email' required placeholder=' ' />
            <label htmlFor='email'>Email Address</label>
            <div className={styles.requirements}>Must be a valid email address.</div>
          </div>

          <div>
            <input
              type='password'
              id='password'
              minLength='3'
              name='password'
              required
              placeholder=' '
            />
            <label htmlFor='password'>Password</label>
            <div className={styles.requirements}>
              Your password must be at least 3 characters.
            </div>
          </div>

          <div>
            <input
              type='password'
              id='confirmPassword'
              minLength='3'
              name='confirmPassword'
              required
              placeholder=' '
            />
            <label htmlFor='confirmPassword'>Confirm password</label>
            <div className={styles.requirements}>
              Your password must be at least 3 characters.
            </div>
          </div>
          <form className={styles.checkboxWrapper}>
            <div className={styles.conditions}>
              <input type='checkbox' id='conditions' />
              <h6>
                I accept <a href='/#'>Terms and Conditions</a> *
              </h6>
            </div>
          </form>

          <Button className={styles.button} onClick={validate}>
            <a href='/'>Sign up</a>
          </Button>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  valid: PropTypes.bool,
};

export default Register;
