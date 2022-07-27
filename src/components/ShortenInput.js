import React, { useState } from 'react';
import Button from '../UI/Button';
import Grid from './layout/Grid';
import Link from './Link';
import styles from './ShortenInput.module.css';

const ShortenInput = () => {
  const [error, setError] = useState(false);

  const submitHandler = e => {
    //TODO:
    e.preventDefault();
  };

  return (
    <section className={styles.shorten}>
      <Grid>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={submitHandler}>
            <input
              className={styles.input}
              type="text"
              placeholder="Shorten a link here..."
            />
            {error && <p>Please add a link</p>}
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

//TODO:
// validate input (not empty, is link)
//
