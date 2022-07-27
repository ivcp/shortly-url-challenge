import React, { useState } from 'react';
import Button from '../UI/Button';
import { useRef } from 'react';
import Grid from './layout/Grid';
import Link from './Link';
import styles from './ShortenInput.module.css';

const ShortenInput = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const enteredLink = useRef(null);

  const submitHandler = async e => {
    e.preventDefault();
    const link = enteredLink.current.value.trim();
    if (link === '') {
      setError(true);
      setErrorMessage('Please add a link');
      return;
    }
    setError(false);
    e.target.reset();

    try {
      const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
      const response = await data.json();
      if (!response.ok) {
        setErrorMessage(response.error);
        throw new Error(response.error);
      }

      const shortenedLink = {
        id: response.result.code,
        short: response.result.full_short_link2,
        original: response.result.original_link,
      };
      setShortenedLinks([...shortenedLinks, shortenedLink]);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section className={styles.shorten}>
      <Grid>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={submitHandler}>
            <input
              ref={enteredLink}
              className={`${styles.input} ${error ? styles.inputError : ''}`}
              type="text"
              placeholder="Shorten a link here..."
            />
            {error && <p className={styles.error}>{errorMessage}</p>}
            <Button submit shorten>
              Shorten it!
            </Button>
          </form>
          {shortenedLinks.map(link => (
            <Link
              key={link.id}
              shortLink={link.short}
              originalLink={link.original}
            />
          ))}
        </div>
      </Grid>
    </section>
  );
};

export default ShortenInput;
