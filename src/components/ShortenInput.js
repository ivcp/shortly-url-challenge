import React from 'react';
import Button from '../UI/Button';
import Grid from './layout/Grid';
import Link from './Link';
import styles from './ShortenInput.module.css';

const ShortenInput = () => {
  return (
    <section className={styles.shorten}>
      <Grid>
        <div className={styles.container}>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Shorten a link here..."
            />
            <Button submit shorten>
              Shorten it!
            </Button>
          </form>
          <Link />
          <Link />
        </div>
      </Grid>
    </section>
  );
};

export default ShortenInput;
