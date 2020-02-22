import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import uuid from 'uuid';
import { 
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECTS,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
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
        formError: false,
        project: null
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

    // Get current selected project by user
    const currentProject = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    }

    // delete a project
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formError: state.formError,
                project: state.project,
                toggleForm,
                getProjects,
                addProject,
                showError,
                currentProject,
                deleteProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
}

export default ProjectState;