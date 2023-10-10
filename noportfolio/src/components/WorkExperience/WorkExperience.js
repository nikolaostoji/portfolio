import React from 'react';
import styles from './WorkExperience.module.css';

const WorkExperience = (props) => {
  let technologies = props.experience.technologies;
  return (
    <div className={styles.WorkExperience}>
      {/* Company info TODO flex so these are side by side */}
      <div>
        <div> {props.experience.companyName} </div>
        <div> {props.experience.startDate} - {props.experience.endDate} </div>
      </div>
      <div>
        {props.experience.overview}
      </div>
      <ul>
      {technologies.map((technology, index) => (
          <li key={index}> {technology}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkExperience;
