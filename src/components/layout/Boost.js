import React from 'react';
import Button from '../UI/Button';
import styles from './Boost.module.css';

const Boost = () => {
  return (
    <section className={styles.boost}>
      <h1>Boost your links today</h1>
      <Button>Get started</Button>
    </section>
  );
};

export default Boost;
