import React, { useContext } from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/ProjectContext';

const ProjectList = () => {
    // Extract projects from initial state
    const projectContext = useContext(ProjectContext);
    const { projects } = projectContext;

    // Check if projects has items
    if(projects.length === 0) return null;

    return ( 
        <ul className="project-list">
            {
                projects.map(project => (
                    <Project 
                        key={project.id}
                        project={project}/>
                ))
            }
        </ul>
    );
}
 
export default ProjectList;