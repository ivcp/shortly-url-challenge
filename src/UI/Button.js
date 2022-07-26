import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, noBg, desktop }) => {
  return (
    <button
      className={`${styles.button} ${noBg ? styles.noBg : ''} ${
        desktop ? styles.desktop : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
