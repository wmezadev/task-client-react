import React, { Fragment } from 'react';
import Task from './Task';

const TaskList = () => {
    const projectTasks = [
        { name: 'Select platform', status: true },
        { name: 'Select colors', status: false },
        { name: 'Select payment platforms', status: false },
        { name: 'Select Hosting', status: true }
    ]

    return ( 
        <Fragment>
            <h2>Project: E-commerce</h2>

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
                className="btn btn-secondary">
            Delete project &times;</button>
        </Fragment>
    );
}
 
export default TaskList;