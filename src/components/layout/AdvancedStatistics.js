import React from 'react';
import Card from '../Card';
import styles from './AdvancedStatistics.module.css';
import Grid from './Grid';

const AdvancedStatistics = () => {
  return (
    <section className={styles.advanced}>
      <Grid>
        <div className={styles.titleContainer}>
          <div>
            <h1 className={styles.title}>Advanced statistics</h1>
            <p className={styles.text}>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          <hr />
          <Card
            imgUrl={'/images/icon-brand-recognition.svg'}
            title={'Brand Recognition'}
            text={`
  Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.`}
          />
          <Card
            second
            imgUrl={'/images/icon-detailed-records.svg'}
            title={'Detailed Records'}
            text={`
            Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.`}
          />
          <Card
            third
            second
            imgUrl={'/images/icon-fully-customizable.svg'}
            title={'Fully Customizable'}
            text={`
            Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.`}
          />
        </div>
      </Grid>
    </section>
  );
};

export default AdvancedStatistics;
