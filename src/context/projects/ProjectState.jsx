import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import uuid from 'uuid';
import { 
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECTS,
    VALIDATE_FORM
} from '../../types'; 

const ProjectState = props => {

    // mock projects data
    const projects = [
        { id: 1, name: "E-commerce"},
        { id: 2, name: "Intranet"},
        { id: 3, name: "Web design"},
        { id: 4, name: "MERN project"}
    ];

    const initialState = {
        projects: [],
        form: false,
        formError: false
    }

    // dispatch execs actions
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    // Func series for CRUD
    const toggleForm = () => {
        dispatch({
            type: PROJECT_FORM
        });
    }

    // Get projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        });
    }

    // add new project
    const addProject = project => {
        project.id = uuid.v4();

        // add new project
        dispatch({
            type: ADD_PROJECTS,
            payload: project
        });
    }

    // Show error based on Form
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        });
    }

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formError: state.formError,
                toggleForm,
                getProjects,
                addProject,
                showError
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
}

export default ProjectState;