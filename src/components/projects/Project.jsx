import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProjectContext from '../../context/projects/ProjectContext';

const Project = ({project}) => {

    // Get project's state 
    const projectContext = useContext(ProjectContext);
    const { currentProject } = projectContext;

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => currentProject(project.id)}
            >{project.name}
            </button>
        </li>
    );
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}

export default Project;