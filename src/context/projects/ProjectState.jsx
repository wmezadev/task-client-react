import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import { PROJECT_FORM } from '../../types'; 

const ProjectState = props => {
    const initialState = {
        form: false
    }

    // dispatch execs actions
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    // Func series for CRUD
    const toggleForm = () => {
        dispatch({
            type: PROJECT_FORM
        });
    }

    return (
        <ProjectContext.Provider
            value={{
                form: state.form,
                toggleForm
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
}

export default ProjectState;