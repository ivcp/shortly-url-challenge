import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../UI/Button';
import useMediaQuery from '../hooks/useMediaQuers';
import styles from './MobileMenu.module.css';

const Menu = () => {
  const isDesktop = useMediaQuery('(min-width: 37.5em)');
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
        <Button noBg desktop={isDesktop}>
          Login
        </Button>
        <Button desktop={isDesktop}>Sign up</Button>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const isDesktop = useMediaQuery('(min-width: 37.5em)');
  const content = isDesktop ? (
    <Menu />
  ) : (
    ReactDOM.createPortal(<Menu />, document.getElementById('menu-root'))
  );
  return content;
};

export default MobileMenu;
