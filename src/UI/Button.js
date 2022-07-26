import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, noBg, desktop, shorten, submit, link }) => {
  return (
    <button
      type={`${submit ? 'submit' : 'button'}`}
      className={`${styles.button} ${noBg ? styles.noBg : ''} ${
        desktop ? styles.desktop : ''
      }  ${shorten ? styles.shorten : ''} ${link ? styles.link : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
