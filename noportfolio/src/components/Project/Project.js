import React from 'react';
import styles from './Project.module.css';
import TechnologiesDisplay from '../TechnologiesDisplay/TechnologiesDisplay';

const Project = (props) => {
  return (
    <div className={styles.Project}>
      <h3> {props.project.projectName} </h3>
      <p>
        <span>
          {props.project.projectOverview}
        </span>
      </p>
      <TechnologiesDisplay technologies={props.project.technologies} />
    </div>
  );
}

export default Project;
