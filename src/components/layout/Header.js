import React, { useState } from 'react';
import Button from '../../UI/Button';
import MobileMenu from '../../UI/MobileMenu';
import Grid from './Grid';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <Grid>
        <nav className={styles.nav}>
          <img src="/images/logo.svg" alt="logo" />
          <button onClick={toggleMenu} type="button" aria-label="mobile menu">
            <span
              className={`${styles.hamburger} ${menuOpen ? styles.closed : ''}`}
            ></span>
          </button>
        </nav>
        <div className={styles.image}>
          <img
            src="/images/illustration-working.svg"
            alt="illustration working"
          />
        </div>
        <div className={styles.title}>
          <h1> More than just shorter links</h1>
          <h2>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </h2>
          <Button>Get started</Button>
        </div>
      </Grid>
      {menuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
