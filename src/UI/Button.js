import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, noBg }) => {
  return (
    <button className={`${styles.button} ${noBg ? styles.noBg : ''}`}>
      {children}
    </button>
  );
};

export default Button;
