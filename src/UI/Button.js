import React from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  noBg,
  desktop,
  shorten,
  submit,
  link,
  onCopyLink,
  copied,
}) => {
  return (
    <button
      onClick={link ? onCopyLink : () => {}}
      type={`${submit ? 'submit' : 'button'}`}
      className={`${styles.button} ${noBg ? styles.noBg : ''} ${
        desktop ? styles.desktop : ''
      }  ${shorten ? styles.shorten : ''} ${link ? styles.link : ''} ${
        copied ? styles.copied : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
