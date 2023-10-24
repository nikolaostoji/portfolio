import React from 'react';
import Project from '../Project/Project';
import styles from './PersonalProjects.module.css';

const ProjectDescription = (projectName, projectOverview, technologies) => {
  return {
   projectName: projectName,
   projectOverview: projectOverview,
   technologies: technologies
 } 
}

const PortfolioWebsite = ProjectDescription("Portfolio Website",
"The portfolio website you are looking at, developed using JS/React, HTML, CSS. Deployed (and setup CI) using netlify.",
["Javascript", "React", "HTML", "CSS"]);

const BartenderRobot = ProjectDescription("Bartending Robot",
"Configured Raspberry Pi as a server (LAN) running Springboot App (Docker image). The server takes drink requests from a chrome browser extension and queues them for the making. ",
["Java", "Springboot", "PostgresSql"]);


const PersonalProjects = (props) => (
  <div className={styles.Projects}>
        <h2> Personal Projects </h2>
        <Project project={PortfolioWebsite} />
        <Project project={BartenderRobot} />
  </div>
);

export default PersonalProjects;
