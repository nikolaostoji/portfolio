import React from 'react';
import styles from './WorkSummary.module.css';
import WorkExperience from '../WorkExperience/WorkExperience.lazy'

const Experience = (companyName, jobTitle, startDate, endDate, overview, technologies) => {
   return {
    companyName: companyName,
    jobTitle: jobTitle,
    startDate: startDate,
    endDate: endDate,
    overview: overview,
    technologies: technologies
  } 
}

const RitualExperience = Experience("Ritual Inc.", "Senior Software Developer", "March 2021", "June 2023",
"Overview Ritual",
["Java", "Springboot", "GCP", "MySQL", "Terraform", "Terragrunt"]);

const CasewareExperience = Experience("Caseware", "Full-Stack Software Developer", "February 2019", "October 2020",
"Overview Caseware",
["Java", "Springboot", "AWS", "MongoDB", "PostgresSql", "HTML", "CSS", "Typescript", "Angular"]);

const LaborieExperience = Experience("Laborie Medical Technologies", "Software Developer", "May 2017", "February 2019",
"Overview Laborie",
["C#", ".NET", "Azure", "MySQL"]);

const BioradExperience = Experience("Bio-Rad Laboratories", "Software Engineer", "November 2016", "May 2017",
"Overview Biorad contract",
["C++", "OpenCV"]);

const WorkSummary = () => (
  <div className={styles.WorkSummary}>
    <div className={styles.WorkHeader}>
      <h2> Work Experience </h2>
      <a href="../nik_resume.pdf" download='"nik_resume.pdf'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
      </a>
    </div>
    <WorkExperience experience={RitualExperience} />
    <WorkExperience experience={CasewareExperience} />
    <WorkExperience experience={LaborieExperience} />
    <WorkExperience experience={BioradExperience} />
  </div>
);

export default WorkSummary;
