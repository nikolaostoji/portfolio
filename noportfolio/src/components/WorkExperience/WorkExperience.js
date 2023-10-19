import React from 'react';
import styles from './WorkExperience.module.css';
import TechnologiesDisplay from '../TechnologiesDisplay/TechnologiesDisplay';

const WorkExperience = (props) => {
  return (
    <div className={styles.WorkExperience}>
      <div>
        <div className={styles.CompanyHeader}>
          <h3> {props.experience.companyName} </h3>
          <h3> {props.experience.startDate} - {props.experience.endDate} </h3>
        </div>
        
        <h3> {props.experience.jobTitle} </h3>
      </div>
      <p>
        <span>
          {props.experience.overview}
        </span>
      </p>
      <TechnologiesDisplay technologies={props.experience.technologies} />
    </div>
  );
}

export default WorkExperience;
