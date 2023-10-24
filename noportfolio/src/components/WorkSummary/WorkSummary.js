import React from 'react';
import styles from './WorkSummary.module.css';
import WorkExperience from '../WorkExperience/WorkExperience.lazy'

const Experience = (companyName, jobTitle, startDate, endDate, overview, technologies, url) => {
   return {
    companyName: companyName,
    jobTitle: jobTitle,
    startDate: startDate,
    endDate: endDate,
    overview: overview,
    technologies: technologies,
    url: url
  } 
}

const RitualExperience = Experience("Ritual Inc.", "Senior Software Developer", "March 2021", "June 2023",
"Designed and successfully led several high-impact projects that involved cross-team collaboration. Had ownership of the Ritual for Companies product, with responsibilities including fixing, maintaining and building out new functionality. Provided recommendations and wrote out documentation on processes to improve developer productivity.",
["Java", "Springboot", "GCP", "MySQL", "Terraform", "Terragrunt", "Keycloak"],
"https://ritual.co/");

const CasewareExperience = Experience("Caseware", "Full-Stack Software Developer", "February 2019", "October 2020",
"Worked on rebuilding a legacy accounting and audit SaaS product. Built out features such as MFA flows, login flows, and auth service. This role involved collaborating with different teams and leading some of the projects.",
["Java", "Springboot", "AWS", "MongoDB", "PostgresSql", "HTML", "CSS", "Typescript", "Angular"],
"https://www.caseware.com/ca/");

const LaborieExperience = Experience("Laborie Medical Technologies", "Software Developer", "May 2017", "February 2019",
"Worked in an agile environment, building new features for medical device software. Collaborated with Product team on the requirements and QA team to ensure features worked correctly.",
["C#", ".NET", "Azure", "MySQL"],
"https://www.laborie.com/");

const BioradExperience = Experience("Bio-Rad Laboratories", "Software Engineer", "November 2016", "May 2017",
"Created software to perform real-time image analysis from a camera using computer vision in order to automatically calibrate fraction collectors.",
["C++", "OpenCV"],
"https://www.bio-rad.com/");

const WorkSummary = () => (
  <div className={styles.WorkSummary}>
    <div className={styles.WorkHeader}>
      <h2> Work Experience </h2>
      <a href="/nik_resume.pdf" download='nikola_resume.pdf'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
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
