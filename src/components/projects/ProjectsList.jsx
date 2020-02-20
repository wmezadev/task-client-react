import React from 'react';
import Project from './Project';

const ProjectList = () => {
    const projects = [
        { name: "E-commerce"},
        { name: "Intranet"},
        { name: "Diseño de Sitio Web"}
    ];

    return ( 
        <ul className="project-list">
            {
                projects.map(project => (
                    <Project project={project}/>
                ))
            }
        </ul>
    );
}
 
export default ProjectList;