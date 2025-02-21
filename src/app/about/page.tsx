import React from 'react';
import styles from './about.module.scss';

export const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h4 className={styles.title}>
        About Me
      </h4>
      <div className={styles.content}>

      </div>
    </div>
  );
}

export default About;