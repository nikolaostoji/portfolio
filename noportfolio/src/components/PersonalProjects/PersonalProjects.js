import React from 'react';
import Project from '../Project/Project';

const ProjectDescription = (projectName, projectOverview, technologies) => {
  return {
   projectName: projectName,
   projectOverview: projectOverview,
   technologies: technologies
 } 
}

const PortfolioWebsite = ProjectDescription("Website",
"Created a personal portfolio website using React.",
["Javascript", "React", "HTML", "CSS"]);


const PersonalProjects = (props) => (
  <div>
        <h2> Personal Projects </h2>
        <Project project={PortfolioWebsite} />
  </div>
);

export default PersonalProjects;
