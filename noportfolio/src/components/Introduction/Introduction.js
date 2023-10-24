import React from 'react';
import styles from './Introduction.module.css';
import Socials from '../Socials/Socials.lazy';

const Introduction = () => (
  <div className={styles.Introduction}>
    <h1> Nikola Ostojic </h1>
    <h2> Senior Software Engineer </h2>
    <h3> Bachelor of Computer Science, University of Waterloo </h3>
    <h4>
      <span>
        Senior software developer that can design, build and lead projects for your team! 
      </span>
    </h4>
    <p>
      <span>
      My journey as a software developer started through my interested in gaming.
      It was during a summer camp while I was still in high school, that I developed an Xbox 360 game using C#.
      In my fourth year at the University of Waterloo, a distributed systems course sparked my interest in the cloud.
      Fast forward to today, I'm a backend/full-stack developer focused on building cloud-based services, eager to solve new challenges.
      </span>
    </p>
    <Socials />
  </div>
);

export default Introduction;
