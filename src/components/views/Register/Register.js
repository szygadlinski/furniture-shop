import React from 'react';
import styles from './Register.module.scss';
import Button from '../../common/Button/Button';

const Register = () => {
  const validate = event => {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmedPassword = document.getElementById('confirmPassword').value;
    if (
      firstName.length >= 3 &&
      firstName.length <= 30 &&
      lastName.length >= 3 &&
      lastName.length <= 30 &&
      email.includes('@') &&
      password.length >= 3 &&
      confirmedPassword.length >= 3 &&
      password === confirmedPassword
    ) {
      return true;
    } else if (
      firstName.length >= 3 &&
      firstName.length <= 30 &&
      lastName.length >= 3 &&
      lastName.length <= 30 &&
      email.includes('@') &&
      password.length >= 3 &&
      confirmedPassword.length >= 3 &&
      password !== confirmedPassword
    ) {
      window.alert('Check if passwords matches each other!');
      event.preventDefault();
      return false;
    } else {
      window.alert('Please check, if you filled in correctly all labels!');
      event.preventDefault();
    }
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
          <Button className={styles.button} onClick={validate} href='/'>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
