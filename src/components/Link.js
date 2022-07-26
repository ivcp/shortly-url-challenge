import React from 'react';
import Button from '../UI/Button';
import styles from './Link.module.css';

const Link = () => {
  return (
    <div className={styles.link}>
      <a href="https/::frontendmentor.io">htts/:frontendmentor.io</a>
      <hr />
      <a href="https/::frontendmentor.io">htts/:rel.ink/k4lKj</a>
      <Button shorten link>
        Copy
      </Button>
    </div>
  );
};

export default Link;
