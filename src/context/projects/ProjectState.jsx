import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import { 
    PROJECT_FORM,
    GET_PROJECTS
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

    // Get projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                toggleForm,
                getProjects
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
}

export default ProjectState;