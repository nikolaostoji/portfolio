import React from 'react';
import styles from './Introduction.module.css';
import Socials from '../Socials/Socials.lazy';

const Introduction = () => (
  <div className={styles.Introduction}>
    <h1> Nikola Ostojic </h1>
    <h2> Senior Software Engineer </h2>
    <h3> Bachelor of Computer Science, University of Waterloo </h3>
    <p>
      <span>
        Senior backend developer that loves designing and building products. 
      </span>
    </p>
    <Socials />
  </div>
);

export default Introduction;
