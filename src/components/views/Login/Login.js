import React from 'react';
import styles from './Login.module.scss';
import Button from '../../common/Button/Button';

const Login = () => (
  <div className={styles.root}>
    <div className='container'>
      <h2 className={styles.title}>Sign in</h2>
      <form className={styles.loginWrapper}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' minLength='6' required />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' minLength='8' required />
        <p>
          Forgot password?
          <a href='#' onClick={event => event.preventDefault()}>
            {' Remind password.'}
          </a>
        </p>
        <Button className={styles.button} onClick={event => event.preventDefault()}>
          Sign in
        </Button>
      </form>
    </div>
  </div>
);

export default Login;
