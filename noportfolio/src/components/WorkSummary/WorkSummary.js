import React from 'react';
import styles from './WorkSummary.module.css';
import WorkExperience from '../WorkExperience/WorkExperience.lazy'

const Experience = (companyName, startDate, endDate, overview, technologies) => {
   return {
    companyName: companyName,
    startDate: startDate,
    endDate: endDate,
    overview: overview,
    technologies: technologies
  } 
}

const RitualExperience = Experience("Ritual", "March 2021 (check)", "June 2023",
"Overview Ritual",
["Java", "Springboot", "GCP", "MySql"]);

const CasewareExperience = Experience("Caseware", "December 2019 (check)", "February? 2020",
"Overview Caseware",
["Java", "Springboot", "AWS", "MongoDB", "PostgresSql"]);

const WorkSummary = () => (
  <div className={styles.WorkSummary}>
    <h2> Work Experience </h2>
    <WorkExperience experience={RitualExperience} />
    <WorkExperience experience={CasewareExperience} />
  </div>
);

export default WorkSummary;
