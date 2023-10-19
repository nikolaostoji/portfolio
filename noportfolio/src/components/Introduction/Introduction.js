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
        I got into software development from my interest in gaming; creating an Xbox 360 game in C# while in high school during a summer camp.
        In my 4th year at the University of Waterloo, I took a distributed systems course, where I gained interested in building cloud applications. 
        Fast-forward 7 years later, I have worked in a variety of fields as a backend developer, building scalable services.
      </span>
    </p>
    <Socials />
  </div>
);

export default Introduction;
