import React, { useState } from 'react';
import Button from './UI/Button';
import styles from './Link.module.css';

const Link = ({ shortLink, originalLink }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async text => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  const copyLink = async link => {
    try {
      await copyTextToClipboard(link);
      setIsCopied(true);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className={styles.link}>
      <a href={originalLink}>{originalLink}</a>
      <hr />
      <a href={shortLink}>{shortLink}</a>
      <Button
        shorten
        link
        copied={isCopied}
        onCopyLink={copyLink.bind(null, shortLink)}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </Button>
    </div>
  );
};

export default Link;
