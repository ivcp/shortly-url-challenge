import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import styles from './MobileMenu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a className={styles.link} href="/">
            Features
          </a>
        </li>
        <li>
          <a className={styles.link} href="/">
            Pricing
          </a>
        </li>
        <li>
          <a className={styles.link} href="/">
            Resources
          </a>
        </li>
      </ul>
      <hr />
      <div className={styles.buttons}>
        <Button noBg={true}>Login</Button>
        <Button>Sign up</Button>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return ReactDOM.createPortal(<Menu />, document.getElementById('menu-root'));
};

export default MobileMenu;
