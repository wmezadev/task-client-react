import React from 'react';
import PropTypes from 'prop-types';

const Project = ({project}) => {
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >{project.name}
            </button>
        </li>
    );
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}

export default Project;