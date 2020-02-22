import React, { Fragment, useContext } from 'react';
import Task from './Task';
import ProjectContext from '../../context/projects/ProjectContext';

const TaskList = () => {

    // get project context
    const projectContext = useContext(ProjectContext);
    const { project, deleteProject } = projectContext;

    // if not current projects
    if(!project) return <h2> Select a project </h2>;
    
    // Array destructuring to extract current project
    const [currentProject] = project;

    const projectTasks = [
        { name: 'Select platform', status: true },
        { name: 'Select colors', status: false },
        { name: 'Select payment platforms', status: false },
        { name: 'Select Hosting', status: true }
    ]

    // Delete a project
    const onClickDelete = () => {
        deleteProject(currentProject.id)
    }

    return ( 
        <Fragment>
            <h2>Project: { project ? currentProject.name : null}</h2>

            <ul className="task-list">
                {projectTasks.length === 0 
                    ? (<li className="task"><p>no tasks</p></li>) 
                    : 
                    projectTasks.map(task => (
                        <Task 
                            task={task}
                        />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={ onClickDelete }
                >
            Delete project &times;</button>
        </Fragment>
    );
}
 
export default TaskList;