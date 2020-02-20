import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';

const ProjectState = props => {
    const initialState = {
        form: false
    }

    // dispatch execs actions
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    // Func series for CRUD

    return (
        <ProjectContext.Provider
            value={{
                new: state.form
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
}

export default ProjectState;