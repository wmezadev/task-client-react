import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';

const TaskForm = () => {
    // get project context
    const projectContext = useContext(ProjectContext);
    const { project } = projectContext;
    
    if(!project) return null;

    // Array destructuring to extract current project
    const [currentProject] = project;

    return ( 
        <div className="form">
            <form>
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task name..."
                        autoComplete="off"
                        name="name"
                    />
                </div>

                <div className="container-input">
                    <button
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                    >
                    Add task
                    </button>
                </div>
            </form>
        </div>
    );
}
 
export default TaskForm;