import React from 'react';
import styles from './TechnologiesDisplay.module.css';

const TechnologiesDisplay = (props) => (
  <div className={styles.TechnologiesDisplay}>
      {props.technologies.map((technology, index) => (
          <div key={index} className={styles.TechnologyDisplayBox}>
            {technology}
          </div>
        ))}
  </div>
);

export default TechnologiesDisplay;
