import React from 'react';
import styles from './Card.module.css';
import pStyles from './layout/AdvancedStatistics.module.css';

const Card = ({ second, third, imgUrl, title, text }) => {
  return (
    <div
      className={`${styles.card} ${second ? styles.second : ''} ${
        third ? styles.third : ''
      }`}
    >
      <div className={styles.icon}>
        <img src={imgUrl} alt={title} />
      </div>

      <h1 className={styles.title}>{title}</h1>
      <p className={pStyles.text}>{text}</p>
    </div>
  );
};

export default Card;
